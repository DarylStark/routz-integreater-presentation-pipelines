import { Heading } from '@chakra-ui/react';

function TraditionWayOfWorking() {
    return (
        <section>
            <Heading as="h1" size="xl">Traditionele werkwijze</Heading>
            <ul>
                <li>Ontwikkelaars en beheerders werken gescheiden</li>
                <li>Ontwikkelaars schrijven code en geven deze over aan beheerders</li>
                <li>Beheerders implementeren de code op de servers</li>
                <li>Beheerders monitoren de servers</li>
                <li>Beheerders geven feedback aan ontwikkelaars</li>
            </ul>
        </section>
    );
}

export default TraditionWayOfWorking;