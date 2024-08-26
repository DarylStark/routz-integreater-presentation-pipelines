import { Heading } from '@chakra-ui/react';

import CloudAsAutomation from './02-as-automation';
import CloudAsHosting from './03-as-hosting';

function Cloud() {
    return (
        <>
            <section>
                <section>
                    <Heading as="h1" size="xl">Cloud</Heading>
                    <ul>
                        <li>Kan gebruikt worden op twee manieren:</li>
                        <ul>
                            <li>Als automatiseringstool</li>
                            <li>Als hostingplatform</li>
                        </ul>
                    </ul>
                </section>
                <CloudAsAutomation />
                <CloudAsHosting />
            </section>
        </>
    );
}

export default Cloud;