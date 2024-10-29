import CmsMedia from './cmsMedia'

export interface OpenGraphData {
	title: string
	description: string
	type: string
	url: string
}

export default interface SeoData {
	title: string
	description: string
	shareImage: CmsMedia
	og?: OpenGraphData
}
