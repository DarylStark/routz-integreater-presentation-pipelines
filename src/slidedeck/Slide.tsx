import React from 'react';

interface SlideProps {
    children: React.ReactNode
    backgroundImage? : string
    presenterNotes?: React.ReactNode
}

function Slide(props: SlideProps) {
    return (
        <section style={
            {
                backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        }>
            {props.children}

            {props.presenterNotes && (
                <aside className="notes">{props.presenterNotes}</aside>
            )}
        </section>
    );
}

export default Slide