import { Heading } from '@chakra-ui/react';

import TraditionWayOfWorking from './02-traditional-way-of-working';
import DevOpsWayOfWorking from './03-devops-way-of-working';

import Slide from '../../slidedeck/Slide';

function Notes() {
    return (
        <ul>
            <li>
                <b>Snellere time-to-market:</b>
                <ul>
                    <li>Automatisering</li>
                    <li>Gestroomlijnde werkflow</li>
                </ul>
            </li>
            <li>
                <b>Hogere kwaliteit:</b>:
                <ul>
                    <li>Continue integratie en testen</li>
                    <li>Fouten eerder gevonden</li>
                    <li>Een fout herhaalt zich niet</li>
                </ul>
            </li>
            <li>
                <b>Betere samenwerking:</b>:
                <ul>
                    <li>Ontwikkelaars en beheerders werken nauwer samen</li>
                    <li>Meer begrip voor elkaars werkzaamheden</li>
                </ul>
            </li>
            <li>
                <b>Meer stabiliteit:</b>:
                <ul>
                    <li>Automatisering en monitoring</li>
                </ul>
            </li>
        </ul>
    )
}

function DevOps() {
    return (
        <>
            <Slide>
                <Slide presenterNotes={<Notes />}>
                    <Heading as="h1" size="xl">DevOps</Heading>
                    <ul>
                        <li>Snellere time-to-market</li>
                        <li>Hogere kwaliteit</li>
                        <li>Betere samenwerking</li>
                        <li>Meer stabiliteit</li>
                    </ul>
                </Slide>
                <TraditionWayOfWorking />
                <DevOpsWayOfWorking />
            </Slide>
        </>
    );
}

export default DevOps;