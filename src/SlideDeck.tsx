import { useEffect, useRef } from "react";
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

import TitleSlide from "./slides/title";

function SlideDeck() {
    const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
    const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

    useEffect(() => {
        // Prevents double initialization in strict mode
        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current!, {
            transition: "zoom",
            center: true,
            disableLayout: true,
        });

        deckRef.current.initialize().then(() => {
            // good place for event handlers and plugin setups
        });

        return () => {
            try {
                if (deckRef.current) {
                    deckRef.current.destroy();
                    deckRef.current = null;
                }
            } catch (e) {
                console.warn("Reveal.js destroy call failed.");
            }
        };
    }, []);

    return (
        <div className='reveal' ref={deckDivRef}>
            <div className='slides'>
                <TitleSlide />
                <section>
                    <h1>Slide 1</h1>
                </section>
                <section>
                    <h1>Slide 2</h1>
                </section>
            </div>
        </div>
    );
}

export default SlideDeck;