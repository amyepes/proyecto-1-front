import Cargando from './Loading';
import ErrorPage from './Error';
import useFetch from '../hooks/useFetch';
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from 'react';

function XploreResults() {
    const { frutas, cargando, error } = useFetch("https://api.api-onepiece.com/v2/fruits/en");
    const toastShownRef = useRef(false);

    useEffect(() => {
        if (cargando) {
            toastShownRef.current = false;
            return;
        }

        if (error) {
            if (!toastShownRef.current) {
                toast.error(`No se pudieron cargar las frutas: ${error}`);
                toastShownRef.current = true;
            }
            return;
        }

        if (frutas.length > 0 && !toastShownRef.current) {
            toast.success('Frutas cargadas correctamente');
            toastShownRef.current = true;
        }
    }, [cargando, error, frutas]);

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