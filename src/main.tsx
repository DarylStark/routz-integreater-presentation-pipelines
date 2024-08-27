import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// SlideDeck
import SlideDeck from './slidedeck/SlideDeck.tsx'

// Images
import backgroundImg from './assets/background.jpg';

// Slides
import TitleSlide from "./slides/01-title/01-title";
import DevOps from "./slides/02-devops/01-devops";
import Automation from "./slides/03-automation/01-automation";
import IAC from "./slides/04-iac/01-iac";
import Cloud from "./slides/05-cloud/01-cloud";
import Questions from "./slides/06-questions/01-questions";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SlideDeck backgroundImage={backgroundImg}>
            <TitleSlide />
            <DevOps />
            <Automation />
            <IAC />
            <Cloud />
            <Questions />
        </SlideDeck>
    </StrictMode>,
)
