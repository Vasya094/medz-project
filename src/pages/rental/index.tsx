import { Box, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import SiteInformation from '../../types/CmsSingleTypes/siteInformation'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import House from '../../types/CmsCollectionTypes/house'
import HouseCard from '../../components/HouseCard'
import CmsRichText from '../../components/CmsRichText'
import SimplePage from '../../types/CmsSingleTypes/simplePage'
import SEO from '../../components/SEO'
import { metaDescriptionFromHtml } from '../../utils/pipes'
import { galleryPage, houses, siteInfo } from '../../../bd/gallery'

type Props = {
	galleryPage: SimplePage
	houses: Array<House>
	siteInfo: SiteInformation
}

const Gallery = ({ galleryPage, houses, siteInfo }: Props) => {
	const [shouldHave2Columns] = useMediaQuery('(min-width: 45rem)')
	console.log(houses)

	return (
		<>
			<SEO
				seo={{
					title: galleryPage.title,
					description: metaDescriptionFromHtml(galleryPage.pageBody),
				}}
				siteInfo={siteInfo}
			/>
			<Layout siteInfo={siteInfo}>
				<Container>
					<Box mb={'2rem'}>
						<CmsRichText text={galleryPage.pageBody} siteInfo={siteInfo} />
					</Box>
					<SimpleGrid
						w={'full'}
						columns={[shouldHave2Columns ? 2 : 1, 2, 3]}
						spacing={'2rem'}
						overflow={'visible'}
						mb={'3rem'}
					>
						{houses.map((house, index) => (
							<HouseCard key={index} house={house} />
						))}
					</SimpleGrid>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	// const [houses] = await Promise.all([
	// 	getData('houses?populate=thumbnail'),
	// ])


	return {
		props: { galleryPage, houses, siteInfo },
	}
}

export default Gallery