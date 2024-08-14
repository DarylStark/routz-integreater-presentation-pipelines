import routzBuilding from '../assets/routz-building.jpg';

import { Flex, Box, Heading, useMediaQuery, Text } from '@chakra-ui/react';

import './title.css'

function TitleSlide() {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <section style={{ 'height': '100%' }}>
            <Flex h='100%' direction={
                isLargerThan768 ? 'row' : 'column'
            } justify='stretch' wrap='nowrap' align='stretch'>
                <Box flexGrow={1} alignContent='center' minW='50%' maxW='100%' minH='50%' maxH='100%'>
                    <Heading as='h1'>Pipelines</Heading>
                    <Heading as='h3'>Door Daryl Stark</Heading>
                    <Text size='xs'>26 september 2024</Text>
                </Box>
                <Box
                    flexGrow={1}
                    className='background-box'
                    bgImage={routzBuilding}
                    minW='50%' maxW='100%'
                    minH='50%' maxH='100%'
                    alignContent='center'
                />
            </Flex>
        </section >
    );
}

export default TitleSlide;