import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as WrapRouter  } from "react-router-dom"
import App from './App.jsx'
import 'maplibre-gl/dist/maplibre-gl.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WrapRouter>
    <App />
    </WrapRouter>
    
  </StrictMode>,
)
