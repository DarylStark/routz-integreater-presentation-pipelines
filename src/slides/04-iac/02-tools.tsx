import { Heading } from '@chakra-ui/react';

import Slide from '../../slidedeck/Slide';

function Tools() {
    return (
        <Slide>
            <Heading as="h1" size="xl">IaC tools</Heading>
            <ul>
                <li>Terraform</li>
                <li>CloudFormation</li>
                <li>Pulumi</li>
                <li>Ansible</li>
                <li>Cloud proprietary tools</li>
            </ul>
        </Slide>
    );
}

export default Tools;