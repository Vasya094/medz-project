import { Box, Stack, Image, HStack, Text } from '@chakra-ui/react'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import Container from './Container'
import CmsRichText from './CmsRichText'
import Link from 'next/link'
import CmsMedia from '../types/cmsMedia'
import { ReactElement } from 'react'

const footerImage = (image: CmsMedia, alt?: string): ReactElement => (
	<Image
		src={image.data.attributes.formats.small?.url ?? image.data.attributes.url}
		 alt={alt || image.data.attributes.alternativeText}
		display={'block'}
		height={'100%'}
		width={'auto'}
		margin={'auto'}
		borderRadius={'0.5rem'}
		transition="transform 0.3s ease"
		_hover={{
			transform: 'scale(1.05)',
			filter: 'brightness(1.1)',
		}}
		loading="lazy"
	/>
)

interface Props {
	siteInfo: SiteInformation
}

const Footer = ({ siteInfo }: Props): ReactElement => {
	const currentYear = new Date().getFullYear()
	
	return (
		<Box 
			as="footer" 
			role="contentinfo" 
			backgroundColor='gray.800' 
			color='white' 
			py={'2rem'}
			borderTop="1px solid"
			borderColor="gray.700"
		>
			<Container>
				<Stack
					direction={['column', 'row']}
					justifyContent='space-between'
					spacing='2rem'
					align="start"
				>
					<Box 
						textAlign={['center', 'left']}
						flex="1"
						sx={{
							'a': {
								color: 'white',
								_hover: {
									color: 'gray.200',
									textDecoration: 'underline'
								}
							},
							'p': {
								color: 'white'
							}
						}}
					>
						<CmsRichText text={siteInfo.footerLeft} siteInfo={siteInfo} />
					</Box>
					<Stack
						direction={['column', 'row']}
						spacing='3rem'
						textAlign={['center', 'left']}
						align="start"
						flex="1"
					>
						<Box 
							flex="1"
							sx={{
								'a': {
									color: 'white',
									_hover: {
										color: 'gray.200',
										textDecoration: 'underline'
									}
								},
								'p': {
									color: 'white'
								}
							}}
						>
							<CmsRichText text={siteInfo.footerRight} siteInfo={siteInfo} />
						</Box>
						<HStack
							justify={['center', 'flex-end']}
							 spacing={'2rem'}
							 flex="1"
						>
							{siteInfo.headshot.data && (
								<Box h={'8rem'}>
									{siteInfo.realEstateWebsite ? (
										<Link 
											href={siteInfo.realEstateWebsite} 
											passHref 
											target={'_blank'}
											rel="noopener noreferrer"
											aria-label="Visit real estate profile"
										>
											{footerImage(siteInfo.headshot, 'Real Estate Agent Headshot')}
										</Link>
									) : footerImage(siteInfo.headshot)}
								</Box>
							)}
							{siteInfo.realEstateLogo.data && (
								<Box h={'8rem'}>
									{siteInfo.realEstateWebsite ? (
										<Link 
											href={siteInfo.realEstateWebsite} 
											passHref 
											target={'_blank'}
											rel="noopener noreferrer"
											aria-label="Visit real estate company website"
										>
											{footerImage(siteInfo.realEstateLogo, 'Real Estate Company Logo')}
										</Link>
									) : footerImage(siteInfo.realEstateLogo)}
								</Box>
							)}
						</HStack>
					</Stack>
				</Stack>
				<Text 
					textAlign="center" 
					fontSize="sm" 
					mt={8} 
					color="white"
					_hover={{ color: 'gray.200' }}
				>
					© {currentYear}. All rights reserved.
				</Text>
			</Container>
		</Box>
	)
}

export default Footer
