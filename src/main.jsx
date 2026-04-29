import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client' 
import { Toaster } from 'react-hot-toast'
import { FavoritesProvider } from './contexts/FavoritesContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FavoritesProvider>
      <App />
      <Toaster position="bottom-right" />
    </FavoritesProvider>
  </BrowserRouter>,
)
