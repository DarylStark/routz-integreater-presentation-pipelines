import { Heading } from '@chakra-ui/react';

import Slide from '../../slidedeck/Slide';

function CloudAsHosting() {
    return (
        <Slide>
            <Heading as="h1" size="xl">Cloud als hosting</Heading>
            <ul>
                <li>Software draaien in een container</li>
                <li>Software draaien op een PaaS oplossing</li>
            </ul>
        </Slide>
    );
}

export default CloudAsHosting;