import { useParams } from "react-router";
import { useFetchI } from "../hooks/useFetch";
import Cargando from '../components/Loading';
import ErrorPage from '../components/Error';
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from 'react';
import FavoriteButton from '../components/FavoriteButton';

function Detalle() {
    const { id } = useParams();
    const { fruta, cargando, error, retry } = useFetchI("https://api.api-onepiece.com/v2/fruits/en/{}".replace("{}", id));
    const toastShownRef = useRef(false);

    useEffect(() => {
        if (cargando) {
            toastShownRef.current = false;
            return;
        }

        if (error) {
            if (!toastShownRef.current) {
                toast.error(`No se pudo cargar la información de la fruta: ${error}`);
                toastShownRef.current = true;
            }
            return;
        }

        if (fruta && !toastShownRef.current) {
            toast.success('Información cargada correctamente');
            toastShownRef.current = true;
        }
    }, [cargando, error, fruta]);

    if (error) return <ErrorPage ErrorInfo={error} onRetry={retry} />;
    if (cargando) return <Cargando />;

    return (
        <div className="min-h-screen  px-4 py-12 flex flex-col items-center font-sans">
            <div className="w-full max-w-4xl mb-6">
                <Link 
                    to="/Explorar" 
                    className="text-blue-brand font-semibold hover:underline flex items-center gap-2 text-sm"
                >
                    &larr; Volver a explorar
                </Link>
            </div>

            <div className="w-full max-w-4xl bg-white/5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col md:flex-row overflow-hidden">
                
                <div className="w-full md:w-[45%] h-72 md:h-auto shrink-0 bg-black/30">
                    {fruta.filename && fruta.filename.trim() ? (
                        <img 
                            src={fruta.filename} 
                            alt={fruta.name} 
                            className="w-full h-full object-cover" 
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
                            Imagen sin añadir
                        </div>
                    )}
                </div>
                
                <div className="w-full p-8 md:p-10 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        {fruta.name}
                    </h1>
                    
                    <div className="flex flex-col gap-3 mb-8">
                        <p className="text-slate-300 font-medium text-sm md:text-base">
                            <span className="text-blue-brand font-normal mr-2">Descripción:</span> 
                            {fruta.description}
                        </p>
                        <p className="text-slate-300 font-medium text-sm md:text-base">
                            <span className="text-blue-brand font-normal mr-2">Nombre romano:</span> 
                            {fruta.roman_name}
                        </p>
                        <p className="text-slate-300 font-medium text-sm md:text-base">
                            <span className="text-blue-brand font-normal mr-2">Tipo:</span> 
                            {fruta.type}
                        </p>
                    </div>
                    
                    <div className="mt-2">
                        <FavoriteButton fruit={fruta} variant="details" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Detalle;