import { Heading } from '@chakra-ui/react';

import Tools from './02-tools';
import Examples from './03-examples';

function InfraAsCode() {
    return (
        <>
            <section>
                <section>
                    <Heading as="h1" size="xl">Infrastructure as code</Heading>
                </section>
                <Tools />
                <Examples />
            </section>
        </>
    );
}

export default InfraAsCode;