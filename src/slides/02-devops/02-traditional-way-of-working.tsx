import { Heading } from '@chakra-ui/react';

import Slide from '../../slidedeck/Slide';

function TraditionWayOfWorking() {
    return (
        <Slide>
            <Heading as="h1" size="xl">Traditionele werkwijze</Heading>
            <ul>
                <li>Ontwikkelaars en beheerders werken gescheiden</li>
                <li>Ontwikkelaars schrijven code en geven deze over aan beheerders</li>
                <li>Beheerders implementeren de code op de servers</li>
                <li>Beheerders monitoren de servers</li>
                <li>Beheerders geven feedback aan ontwikkelaars</li>
            </ul>
        </Slide>
    );
}

export default TraditionWayOfWorking;