import React from 'react';
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'; // Ensure SEO component is imported
import Hero from '../../components/Hero'; // Ensure Hero component is imported
import SiteInformation from '../../types/CmsSingleTypes/siteInformation';
import { metaDescriptionFromHtml } from '../../utils/pipes';
import { siteInfo } from '../../../bd/about'
import SimplePage from '../../types/CmsSingleTypes/simplePage';
import { GetStaticProps } from 'next';
import { Box, Heading, Text, List, ListItem, Image, Link } from '@chakra-ui/react';

type Props = {
aboutUsPage: SimplePage
siteInfo: SiteInformation
}

const VibratoryPlate = ({ aboutUsPage, siteInfo }: Props) => {
return (
<>
<Layout siteInfo={siteInfo}>
            <Box py={12}>
                <Box className="content" px={4} sx={{ maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Heading as="h3" size="lg" mb={4}>
                        Виброплиты: незаменимый инструмент для уплотнения грунта
                    </Heading>
                    <Text fontSize="md" mb={4}>
                        <strong>Виброплита</strong> — это специализированное оборудование, предназначенное для
                        уплотнения различных типов грунта, таких как песок, гравий, щебень и асфальт. Она широко используется
                        в строительстве, дорожных работах и ландшафтном дизайне.
                    </Text>
                    <Heading as="h4" size="md" mb={2}>
                        Принцип работы виброплиты
                    </Heading>
                    <Text mb={4}>
                        Виброплита работает на основе вибрации, которая создаётся за счёт вращения эксцентрикового механизма.
                        Эта вибрация передаётся на поверхность грунта, что приводит к его уплотнению. Чем больше амплитуда и
                        частота вибрации, тем сильнее уплотнение грунта.
                    </Text>
                    <Heading as="h4" size="md" mb={2}>
                        Преимущества использования виброплит
                    </Heading>
                    <List spacing={3} mb={4}>
                        <ListItem>
                            <strong>Высокая эффективность.</strong> Виброплита позволяет быстро и эффективно уплотнить
                            большие площади грунта, что ускоряет процесс строительства и снижает затраты на рабочую силу.
                        </ListItem>
                        <ListItem>
                            <strong>Универсальность.</strong> Виброплиты могут использоваться для уплотнения различных типов
                            грунта, включая песок, гравий, щебень и асфальт.
                        </ListItem>
                        <ListItem>
                            <strong>Простота в использовании.</strong> Виброплиты обычно просты в эксплуатации и не требуют
                            специальных навыков или обучения.
                        </ListItem>
                        <ListItem>
                            <strong>Мобильность.</strong> Большинство виброплит являются портативными и лёгкими.
                        </ListItem>
                        <ListItem>
                            <strong>Долговечность.</strong> При правильном уходе виброплиты могут служить долгие годы.
                        </ListItem>
                    </List>
                    <Heading as="h4" size="md" mb={2}>
                        Выбор виброплиты
                    </Heading>
                    <Text mb={4}>При выборе виброплиты следует учитывать следующие факторы:</Text>
                    <List spacing={3}>
                        <ListItem>
                            <strong>Тип грунта.</strong> Для уплотнения разных типов грунта требуются разные типы виброплит.
                        </ListItem>
                        <ListItem>
                            <strong>Площадь уплотнения.</strong> Размер рабочей площадки также влияет на выбор виброплиты.
                        </ListItem>
                        <ListItem>
                            <strong>Бюджет.</strong> Стоимость виброплит может варьироваться в зависимости от их
                            характеристик.
                        </ListItem>
                    </List>
                    <Text mb={4}>

                        В целом, виброплиты являются незаменимым инструментом для уплотнения грунта в строительстве.{' '}
                        <Link href="/rental" isExternal color="teal.500">
                            Аренда виброплит
                        </Link> доступна на нашем сайте.
                    </Text>
                    {/* Adding an image */}
                    <Image src="https://glavtraktor.ru/assets/images/vibrotrambovki/vibro1v3.jpg" alt="Виброплита" borderRadius="md" />
                </Box>
            </Box>
        </Layout>
...
</>
);
};
export const getStaticProps: GetStaticProps = async () => {
return {
props: { siteInfo },
}
}

export default VibratoryPlate;