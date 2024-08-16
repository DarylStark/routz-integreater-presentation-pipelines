import { Heading } from '@chakra-ui/react';

import CloudAsAutomation from './02-as-automation';
import CloudAsHosting from './03-as-hosting';

function Cloud() {
    return (
        <>
            <section>
                <section>
                    <Heading as="h1" size="xl">Cloud</Heading>
                </section>
                <CloudAsAutomation />
                <CloudAsHosting />
            </section>
        </>
    );
}

export default Cloud;