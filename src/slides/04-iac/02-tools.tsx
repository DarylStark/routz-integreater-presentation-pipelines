import { Heading } from '@chakra-ui/react';

function Tools() {
    return (
        <section>
            <Heading as="h1" size="xl">IaC tools</Heading>
            <ul>
                <li>Terraform</li>
                <li>CloudFormation</li>
                <li>Pulumi</li>
                <li>Ansible</li>
                <li>Cloud proprietary tools</li>
            </ul>
        </section>
    );
}

export default Tools;