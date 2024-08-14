import routzBuilding from '../assets/routz-building.jpg';

import { Flex, Box, Heading, useMediaQuery } from '@chakra-ui/react';

import './title.css'

function TitleSlide() {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <section style={{ 'height': '100%' }}>
            <Flex h='100%' direction={
                isLargerThan768 ? 'row' : 'column'
            } justify='stretch' wrap='nowrap' align='stretch'>
                <Box flexGrow={1} alignContent='center' minW='50%' maxW='100%' minH='50%' maxH='100%'>
                    <Heading size='lg' as='h2'>Pipelines</Heading>
                    <Heading size='sm' as='h5'>Door Daryl Stark</Heading>
                </Box>
                <Box
                    flexGrow={1}
                    className='background-box'
                    bgImage={routzBuilding}
                    minW='50%' maxW='100%'
                    minH='50%' maxH='100%'
                />
            </Flex>
        </section >
    );
}

export default TitleSlide;