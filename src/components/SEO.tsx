import Head from 'next/head'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import SeoData from '../types/SeoData'
import { houses } from '../../bd/gallery'

interface House {
	title: string
	description: string
	rentPrice: number
	thumbnail: {
		data: {
			attributes: {
				url: string
				alternativeText?: string
			}
		}
	}
}

type Props = {
	seo?: Partial<SeoData>
	siteInfo: SiteInformation
}

const SEO = ({ seo, siteInfo }: Props) => {
	const globalSeo = siteInfo.globalSeo

	const title = seo?.title ?? globalSeo.title
	const description = seo?.description ?? globalSeo.description
	const shareImage = seo?.shareImage ?? globalSeo.shareImage
	const canonicalUrl = `${siteInfo.siteUrl}${seo?.og?.url || ''}`
	// Create keywords and descriptions from houses
	const houseKeywords = houses.map((house) => house.title).join(', ')
	const houseDescriptions = houses
		.map((house) => house.description)
		.filter(Boolean)
		.join('. ')

	// Create structured data for organization
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteInfo.websiteName,
		description: globalSeo.description,
		url: siteInfo.siteUrl,
		logo: siteInfo.logo?.data?.attributes?.url,
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: siteInfo.phone,
			contactType: 'customer service',
		},
	}

	// Create structured data for rental equipment
	const rentalEquipmentSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: houses.map((house, index) => ({
			'@type': 'Product',
			position: index + 1,
			name: house.title,
			description: house.description,
			offers: {
				'@type': 'Offer',
				price: house.rentPrice,
				priceCurrency: 'RUB',
				availability: 'https://schema.org/InStock',
			},
			image: house.thumbnail?.data?.attributes?.url,
		})),
	}

	return (
		<Head>
			{/* Basic Meta Tags */}
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="robots" content="index, follow" />
			<link rel="canonical" href={canonicalUrl} />
			<meta name="yandex-verification" content="5d5b6c9f616d916d" />
			{/* Primary Meta Tags */}
			<meta name="title" content={title} />
			<meta name="description" content={`${description}. ${houseDescriptions}`} />
			<meta 
				name="keywords" 
				content={`Прокат инструмента, Прокат инструмента Астрахань, 
				Аренда инструмента, Аренда инструмента в Астрахани, 
				${houseKeywords}, Астраханская область, 
				Волгоградская область, Калмыкия, Республика Дагестан`} 
			/>

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={`${description}. ${houseDescriptions}`} />
			<meta 
				property="og:image" 
				content={shareImage.data.attributes.formats.large?.url ?? shareImage.data.attributes.url} 
			/>
			<meta property="og:site_name" content={siteInfo.websiteName} />
			<meta property="og:locale" content="ru_RU" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:url" content={canonicalUrl} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={`${description}. ${houseDescriptions}`} />
			<meta 
				name="twitter:image" 
				content={shareImage.data.attributes.formats.large?.url ?? shareImage.data.attributes.url} 
			/>

			{/* Additional Meta Tags */}
			<meta name="author" content={siteInfo.companyLegalName} />
			<meta name="geo.region" content="RU" />
			<meta name="geo.placename" content="Астрахань" />
			<meta name="format-detection" content="telephone=no" />

			{/* Structured Data */}
			<script 
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
			/>
			<script 
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalEquipmentSchema) }}
			/>
		</Head>
	)
}

export default SEO
