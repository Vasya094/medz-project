import {
	Heading,
	Box,
	Button,
	VStack,
	Text,
	Input,
	Textarea,
} from '@chakra-ui/react'
import {ReactNode, useState} from 'react'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import PhoneNumberInput from './PhoneNumberInput'
import sendFeedbackToTelegram from './../utils/tg'

type Props = {
	siteInfo: SiteInformation
	formHeading?: string
	shouldHaveNegativeTopMargin?: boolean
}

const ContactForm = ({
						 siteInfo,
						 formHeading,
						 shouldHaveNegativeTopMargin,
					 }: Props) => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const setValue = (name: string, value: string) => {
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			await sendFeedbackToTelegram(formState)
			setIsSuccess(true)
		} catch (error) {
			console.error('Error sending feedback:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	const emailRegex =
		'(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])'

	const errorTextColor = '#dd0000'

	const box = (children: ReactNode) => (
		<Box
			w={'full'}
			backgroundColor={'white'}
			boxShadow={'2xl'}
			rounded={'md'}
			mt={shouldHaveNegativeTopMargin ? ['-1rem', '-5rem'] : undefined}
		>
			<Box p={['2rem', '3rem']}>{children}</Box>
		</Box>
	)

	if (isSuccess) {
		return box(
			<VStack spacing={'1rem'} py={'11.25rem'}>
				<Heading fontSize={'1.5rem'} textAlign={'center'} fontWeight={'bold'}>
					Спасибо за заполнение формы
				</Heading>
				<Text>Мы свяжемся с Вами в ближайшее время</Text>
			</VStack>
		)
	}

	return box(
		<form onSubmit={handleSubmit}>
			<VStack spacing={'1rem'}>
				{formHeading && (
					<Heading fontSize={'1.5rem'} textAlign={'center'} fontWeight={'bold'}>
						{formHeading}
					</Heading>
				)}

				<Input
					type="text"
					name="name"
					placeholder="Как к Вам обращаться"
					value={formState.name}
					onChange={handleChange}
					disabled={isSubmitting}
					required
				/>

				<Input
					type="email"
					name="email"
					placeholder="Email (необязательно)"
					pattern={emailRegex}
					value={formState.email}
					onChange={handleChange}
					disabled={isSubmitting}
				/>

				<PhoneNumberInput
					name="phone"
					placeholder="Номер Телефона"
					onChange={(val: string) => setValue('phone', val)}
					disabled={isSubmitting}
					required
				/>

				<Textarea
					name="message"
					placeholder="Вопрос сообщение доп информация"
					minHeight={'10rem'}
					value={formState.message}
					onChange={handleChange}
					disabled={isSubmitting}
					required
				/>

				<Button
					type="submit"
					w={'full'}
					mt={8}
					backgroundColor={'brand'}
					color={'white'}
					rounded={'md'}
					_hover={{ bg: 'brandDark' }}
				>
					{isSubmitting ? 'Отправка...' : 'Отправить'}
				</Button>
			</VStack>
		</form>
	)
}

export default ContactForm
