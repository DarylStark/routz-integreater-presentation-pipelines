import { useEffect, useRef } from "react";
import Reveal from 'reveal.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import 'reveal.js/plugin/highlight/zenburn.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

// Slides
import TitleSlide from "./slides/01-title/01-title";
import DevOps from "./slides/02-devops/01-devops";
import Automation from "./slides/03-automation/01-automation";
import IAC from "./slides/04-iac/01-iac";
import Cloud from "./slides/05-cloud/01-cloud";
import Questions from "./slides/06-questions/01-questions";

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
            showNotes: false,
            hash: true,
            controlsBackArrows: 'visible',
            totalTime: 60 * 30,
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
                console.warn(`Reveal.js destroy call failed: ${e}`);
            }
        };
    }, []);



    return (
        <div className='reveal' ref={deckDivRef}>
            <div className='slides'>
                <TitleSlide />
                <DevOps />
                <Automation />
                <IAC />
                <Cloud />
                <Questions />
            </div>
        </div>
    );
}

export default SlideDeck;