import { useState } from 'react'
import { Input } from '@chakra-ui/react'

type Props = {
	name: string
	placeholder: string
	disabled: boolean
	required?: boolean
	onChange: (val: string) => void
}

const PhoneNumberInput = ({ name, placeholder, disabled, required, onChange }: Props) => {
	const [inputValue, setInputValue] = useState('')

	const formatPhoneNumber = (val: string) => {
		if (!val) return val

		let phoneNumber = val.replace(/[^\d]/g, '') // Remove non-numeric characters

		// Add the prefix +7 if the user is using 7 or 8 as the first digit
		if (phoneNumber.startsWith('8')) {
			phoneNumber = '7' + phoneNumber.slice(1) // Convert 8 to 7
		} else if (!phoneNumber.startsWith('7')) {
			phoneNumber = '7' + phoneNumber // Ensure the phone starts with 7
		}

		// Format the number as +7 (XXX) XXX-XX-XX
		if (phoneNumber.length <= 1) {
			return `+${phoneNumber}`
		}
		if (phoneNumber.length <= 4) {
			return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1)}`
		}
		if (phoneNumber.length <= 7) {
			return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`
		}
		if (phoneNumber.length <= 9) {
			return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`
		}
		return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`
	}

	const phoneRegex = '(^8|7|\\+7)((\\d{10})|(\\s\\(\\d{3}\\)\\s\\d{3}\\s\\d{2}\\s\\d{2}))';

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		const formattedValue = formatPhoneNumber(value)
		setInputValue(formattedValue)
		onChange(formattedValue)
	}


	return (
		<>
			<Input
				type="tel"
				name={name}
				placeholder={placeholder}
				onChange={handleInputChange}
				value={inputValue}
				disabled={disabled}
				required={required}
			/>
		</>
	)
}

export default PhoneNumberInput
