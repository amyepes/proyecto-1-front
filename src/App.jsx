import { Routes, Route } from 'react-router'
import './App.css'
import Inicio from './pages/Start'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'

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
        <Route
          path="/Explorar"
          element={
            <PlaceholderPage
              title="Explorar"
              description="Sección en construcción para mostrar el catálogo o contenido principal."
            />
          }
        />
        <Route
          path="/Detalle/:id"
          element={
            <PlaceholderPage
              title="Detalle"
              description="Vista de detalle pendiente de implementar."
            />
          }
        />
        <Route
          path="/Favoritos"
          element={
            <PlaceholderPage
              title="Favoritos"
              description="Aquí se verán los elementos guardados."
            />
          }
        />
        <Route
          path="/Contactanos"
          element={
            <PlaceholderPage
              title="Contáctanos"
              description="Página de contacto pendiente de implementar."
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
