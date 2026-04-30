import Cargando from './Loading';
import ErrorPage from './Error';
import Card from './Card';
import { useFetch } from '../hooks/useFetch';
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from 'react';
import './Xplore_results.css';

function XploreResults({ searchQuery, selectedType }) {
    const { frutas, cargando, error } = useFetch("https://api.api-onepiece.com/v2/fruits/en");
    const toastShownRef = useRef(false);

    const filteredFrutas = frutas.filter((fruta) => {
        const matchesSearch = fruta.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === '' || fruta.type === selectedType;
        return matchesSearch && matchesType;
    });

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
        <div className="explore-container">
            <div className="fruits-grid">
                {filteredFrutas.map((fruta) => (
                    <Card key={fruta.id} fruta={fruta} />
                ))}
            </div>
        </div>
    );
}

export default XploreResults;