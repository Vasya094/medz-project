import { Box, Heading, SimpleGrid, useMediaQuery, Text, Stack, Tag, HStack, Input, Select } from '@chakra-ui/react'
import { useState, useMemo } from 'react'
import type { GetStaticProps } from 'next'
import SiteInformation from '../../types/CmsSingleTypes/siteInformation'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import House from '../../types/CmsCollectionTypes/house'
import HouseCard from '../../components/HouseCard'
import CmsRichText from '../../components/CmsRichText'
import SimplePage from '../../types/CmsSingleTypes/simplePage'
import SEO from '../../components/SEO'
import { galleryPage, houses, siteInfo } from '../../../bd/gallery'
import Link from "next/link"

// Define equipment categories
const EQUIPMENT_CATEGORIES = {
  COMPACTION: 'Уплотнительное оборудование',
  POWER: 'Электрогенераторы',
  CONCRETE: 'Оборудование для бетонных работ',
  CUTTING: 'Режущее оборудование',
  GARDEN: 'Садовая техника',
  LOADING: 'Погрузочная техника',
  DEMOLITION: 'Демонтажное оборудование'
} as const

type Props = {
  galleryPage: SimplePage
  houses: Array<House>
  siteInfo: SiteInformation
}

const Gallery = ({ galleryPage, houses, siteInfo }: Props) => {
  const [shouldHave2Columns] = useMediaQuery('(min-width: 45rem)')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  // Add category tags to each equipment
  const equipmentWithCategories = houses.map(house => {
    let category = ''
    if (house.title.toLowerCase().includes('виброплита') || house.title.toLowerCase().includes('трамбовка')) {
      category = EQUIPMENT_CATEGORIES.COMPACTION
    } else if (house.title.toLowerCase().includes('генератор')) {
      category = EQUIPMENT_CATEGORIES.POWER
    } else if (house.title.toLowerCase().includes('бетон') || house.title.toLowerCase().includes('виброрейка')) {
      category = EQUIPMENT_CATEGORIES.CONCRETE
    } else if (house.title.toLowerCase().includes('резчик') || house.title.toLowerCase().includes('швов')) {
      category = EQUIPMENT_CATEGORIES.CUTTING
    } else if (house.title.toLowerCase().includes('мотоблок') || house.title.toLowerCase().includes('косилка')) {
      category = EQUIPMENT_CATEGORIES.GARDEN
    } else if (house.title.toLowerCase().includes('самосвал') || house.title.toLowerCase().includes('рохля')) {
      category = EQUIPMENT_CATEGORIES.LOADING
    } else if (house.title.toLowerCase().includes('отбойный')) {
      category = EQUIPMENT_CATEGORIES.DEMOLITION
    }
    return { ...house, category }
  })

  // Filter equipment based on search and category
  const filteredEquipment = useMemo(() => {
    return equipmentWithCategories.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = !selectedCategory || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [equipmentWithCategories, searchTerm, selectedCategory])

  return (
    <>
      <SEO
        seo={{
          title: "Аренда строительного оборудования в Астрахани | Прокат инструмента",
          description: "Широкий выбор строительного оборудования в аренду: виброплиты, генераторы, бетономешалки и другая техника. Доступные цены, индивидуальный подход.",
        }}
        siteInfo={siteInfo}
      />
      <Layout siteInfo={siteInfo}>
        <Container>
          <Box mb={'3rem'}>
            <CmsRichText text={galleryPage.pageBody} siteInfo={siteInfo}/>
            
            {/* Search and Filter Section */}
            <Stack spacing={4} my={6}>
              <Input
                placeholder="Поиск оборудования..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="lg"
                bg="white"
              />
              
              <Select
                placeholder="Все категории"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                size="lg"
                bg="white"
              >
                {Object.values(EQUIPMENT_CATEGORIES).map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </Stack>

            {/* Results count */}
            <Text mb={4} color="gray.600">
              Найдено оборудования: {filteredEquipment.length}
            </Text>

            {/* Contact section */}
            <Box 
              mb={'2rem'} 
              p={6} 
              bg="blue.50" 
              borderRadius="lg"
              border="1px"
              borderColor="blue.100"
            >
              <Heading as='h4' size='md' mb={3}>
                Не нашли нужное оборудование? 🔍
              </Heading>
              <Text mb={2}>
                Свяжитесь с нами, и мы поможем подобрать оптимальное решение для ваших задач!
              </Text>
              <Link href={'/contact'} passHref>
                <Text
                  as="span"
                  color="blue.600"
                  fontWeight="bold"
                  cursor="pointer"
                  _hover={{ textDecoration: 'underline' }}
                >
                  Связаться с нами →
                </Text>
              </Link>
            </Box>

            {/* Equipment Grid */}
            <SimpleGrid
              w={'full'}
              columns={[1, shouldHave2Columns ? 2 : 1, 3]}
              spacing={'2rem'}
              overflow={'visible'}
            >
              {filteredEquipment.map((house, index) => (
                  <HouseCard key={index} house={house}/>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {galleryPage, houses, siteInfo},
  }
}

export default Gallery
