import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Affinity.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Affinity from './Affinity'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Affinity />
  </StrictMode>,
)
