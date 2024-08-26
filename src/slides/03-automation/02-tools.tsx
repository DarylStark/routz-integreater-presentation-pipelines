import { Heading } from '@chakra-ui/react';

function Tools() {
    return (
        <section>
            <Heading as="h1" size="xl">Automation tools</Heading>
            <ul>
                <li>GitLab CI/CD</li>
                <li>GitHub Actions</li>
                <li>CircleCI</li>
                <li>Jenkins</li>
                <li>Travis CI</li>
                <li>... vele andere</li>
            </ul>
        </section>
    );
}

export default Tools;