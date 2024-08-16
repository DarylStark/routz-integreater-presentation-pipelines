import { Heading } from '@chakra-ui/react';

import Tools from './02-tools';
import Examples from './03-examples';

function Automation() {
    return (
        <>
            <section>
                <section>
                    <Heading as="h1" size="xl">Automation</Heading>
                </section>
                <Tools />
                <Examples />
            </section>
        </>
    );
}

export default Automation;