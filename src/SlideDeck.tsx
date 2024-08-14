import { useEffect, useRef } from "react";
import Reveal from 'reveal.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import 'reveal.js/plugin/highlight/zenburn.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

import TitleSlide from "./slides/title";
import DevOps from "./slides/devops";

function SlideDeck() {
    const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
    const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

    useEffect(() => {
        // Prevents double initialization in strict mode
        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current!, {
            transition: "slide",
            center: true,
            disableLayout: true,
            slideNumber: true,
            plugins: [
                RevealNotes,
                RevealHighlight
            ]
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
                <DevOps />
            </div>
        </div>
    );
}

export default SlideDeck;