import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
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
	console.log(siteInfo)
	return (
		<>
			<SEO siteInfo={siteInfo} />
			<Layout siteInfo={siteInfo}>
				<Hero {...homePage} />
				<Container>
					<Stack direction={['column-reverse', 'row']}>
						<Box width={['full', '55%']} mt={'3rem'} mr={[0, '4rem']}>
							<CmsRichText text={homePage.pageBody} siteInfo={siteInfo} />
							<Phone siteInfo={siteInfo} />
							<WhatsappPhone siteInfo={siteInfo} />
						</Box>
						<Box width={['full', '45%']}>
							<ContactForm
								siteInfo={siteInfo}
								formHeading={homePage.contactFormHeading}
								shouldHaveNegativeTopMargin
							/>
						</Box>
					</Stack>
					{/*<Heading mt={'2rem'}>{homePage.featuredTestimonialsHeading}</Heading>*/}
					<Heading mt={'2rem'}>Вкратце о нас</Heading>
					<VStack spacing={'3rem'} my={'3rem'}>ccvccv
						{/*{homePage.featuredTestimonials.data.map(*/}
						{/*	(testimonialData, index) => (*/}
						{/*		<TestimonialCard*/}
						{/*			key={index}*/}
						{/*			testimonial={testimonialData.attributes}*/}
						{/*			index={index}*/}
						{/*		/>*/}
						{/*	)*/}
						{/*)}*/}

						<header>
							<Heading>Широкий ассортимент строительной техники и инструментов с доставкой и обслуживанием</Heading>
						</header>

						<section>
							<p><strong>Наша компания</strong> — это <strong>клиентоориентированный</strong> партнер, который предлагает надежные решения в области аренды и продажи строительного оборудования и инструментов. Мы гордимся тем, что предоставляем клиентам <strong>широкий ассортимент</strong> продукции, удовлетворяющей любые потребности на строительных площадках, а также берем на себя все заботы по <strong>обслуживанию техники</strong>.</p>
						</section>

						<section>
							<h2>Клиентоориентированность на первом месте</h2>
							<p>Мы понимаем, что каждый клиент уникален, и наши услуги нацелены на индивидуальный подход к каждому проекту. Наша цель — <strong>облегчить ваш строительный процесс</strong>, предлагая гибкие условия аренды, возможность выбора подходящего оборудования и <strong>полное сопровождение</strong> на всех этапах сотрудничества.</p>
						</section>

						<section>
							<h2>Широкий ассортимент строительной техники и инструментов</h2>
							<p>Наш ассортимент включает:</p>
							<ul>
								<li><strong>Мини-тракторы</strong> для работы на узких или ограниченных участках;</li>
								<li><strong>Бетономешалки</strong> для строительства;</li>
								<li><strong>Инструменты для алмазного бурения и резки</strong>;</li>
								<li>И многое другое.</li>
							</ul>
							<p>Мы предлагаем оборудование как для <strong>аренды</strong>, так и для <strong>продажи</strong>, обеспечивая гибкость в зависимости от ваших потребностей.</p>
						</section>

						<section>
							<h2>Доставка и обслуживание — все под ключ</h2>
							<p>Мы предлагаем <strong>быструю и надежную доставку</strong> оборудования на строительные объекты, чтобы сэкономить ваше время и ресурсы. Кроме того, наша команда берет на себя <strong>обслуживание техники</strong>, обеспечивая её бесперебойную работу и долгосрочную эксплуатацию. Вы можете быть уверены, что с нами ваш проект будет идти без задержек.</p>
						</section>

						<section>
							<h2>Почему выбирают нас?</h2>
							<ul>
								<li><strong>Высокий уровень сервиса</strong> и индивидуальный подход к каждому клиенту;</li>
								<li>Широкий выбор техники и инструментов для аренды и покупки;</li>
								<li><strong>Квалифицированная поддержка</strong> и обслуживание на протяжении всего времени сотрудничества;</li>
								<li>Быстрая и надежная доставка по региону.</li>
							</ul>
						</section>

						<footer>
							<p>Свяжитесь с нами сегодня, чтобы обсудить ваши потребности и получить персонализированное предложение. Мы всегда рады помочь вам в выборе техники и инструментов для успешного выполнения вашего проекта!</p>
							<p><strong>Наша компания</strong> — ваш надежный партнер в строительстве!</p>
						</footer>
					</VStack>
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
