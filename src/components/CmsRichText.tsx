import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import { populateShortCodes } from '../utils/pipes'
import parse, { Element, domToReact } from 'html-react-parser'
import { Box } from '@chakra-ui/react'
import styles from '../styles/CmsRichText.module.scss'
import Link from 'next/link'

const isExternalLink = (url: string) => {
	if (typeof window === 'undefined') {
		return url.startsWith('http')
	}

	const tmp = document.createElement('a')
	tmp.href = url
	return tmp.host !== window.location.host
}

type Props = {
	text: string
	siteInfo: SiteInformation
}

const CmsRichText = ({ text, siteInfo }: Props) => (
	<Box 
		className={styles.resetCSS}
		sx={{
			'p': {
				fontSize: 'lg',
				lineHeight: 1.8,
				color: 'gray.700',
			},
			'h2': {
				fontSize: '2xl',
				fontWeight: 'bold',
				my: 6,
				color: 'gray.800',
			},
			'h3': {
				fontSize: 'xl',
				fontWeight: 'semibold',
				my: 4,
				color: 'gray.800',
			},
			'ul, ol': {
				pl: 6,
				my: 4,
			},
			'li': {
				mb: 2,
			},
			'a': {
				color: 'blue.500',
				textDecoration: 'underline',
				_hover: {
					color: 'blue.600',
				},
			},
		}}
	>
		{parse(populateShortCodes(text, siteInfo), {
			replace: (domNode) => {
				if (domNode instanceof Element && domNode.name === 'a') {
					const url = domNode.attribs.href
					return (
						<Link 
							href={url} 
							passHref 
							target={isExternalLink(url) ? '_blank' : undefined}
							rel={isExternalLink(url) ? 'noopener noreferrer' : undefined}
						>
							{domToReact(domNode.children)}
						</Link>
					)
				}
			},
		})}
	</Box>
)

export default CmsRichText
