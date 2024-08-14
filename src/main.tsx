import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SlideDeck from './SlideDeck.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SlideDeck />
  </StrictMode>,
)
