import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import Container from '../components/Container'
import Layout from '../components/Layout'
import CmsRichText from '../components/CmsRichText'
import SimplePage from '../types/CmsSingleTypes/simplePage'
import { Box, Heading } from '@chakra-ui/react'
import SEO from '../components/SEO'
import { metaDescriptionFromHtml } from '../utils/pipes'
import { aboutUsPage, siteInfo } from '../../bd/about'

type Props = {
	aboutUsPage: SimplePage
	siteInfo: SiteInformation
}

const AboutUsPage = ({ aboutUsPage, siteInfo }: Props) => {
	return (
		<>
			<SEO
				seo={{
					title: `About Us - ${siteInfo.siteName}`,
					description: metaDescriptionFromHtml(aboutUsPage.pageBody),
					og: {
						title: `About Us - ${siteInfo.siteName}`,
						description: metaDescriptionFromHtml(aboutUsPage.pageBody),
						type: 'website',
						url: `${siteInfo.siteUrl}/about`,
					},
				}}
				siteInfo={siteInfo}
			/>
			<Layout siteInfo={siteInfo}>
				<Container thin>
					<Box py={12}>
						<Heading 
							as="h1" 
							size="2xl" 
							textAlign="center"
							mb={6}
						>
							{aboutUsPage.title}
						</Heading>
						<Box 
							className="about-content"
							sx={{
								'& > *:not(:last-child)': {
									marginBottom: '2rem',
								},
							}}
						>
							<CmsRichText text={aboutUsPage.pageBody} siteInfo={siteInfo} />
						</Box>
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: { aboutUsPage, siteInfo },
	}
}

export default AboutUsPage
