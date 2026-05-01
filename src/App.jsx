import { Routes, Route } from 'react-router'
//import './App.css'
import Inicio from './pages/Start'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Explorar from './pages/Explore'
import Contacto from './pages/Contact'
import Favoritos from './pages/Favorites'
import Detalle from './pages/Details'

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-color">
      <Navbar />

      <main className="grow pt-4 sm:pt-6 lg:pt-8">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Explorar" element={<Explorar />} />
          <Route path="/Detalle/:id" element={ <Detalle />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/Contactanos" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
