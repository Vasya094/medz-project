import Head from 'next/head'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import SeoData from '../types/SeoData'

type Props = {
	seo?: Partial<SeoData>
	siteInfo: SiteInformation
}
const SEO = ({ seo, siteInfo }: Props) => {
	const globalSeo = siteInfo.globalSeo

	const title = seo?.title ?? globalSeo.title
	const description = seo?.description ?? globalSeo.description
	const shareImage = seo?.shareImage ?? globalSeo.shareImage

	return (
		<Head>
			{/* Title */}
			<title>{title}</title>
			<meta
				property='og:title'
				key='og:title'
				content={title === globalSeo.title ? title : `${title} - ${siteInfo.websiteName}`}
			/>

			{/* Description */}
			<meta
				name='description'
				key='description'
				content={description}
			/>
			<meta
				name='og:description'
				key='og:description'
				content={description}
			/>

			<meta name="keywords"
				  content="Прокат инструмента, Прокат инструмента Астрахань,
				   Аренда инструмента, Аренда инструмента в Астрахани,
				    Прокат строительного инструмента, Аренда строительного инструмента,
				    Прокат аренды инструмента и оборудования в Астрахани,
				     Прокат профессионального инструмента, прокат ручного инструмента,
				      аренда отбойного молотка, аренда перфоратора в Астрахани,
				       прокат бетонолома в Астрахани, аренда бадьи, аренда вибратора для бетона,
				        прокат виброплиты, аренда генератора, прокат электростанции в Астрахани,
				        аренда лестниц, прокат монтажного пистолета, аренда гвоздезабивателя,
				         аренда плиткореза, прокат садового инструмента, легкие строительные инструменты,
				          тепловые пушки, компрессоры, мойки строительные, насосы, обогреватели,
				           трубогибы, Углошлифовальные машинки, Шуруповерты, Электромонтажный инструмент,
				            Мотобуры, шлифмашины, Астраханская область,
				             Волгоградская область, Калмыкия, Республика Дагестан" />

			{/* Type */}
			<meta
				property='og:type'
				content='website'
			/>

			{/* Share Image */}
			<meta
				property='og:image'
				key='og:image'
				content={shareImage.data.attributes.formats.large?.url ?? shareImage.data.attributes.url}
			/>
			<meta
				name='twitter:card'
				key='twitter:card'
				content='summary_large_image'
			/>

			{/* Site Name */}
			<meta
				property='og:site_name'
				key='og:site_name'
				content={siteInfo.websiteName}
			/>
		</Head>
	)
}

export default SEO
