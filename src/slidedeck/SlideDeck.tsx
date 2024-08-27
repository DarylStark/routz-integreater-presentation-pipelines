import { useEffect, useRef } from "react";
import Reveal from 'reveal.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import 'reveal.js/plugin/highlight/zenburn.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

interface SlideDeckProps {
    children: React.ReactNode
    backgroundImage? : string
}

function SlideDeck(props: SlideDeckProps) {
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
            defaultTiming: 128,
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

    // TODO: extract slides to make sure this is a generic component
    return (
        <div className='reveal' ref={deckDivRef}>
            <div className='slides' style={
                {
                    backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }
            }>
                {props.children}
            </div>
        </div>
    );
}

export default SlideDeck;