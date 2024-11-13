import { Box, Heading, Stack, VStack, Text, List, ListItem, Container as ChakraContainer, SimpleGrid } from '@chakra-ui/react'
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
import Link from "next/link"; 

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
						direction={['column', 'column', 'row']} 
						spacing={6}
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

					<ChakraContainer maxW="100%" py={[8, 10, 12]} mx={0} bg="gray.50" borderRadius="lg" boxShadow="lg">
						<Heading 
							as="h2" 
							fontSize={['2xl', '3xl', '4xl']}
							textAlign="center"
							mb={8}
							color="teal.600"
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
								<Box flex="1" p={6} bg="white" borderRadius="lg" boxShadow="md">
									<Heading as="h3" size="md" mb={4}>Преимущества аренды</Heading>
									<List spacing={3}>
										<ListItem>✓ Экономия на покупке и обслуживании</ListItem>
										<ListItem>✓ Всегда исправная техника</ListItem>
										<ListItem>✓ Оперативная замена при необходимости</ListItem>
										<ListItem>✓ Доставка на объект</ListItem>
									</List>
								</Box>
								<Box flex="1" p={6} bg="white" borderRadius="lg" boxShadow="md">
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
								<Heading as="h3" size="lg" mb={6} textAlign="center" fontWeight="bold" color="teal.600">
									Популярное оборудование
								</Heading>
								<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
									<Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="md" transition="0.3s" _hover={{ boxShadow: "lg", transform: "scale(1.02)" }} bg="white">
										<Heading as="h4" size="md" mb={3} color="teal.500">Отбойный молоток бензиновый</Heading>
										<Text>Ваш надёжный помощник в строительстве. Ищете надёжный инструмент для строительных работ? Наш бензиновый отбойный молоток — это именно то, что вам нужно! Он обладает высокой мощностью и эффективностью, позволяя быстро и качественно выполнять даже самые сложные задачи.</Text>
									</Box>
									<Box as={Link} href="/about/vibratoryplate" p={6} borderWidth="1px" borderRadius="lg" boxShadow="md" transition="0.3s" _hover={{ boxShadow: "lg", transform: "scale(1.02)" }} bg="white">
										<Heading as="h4" size="md" mb={3} color="teal.500">Трамбовка Виброплита</Heading>
										<Text>Идеальное решение для уплотнения грунта. Наша виброплита — незаменимый инструмент для уплотнения различных типов грунта. Она обеспечивает равномерное распределение нагрузки, что позволяет достичь максимальной плотности и прочности поверхности.</Text>
										<Text>Эффективное уплотнение грунта и асфальта. Трамбовка — это ещё один важный инструмент в арсенале любого строителя. Она позволяет эффективно уплотнять грунт и асфальт, обеспечивая надёжное основание для строительства.</Text>
									</Box>
									<Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="md" transition="0.3s" _hover={{ boxShadow: "lg", transform: "scale(1.02)" }} bg="white">
										<Heading as="h4" size="md" mb={3} color="teal.500">Бензиновый генератор</Heading>
										<Text>Бесперебойная поставка электрической энергии. Наш бензиновый генератор — это надёжное решение для обеспечения бесперебойной поставки электрической энергии.</Text>
									</Box>
									<Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="md" transition="0.3s" _hover={{ boxShadow: "lg", transform: "scale(1.02)" }} bg="white">
										<Heading as="h4" size="md" mb={3} color="teal.500">Мини-самосвал (думпер)</Heading>
										<Text>Удобство и эффективность в перевозке грузов. Если вам нужна удобная и эффективная техника для превозки грузов, наш мини-самосвал станет отличным выбором.</Text>
									</Box>
									<Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="md" transition="0.3s" _hover={{ boxShadow: "lg", transform: "scale(1.02)" }} bg="white">
										<Heading as="h4" size="md" mb={3} color="teal.500">Плавающая виброрейка бензиновая</Heading>
										<Text>Точное выравнивание поверхностей. Хотите добиться идеального выравнивания поверхностей? Наша плавающая виброрейка поможет вам в этом.</Text>
									</Box>
								</SimpleGrid>
							</Box>
						</VStack>
					</ChakraContainer>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {
			homePage,
			siteInfo,
		},
	}
}

export default HomePage
