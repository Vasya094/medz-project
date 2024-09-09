import { FaTelegramPlane } from "react-icons/fa";
import { theme } from '../pages/_app'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import IconText from './IconText'

type Props = {
	siteInfo: SiteInformation
}

const TGLink = ({ siteInfo }: Props) => {
	return (
		<IconText
			icon={<FaTelegramPlane color={theme.colors.brand} size={'1.25rem'} />}
			text={siteInfo.tgPhone}
			isTg
		/>
	)
}

export default TGLink
