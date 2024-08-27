import { Heading } from '@chakra-ui/react';

import Slide from '../../slidedeck/Slide';

function Tools() {
    return (
        <Slide>
            <Heading as="h1" size="xl">Automation tools</Heading>
            <ul>
                <li>GitLab CI/CD</li>
                <li>GitHub Actions</li>
                <li>CircleCI</li>
                <li>Jenkins</li>
                <li>Travis CI</li>
                <li>... vele andere</li>
            </ul>
        </Slide>
    );
}

export default Tools;