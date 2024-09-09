import {Box, Heading, HStack, Text, Image, useMediaQuery} from '@chakra-ui/react'
import React from 'react'
import House from '../types/CmsCollectionTypes/house'
import { FaRubleSign } from "react-icons/fa";
import Link from 'next/link'
import { theme } from '../pages/_app'

type Props = {
	house: House
}

const HouseCard = ({ house }: Props) => {
	const [shouldHave2Columns] = useMediaQuery('(min-width: 45rem)')

	let bathrooms = house.fullBathrooms.toString()

	if (house.halfBathrooms) {
		if (house.halfBathrooms === 1) {
			bathrooms += '.5'
		} else {
			bathrooms += `f, ${house.halfBathrooms}h`
		}
	}

	return (
		<Link href={'/rental/' + house.id} passHref legacyBehavior>
			<Box
				as={'a'}
				rounded={'xl'}
				p={'1.25rem'}
				width={'full'}
				transition={'100ms'}
				style={{ boxShadow: theme.boxShadow }}
				_hover={{ backgroundColor: 'brandLight', cursor: 'pointer' }}
			>
				<Image
					height={192}
					width={'full'}
					rounded={'lg'}
					alt={house.description}
					src={encodeURI(house.thumbnail.data.attributes.formats.small?.url ?? house.thumbnail.data.attributes.url)}
					backgroundPosition={'center'}
					backgroundColor={'#ddd'}
					backgroundSize={'contain'}
					backgroundRepeat={'no-repeat'}
					position={'relative'}
				>
				</Image>

				<HStack
					mt={'0.75rem'}
					mb={'0.5rem'}
					fontWeight={'bold'}
					color={'brand'}
					fontSize={'1.1rem'}
					spacing={shouldHave2Columns ? '2rem' : 0}
					justifyContent={shouldHave2Columns ? 'flex-start' : 'space-between'}
				>
					<HStack>
						<FaRubleSign />
						<Text>
							{house.rentPrice} руб/сут
						</Text>
					</HStack>
				</HStack>
				<Heading as='h2' size='md'>
					{house.title}
				</Heading>
				<Heading mt={'1rem'} as='h5' size='sm' color={'gray'}>
					{house.description}
				</Heading>
			</Box>
		</Link>
	)
}

export default HouseCard
