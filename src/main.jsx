import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import AppContextProvider from './Context/Appcontext.jsx';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <AppContextProvider> */}
    <App />

    {/* </AppContextProvider> */}

    </BrowserRouter>
  </StrictMode>,
)
