import { Heading } from '@chakra-ui/react';

import Tools from './02-tools';
import Examples from './03-examples';

function InfraAsCode() {
    return (
        <>
            <section>
                <section>
                    <Heading as="h1" size="xl">Infrastructure as code</Heading>
                    <ul>
                        <li>Infrastructuur beschrijven als code</li>
                        <li>Vier-ogen principe</li>
                        <li>Automatische uitrol</li>
                        <li>Versie geschiedenis</li>
                    </ul>
                </section>
                <Tools />
                <Examples />
            </section>
        </>
    );
}

export default InfraAsCode;