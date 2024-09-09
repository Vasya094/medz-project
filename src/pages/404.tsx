import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import { FaArrowLeft } from 'react-icons/fa'
import { GetStaticProps } from 'next'
import { getSiteInfo } from '../utils/data'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

type Props = {
	siteInfo: SiteInformation
}

const PageNotFound = ({ siteInfo }: Props) => {
	const router = useRouter()

	return (
		<>
			<SEO seo={{ title: 'Page Not Found' }} siteInfo={siteInfo} />
			<Layout siteInfo={siteInfo}>
				<Flex
					direction={'column'}
					flex={'1'}
					minHeight={'70vh'}
					backgroundImage={'/images/404.jpg'}
					backgroundSize={'cover'}
					backgroundPosition={'center'}
				>
					<VStack
						flex={'1'}
						spacing={'2rem'}
						justifyContent={'center'}
						backgroundColor={'rgba(0, 0, 0, 0.5)'}
					>
						<Text align={'center'} color={'white'} fontSize={'2.5rem'}>
							😕 Страница не найдена или в процессе разработки
						</Text>
						<Button
							color={'white'}
							backgroundColor={'brand'}
							leftIcon={<FaArrowLeft />}
							_hover={{ backgroundColor: 'brandDark' }}
							onClick={() => router.back()}
						>
							Назад
						</Button>
					</VStack>
				</Flex>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const siteInfo = await getSiteInfo()

	return {
		props: { siteInfo },
	}
}

export default PageNotFound
