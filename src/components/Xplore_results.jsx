import Cargando from './Loading';
import ErrorPage from './Error';
import Card from './Card';
import { useFetch } from '../hooks/useFetch';
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from 'react';

function XploreResults({ searchQuery, selectedType }) {
    const { frutas, cargando, error, retry } = useFetch("https://api.api-onepiece.com/v2/fruits/en");
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

    if (error) return <ErrorPage ErrorInfo={error} onRetry={retry} />;
    if (cargando) return <Cargando />;

    return (
        <div className="w-full px-4 py-8 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Explorar Frutas</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
                {filteredFrutas.map((fruta) => (
                    <Card key={fruta.id} fruta={fruta} />
                ))}
            </div>
        </div>
    );
}

export default XploreResults;