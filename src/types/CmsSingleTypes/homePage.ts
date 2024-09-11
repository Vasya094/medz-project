import Testimonial from '../CmsCollectionTypes/testimonial'
import CmsMedia from '../cmsMedia'

export default interface HomePage {
	heroImage: CmsMedia
	heroText: string
	primaryCallToActionButtonText: string
	primaryCallToActionButtonLink: string
	secondaryCallToActionButtonText: string
	secondaryCallToActionButtonLink: string
	primaryCallToActionButtonLinkSec: string
	primaryCallToActionButtonTextSec: string
	pageBody: string
	contactFormHeading: string
	featuredTestimonialsHeading: string
	featuredTestimonials: { data: Array<{ attributes: Testimonial }> }
}
