import { Heading } from '@chakra-ui/react';

import Slide from '../../slidedeck/Slide';

import CloudAsAutomation from './02-as-automation';
import CloudAsHosting from './03-as-hosting';

function Cloud() {
    return (
        <>
            <Slide>
                <Slide>
                    <Heading as="h1" size="xl">Cloud</Heading>
                    <ul>
                        <li>Kan gebruikt worden op twee manieren:</li>
                        <ul>
                            <li>Als automatiseringstool</li>
                            <li>Als hostingplatform</li>
                        </ul>
                    </ul>
                </Slide>
                <CloudAsAutomation />
                <CloudAsHosting />
            </Slide>
        </>
    );
}

export default Cloud;