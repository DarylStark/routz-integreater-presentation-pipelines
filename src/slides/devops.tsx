import { Heading } from '@chakra-ui/react';

function DevOps() {

    return (
        <>
            <section>
                <section>
                    <Heading as="h1" size="xl">DevOps</Heading>
                    <pre>
                        <code data-trim data-noescape>
                            stages:<br />
                            - build<br />
                            - test<br />
                            - deploy<br />
                        </code>
                    </pre>
                </section>
                <section>
                    <Heading as="h1" size="xl">A way of working</Heading>
                </section>
                <section>
                    <Heading as="h1" size="xl">Pipelines</Heading>
                </section>
            </section>
        </>
    );
}

export default DevOps;