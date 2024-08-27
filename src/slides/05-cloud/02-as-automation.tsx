import { Heading } from '@chakra-ui/react';

import Slide from '../../slidedeck/Slide';

function CloudAsAutomation() {
    return (
        <Slide>
            <Heading as="h1" size="xl">Cloud als automationtool</Heading>
            <ul>
                <li>Automation tools draaien in de Cloud</li>
                <li>Cloud services gebruiken voor testing, building en deployment</li>
                <li>Voorbeelden</li>
                <ul>
                    <li>Azure DevOps</li>
                    <li>Amazone CodeBuild</li>
                    <li>Google Cloud Build</li>
                </ul>
            </ul>
        </Slide>
    );
}

export default CloudAsAutomation;