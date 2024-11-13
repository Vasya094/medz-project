import {
	Stack,
	Flex,
	Button,
	Heading,
	VStack,
	useBreakpointValue,
	keyframes,
} from '@chakra-ui/react'
import Link from 'next/link'
import Container from './Container'
import HomePageType from '../types/CmsSingleTypes/homePage'
import collage from '../../public/images/c250f4376fbfb2943bf09d42b3037290.jpg'

// Define the pulsing animation
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Hero = ({
	heroImage,
	heroText,
	primaryCallToActionButtonText,
	primaryCallToActionButtonLink,
	secondaryCallToActionButtonText,
	secondaryCallToActionButtonLink,
	primaryCallToActionButtonLinkSec,
	primaryCallToActionButtonTextSec,
}: HomePageType) => {
	return (
		<Flex
			w={'full'}
			h={'70vh'}
			minHeight={'31rem'}
			maxHeight={'50rem'}
			backgroundImage={collage.src}
			backgroundSize={'auto'}
			backgroundPosition={'center'}
			aria-label="Hero section"
		>
			<VStack
				w={'full'}
				justifyContent={'center'}
				alignItems={'flex-start'}
				px={[4, 8]}
				pb={[6, 0]}
				backgroundColor='blackAlpha.700'
			>
				<Container>
					<Stack
						maxWidth={'4xl'}
						align={['center', 'flex-start']}
						spacing={['2.5rem', '3rem']}
					>
						<Heading
							color={'white'}
							fontWeight={700}
							lineHeight={1.2}
							fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}
						>
							{heroText}
						</Heading>
						<Stack direction={['column', 'row']} spacing={['0.5rem', '1rem']}>
							<Link href={primaryCallToActionButtonLinkSec} passHref legacyBehavior>
								<Button
									as={'a'}
									bg={'brand'}
									color={'white'}
									_hover={{ bg: 'brandDark', transform: 'scale(1.05)', boxShadow: 'lg' }}
									_active={{ bg: 'brandDark', transform: 'scale(0.95)' }}
									transition="all 0.2s ease-in-out"
									title={primaryCallToActionButtonTextSec}
									px={6}
									py={3}
									borderRadius="md"
									animation={`${pulseAnimation} 2s infinite`} // Add pulsing animation
								>
									{primaryCallToActionButtonTextSec}
								</Button>
							</Link>
							<Link href={primaryCallToActionButtonLink} passHref legacyBehavior>
								<Button
									as={'a'}
									bg={'brand'}
									color={'white'}
									_hover={{ bg: 'brandDark' }}
									title={primaryCallToActionButtonText}
								>
									{primaryCallToActionButtonText}
								</Button>
							</Link>
							{secondaryCallToActionButtonText && (
								<Link href={secondaryCallToActionButtonLink} passHref legacyBehavior>
									<Button
										as={'a'}
										bg={'transparent'}
										color={'whiteAlpha.800'}
										_hover={{ bg: 'whiteAlpha.400' }}
										title={secondaryCallToActionButtonText}
									>
										{secondaryCallToActionButtonText}
									</Button>
								</Link>
							)}
						</Stack>
					</Stack>
				</Container>
			</VStack>
		</Flex>
	)
}

export default Hero
