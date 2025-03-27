import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routerpage from './routerpage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routerpage  />
  </StrictMode>,
)
