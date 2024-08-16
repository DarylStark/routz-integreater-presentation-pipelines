import routzBuilding from '../../assets/routz-building.jpg';
import routzLogo from '../../assets/routz-logo.png';
import integreaterLogo from '../../assets/integreater-logo.svg';

import { Heading, Text, Image, Flex, Box } from '@chakra-ui/react';

import ReactiveSplit from '../../layouts/reactive-split';

function PresentationTitle() {
    return (
        <Box alignContent='center' h='100%'>
            <Heading as='h1'>Pipelines</Heading>
            <Heading as='h3'>Door Daryl Stark</Heading>
            <Text size='xs'>26 september 2024</Text>
        </Box>
    );
}

function Logos() {
    return (
        <Box alignContent='flex-start' h='100%' pt='20px'>
            <Image src={integreaterLogo} alt='Routz' /><br />
            <Image src={routzLogo} alt='Routz' />
        </Box>
    );
    return (
        <Flex direction='row' justifyContent='space-around' align='start' h='100%' pt='80px' wrap='wrap'>
            <Image src={integreaterLogo} alt='Routz' />
            <Image src={routzLogo} alt='Routz' />
        </Flex>
    );
}

function TitleSlide() {
    return (
        <section
            style={{ 'height': '100%' }}
        >
            <ReactiveSplit
                contentFirst={<PresentationTitle />}
                bgImageSecond={routzBuilding}
                contentSecond={<Logos />}
            />
        </section>
    );
}

export default TitleSlide;