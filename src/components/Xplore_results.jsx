import Cargando from './Loading';
import ErrorPage from './Error';
import useFetch from '../hooks/useFetch';

function XploreResults() {
    const { frutas, cargando, error } = useFetch("https://api.api-onepiece.com/v2/fruits/en");

    if (error) return <ErrorPage ErrorInfo={error} />;
    if (cargando) return <Cargando />;

    return (
        <>
            <h1>Frutas del diablo</h1>
            <ul>
                {frutas.map((fruta) => (
                    <li key={fruta.id}>
                        <h2>{fruta.name}</h2>
                        <p>{fruta.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default XploreResults;

// Falta apliucar estilos, pero por ahora se muestra la información de las frutas del diablo en bruto.