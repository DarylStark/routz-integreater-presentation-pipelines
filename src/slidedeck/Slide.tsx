import React from 'react';

interface SlideProps {
    children: React.ReactNode
    backgroundImage? : string
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
        </section>
    );
}

export default Slide