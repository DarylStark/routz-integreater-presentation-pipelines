import { Heading } from '@chakra-ui/react';

import Tools from './02-tools';
import Examples from './03-examples';

function Automation() {
    return (
        <>
            <section>
                <section>
                    <Heading as="h1" size="xl">Automation</Heading>
                    <ul>
                        <li>Automatische deployment van software</li>
                        <li>Automatische deployment van configuratie</li>
                        <li>Programmeurs maken hun eigen implementatie</li>
                    </ul>
                </section>
                <Tools />
                <Examples />
            </section>
        </>
    );
}

export default Automation;