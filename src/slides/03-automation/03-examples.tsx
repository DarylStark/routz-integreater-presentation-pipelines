import { Heading } from '@chakra-ui/react';

import Slide from '../../slidedeck/Slide';

function Examples() {
    return (
        <Slide>
            <Heading as="h1" size="xl">Automation voorbeelden</Heading>
            <ul>
                <li>Automatisch testen van code</li>
                <li>Automatisch deployen van een website</li>
                <li>Automatisch documenteren</li>
                <li>Automatisch monitoren</li>
                <li>Automatisch configuratie plaatsen</li>
                <li>Automatisch infrastructuur maken en opruimen</li>
            </ul>
        </Slide>
    );
}

export default Examples;