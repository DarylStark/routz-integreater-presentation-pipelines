import { Heading } from '@chakra-ui/react';

import Slide from '../../slidedeck/Slide';

function Examples() {
    return (
        <Slide>
            <Heading as="h1" size="xl">IaC voorbeelden</Heading>
            <ul>
                <li>Automatisch testen van infrastructuur</li>
                <li>Infrastructuur aanpassingen maken en terugrollen</li>
            </ul>
        </Slide>
    );
}

export default Examples;