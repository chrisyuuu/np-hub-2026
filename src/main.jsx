import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Theme accentColor="indigo" radius="large" scaling="100%">
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>,
)
