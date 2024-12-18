import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO'; // Ensure SEO component is imported
import SiteInformation from '../../types/CmsSingleTypes/siteInformation';
import { GetStaticProps } from 'next';
import { siteInfo } from '../../../bd/about'
import { metaDescriptionFromHtml } from '../../utils/pipes'
import { Box, Heading, Text, List, ListItem, Link, Image } from '@chakra-ui/react';

type Props = {
siteInfo: SiteInformation
}

const Generator = ({ siteInfo }: Props) => {
return (
<>
    <SEO seo={{
					title: `Электрогенераторы: как выбрать подходящий вариант`,
					og: {
						title: `Электрогенераторы: как выбрать подходящий вариант`,
						type: 'website',
						url: `${siteInfo.siteUrl}/about/generator`,
						description: `Подробное руководство по выбору электрогенераторов для дома и бизнеса.`,
					},
				}} siteInfo={siteInfo} />
    <Layout siteInfo={siteInfo}>
        <Box py={12}>
            <Box className="content" px={4} sx={{ maxWidth: '75%',    alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column' }}>
                <Heading as="h3" size="lg" mb={4}>
                    Электрогенераторы: как выбрать подходящий вариант для вашего дома или бизнеса
                </Heading>
                <Text fontSize="md" mb={4}>
                    В современном мире, где технологии стали неотъемлемой частью нашей жизни, бесперебойное
                    электроснабжение становится всё более актуальным. Перебои с электричеством могут привести к
                    серьёзным неудобствам, особенно если речь идёт о важных процессах, таких как медицинские процедуры,
                    производство или даже просто поддержание комфортной среды в доме. В этой статье мы рассмотрим
                    различные типы электрогенераторов, их преимущества и недостатки, а также дадим несколько советов по
                    выбору подходящего варианта для ваших нужд.
                </Text>
                <Heading as="h4" size="md" mb={2}>
                    Бензиновые генераторы
                </Heading>
                <Text mb={4}>
                    Бензиновые генераторы — это наиболее распространённый тип генераторов, который используется как в
                    бытовых, так и в промышленных целях. Они работают на бензине, что делает их доступными и удобными в
                    использовании. Бензиновые генераторы обычно имеют небольшой вес и компактные размеры, что позволяет
                    легко транспортировать их и использовать в различных условиях. Однако они также имеют некоторые
                    недостатки, такие как высокий расход топлива и ограниченный срок службы.
                </Text>
                <List spacing={3} mb={4}>
                    <ListItem><strong>Преимущества:</strong> Доступная цена; Простота использования; Компактные размеры.
                    </ListItem>
                    <ListItem><strong>Недостатки:</strong> Высокий расход топлива; Ограниченный срок службы; Шум при
                        работе.</ListItem>
                </List>
                <Heading as="h4" size="md" mb={2}>
                    Дизельные генераторы
                </Heading>
                <Text mb={4}>
                    Дизельные генераторы используются в основном в промышленных и коммерческих целях. Они обладают
                    высокой мощностью и длительным сроком службы, что делает их идеальными для использования в условиях,
                    требующих надёжного электроснабжения. Дизельные генераторы также имеют более низкий расход топлива
                    по сравнению с бензиновыми генераторами. Однако дизельные генераторы имеют и некоторые недостатки,
                    такие как высокая стоимость и сложность обслуживания.
                </Text>
                <List spacing={3} mb={4}>
                    <ListItem><strong>Преимущества:</strong> Высокая мощность; Длительный срок службы; Низкий расход
                        топлива.</ListItem>
                    <ListItem><strong>Недостатки:</strong> Высокая стоимость; Сложность обслуживания; Большие размеры и
                        вес.</ListItem>
                </List>
                <Image width={'20rem'} src="https://dam.thdstatic.com/content/production/d8Ie2iB0qaRIaZ2MfgmGxQ/T_xu9rHHbtmwnGM-Hco9vg/Original%20file/3ae9508d-eb02-422d-85d6-f93aa778c7b9_DeWalt_DXGNR7000-front_3-4_contol_side1_1200px.jpg.jpeg?im=Resize=(703,703)" alt="генератор" borderRadius="md" />
                <Heading as="h4" size="md" mb={2}>
                    Электрогенераторы на альтернативных источниках энергии
                </Heading>
                <Text mb={4}>
                    С развитием технологий появляются новые виды генераторов, использующих альтернативные источники
                    энергии, такие как солнечные панели или ветряные турбины. Эти генераторы становятся всё более
                    популярными благодаря своей экологичности и эффективности. Они могут использоваться как в бытовых,
                    так и в коммерческх целях, обеспечивая надёжное электроснабжение без необходимости использования
                    традиционных источников энергии.
                </Text>
                <List spacing={3} mb={4}>
                    <ListItem><strong>Преимущества:</strong> Экологичность; Эффективность; Бесперебойная работа.
                    </ListItem>
                    <ListItem><strong>Недостатки:</strong> Высокая начальная стоимость; Зависимость от погодных условий;
                        Необходимость установки дополнительных компонентов.</ListItem>
                </List>
                <Text mb={4}>
                    При выборе электрогенератора важно учитывать ваши потребности и бюджет. Если вам нужен генератор для
                    домашнего использования, то бензиновый генератор может быть хорошим выбором. Если же вам нужен
                    генератор для промышленного использования, то дизельный генератор будет более подходящим вариантом.
                    Также стоит обратить внимание на генераторы, работающие на альтернативных источниках энергии,
                    которые могут стать отличным решением для экологически чистого электроснабжения.
                </Text>
                <Text mb={4}>
                    Не забывайте, что выбор электрогенератора зависит от многих факторов, включая ваши потребности,
                    бюджет и условия эксплуатации. Поэтому перед покупкой рекомендуется проконсультироваться с
                    профессионалами и выбрать оптимальный вариант для ваших нужд.{' '}
                    <Link href="/rental" isExternal color="teal.500">
                    Аренда генераторов
                    </Link> доступна на нашем сайте.
                </Text>
                <Image width={'30rem'} src="https://nmccat.com/wp-content/uploads/2022/07/Picking-the-Right-Size-e1523462510954.jpg" alt="генератор" borderRadius="md" />
            </Box>
        </Box>
    </Layout>
</>
);
};

export const getStaticProps: GetStaticProps = async () => {
return {
props: { siteInfo },
}
}

export default Generator;