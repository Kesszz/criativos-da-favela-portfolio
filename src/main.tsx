import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { GlobalStyle } from './globalStyle.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalStyle />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
