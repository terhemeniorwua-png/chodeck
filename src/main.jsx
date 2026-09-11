import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'

function AOSInit() {
  useEffect(() => {
    AOS.init({ once: true, offset: 100 })
  }, [])
  return null
}

export { AOSInit }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AOSInit />
      <App />
    </BrowserRouter>
  </StrictMode>,
)