import { Box, Heading, Stack, VStack, Text, List, ListItem, Container as ChakraContainer } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Layout from '../components/Layout'
import HomePageType from '../types/CmsSingleTypes/homePage'
import CmsRichText from '../components/CmsRichText'
import ContactForm from '../components/ContactForm'
import Phone from '../components/Phone'
import SEO from '../components/SEO'
import { homePage, siteInfo } from '../../bd'
import WhatsappPhone from '../components/WhatsappPhone'

type Props = {
	homePage: HomePageType
	siteInfo: SiteInformation
}

const HomePage = ({ homePage, siteInfo }: Props) => {
	return (
		<>
			<SEO siteInfo={siteInfo} />
			<Layout siteInfo={siteInfo}>
				<Hero {...homePage} />
				<Container>
					<Stack 
						direction={['column-reverse', 'column-reverse', 'row']} 
						spacing={[6, 8, 10]}
						py={[6, 8, 10]}
					>
						<Box width={['full', 'full', '55%']} mt={['2rem', '3rem']} mr={[0, 0, '4rem']}>
							<CmsRichText text={homePage.pageBody} siteInfo={siteInfo} />
							<Stack direction={['column', 'row']} spacing={4} mt={6}>
								<Phone siteInfo={siteInfo} />
								<WhatsappPhone siteInfo={siteInfo} />
							</Stack>
						</Box>
						<Box width={['full', 'full', '45%']}>
							<ContactForm
								siteInfo={siteInfo}
								formHeading={homePage.contactFormHeading}
								shouldHaveNegativeTopMargin
							/>
						</Box>
					</Stack>

					<ChakraContainer maxW="container.lg" py={[8, 10, 12]}>
						<Heading 
							as="h2" 
							fontSize={['2xl', '3xl', '4xl']}
							textAlign="center"
							mb={8}
						>
							Ваш надежный партнер в строительстве
						</Heading>

						<VStack spacing={8} align="stretch">
							<Box>
								<Text fontSize={['lg', 'xl']} lineHeight="tall" textAlign="center" mb={6}>
									<strong>Более 10 лет</strong> мы помогаем строительным компаниям и частным застройщикам реализовывать проекты любой сложности, предоставляя современную технику и профессиональный сервис.
								</Text>
							</Box>

							<Stack direction={['column', 'column', 'row']} spacing={6}>
								<Box flex="1" p={6} bg="gray.50" borderRadius="lg">
									<Heading as="h3" size="md" mb={4}>Преимущества аренды</Heading>
									<List spacing={3}>
										<ListItem>✓ Экономия на покупке и обслуживании</ListItem>
										<ListItem>✓ Всегда исправная техника</ListItem>
										<ListItem>✓ Оперативная замена при необходимости</ListItem>
										<ListItem>✓ Доставка на объект</ListItem>
									</List>
								</Box>
								<Box flex="1" p={6} bg="gray.50" borderRadius="lg">
									<Heading as="h3" size="md" mb={4}>Наш сервис</Heading>
									<List spacing={3}>
										<ListItem>✓ Техническая консультация</ListItem>
										<ListItem>✓ Круглосуточная поддержка</ListItem>
										<ListItem>✓ Обучение персонала</ListItem>
										<ListItem>✓ Гибкие условия оплаты</ListItem>
									</List>
								</Box>
							</Stack>

							<Box mt={8}>
								<Heading as="h3" size="lg" mb={6} textAlign="center">
									Популярное оборудование
								</Heading>
								<Stack direction={['column', 'column', 'row']} spacing={6}>
									<Box flex="1" p={6} borderWidth="1px" borderRadius="lg">
										<Heading as="h4" size="md" mb={3}>Мини-техника</Heading>
										<Text>Компактные погрузчики, экскаваторы и тракторы для работы в ограниченном пространстве.</Text>
									</Box>
									<Box flex="1" p={6} borderWidth="1px" borderRadius="lg">
										<Heading as="h4" size="md" mb={3}>Бетонное оборудование</Heading>
										<Text>Бетономешалки, виброплиты и другое оборудование для бетонных работ.</Text>
									</Box>
									<Box flex="1" p={6} borderWidth="1px" borderRadius="lg">
										<Heading as="h4" size="md" mb={3}>Инструменты</Heading>
										<Text>Профессиональный инструмент для алмазного бурения, резки и демонтажа.</Text>
									</Box>
								</Stack>
							</Box>
						</VStack>
					</ChakraContainer>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = () => {
	// const [homePage, siteInfo] = await Promise.all([
	// 	getData('home-page?populate=*'),
	// 	getSiteInfo(),
	// ])

	return {
		props: {
			homePage,
			siteInfo,
		},
	}
}

export default HomePage
