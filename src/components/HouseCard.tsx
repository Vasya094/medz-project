import {
    Box,
    Heading,
    HStack,
    Image,
    Modal,
    ModalContent,
    Tag,
    Text,
    useDisclosure,
    useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import House from '../types/CmsCollectionTypes/house'
import {FaRubleSign} from "react-icons/fa";
import {theme} from '../pages/_app'

type Props = {
    house: House
}

const HouseCard = ({house}: Props) => {
    const [shouldHave2Columns] = useMediaQuery('(min-width: 45rem)')
    const {isOpen, onOpen, onClose} = useDisclosure()

    let bathrooms = house.fullBathrooms.toString()

    if (house.halfBathrooms) {
        if (house.halfBathrooms === 1) {
            bathrooms += '.5'
        } else {
            bathrooms += `f, ${house.halfBathrooms}h`
        }
    }

    return (
        <>
            <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
                <ModalContent style={{maxWidth: 'unset'}}
                              width={'80vw'}
                >
                    <Image
                        width={'full'}
                        padding={'1rem'}
                        rounded={'lg'}
                        objectFit={'contain'}
                        alt={house.description}
                        src={encodeURI(house.thumbnail.data.attributes.formats.small?.url ?? house.thumbnail.data.attributes.url)}
                        backgroundPosition={'center'}
                        backgroundColor={'#ddd'}
                        backgroundSize={'contain'}
                        backgroundRepeat={'no-repeat'}
                        position={'relative'}
                        maxHeight={'80vh'}
                    >
                    </Image>
                </ModalContent>
            </Modal>
            {/*<Link href={'/rental/' + house.id} passHref legacyBehavior>*/}
            {/*<Box onClick={onOpen}>*/}
            <Box
                as={'a'}
                rounded={'xl'}
                p={'1.25rem'}
                width={'full'}
                transition={'100ms'}
                style={{boxShadow: theme.boxShadow}}
                _hover={{backgroundColor: 'brandLight', cursor: 'pointer'}}
                onClick={onOpen}
            >
                <Image
                    height={192}
                    width={'full'}
                    rounded={'lg'}
                    objectFit={'cover'}
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
                        <FaRubleSign/>
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
                <HStack mt={2} spacing={2} flexWrap="wrap">
                    <Tag colorScheme="blue" size="md">
                        {house.category}
                    </Tag>
                    {house.rentPrice && (
                        <Tag colorScheme="green" size="md">
                            {house.rentPrice}₽/сутки
                        </Tag>
                    )}
                </HStack>
            </Box>
            {/*</Link>*/}
            {/*</div>*/}
        </>
    )
}

export default HouseCard
