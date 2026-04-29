import React from 'react';
import useFavorites from '../hooks/useFavorites';
import Card from '../components/Card';
import { Link } from 'react-router';

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Mis favoritos</h1>
      <p className="text-center text-gray-500 mb-6">Se muestran los favoritos agregados</p>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-6xl text-gray-300 mb-4">☆</div>
          <p className="text-xl font-semibold mb-2">No tienes favoritos guardados</p>
          <Link to="/Explorar" className="text-blue-500 hover:underline">Explorar y agregar algunos</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((f) => (
            <Card key={f.id} fruta={f} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
