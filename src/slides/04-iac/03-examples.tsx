import { Heading } from '@chakra-ui/react';

function Examples() {
    return (
        <section>
            <Heading as="h1" size="xl">IaC voorbeelden</Heading>
            <ul>
                <li>Automatisch testen van infrastructuur</li>
                <li>Infrastructuur aanpassingen maken en terugrollen</li>
            </ul>
        </section>
    );
}

export default Examples;