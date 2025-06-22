import { HashRouter } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
