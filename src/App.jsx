import { Routes, Route } from 'react-router'
import './App.css'
import Inicio from './pages/Start'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Explorar from './pages/Explore'
import Contacto from './pages/Contact'
import Favoritos from './pages/Favorites'

function PlaceholderPage({ title, description }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

function App() {

  return (
    <div className="app-shell">
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Explorar" element={<Explorar />} />
        <Route
          path="/Detalle/:id"
          element={
            <PlaceholderPage
              title="Detalle"
              description="Vista de detalle pendiente de implementar."
            />
          }
        />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Contactanos" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
