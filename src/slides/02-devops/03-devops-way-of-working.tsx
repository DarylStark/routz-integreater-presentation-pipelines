import { Heading } from '@chakra-ui/react';

function DevOpsWayOfWorking() {
    return (
        <section>
            <Heading as="h1" size="xl">DevOps werkwijze</Heading>
            <ul>
                <li>Ontwikkelaars en beheerders werken samen</li>
                <li>Ontwikkelaars schrijven code en implementeren deze op de servers</li>
                <li>Ontwikkelaars monitoren de servers</li>
                <li>Ontwikkelaars geven feedback aan beheerders</li>
            </ul>
        </section>
    );
}

export default DevOpsWayOfWorking;