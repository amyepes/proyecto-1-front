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
    const { fruta, cargando, error } = useFetchI("https://api.api-onepiece.com/v2/fruits/en/{}".replace("{}", id));
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

    if (error) return <ErrorPage ErrorInfo={error} />;
    if (cargando) return <Cargando />;

    return (
        <>
            <p><Link to="/Explorar">Volver a explorar</Link></p>
            <div className="flex-box">
                <div className="card-image">
                    {fruta.filename && fruta.filename.trim() ? (
                        <img src={fruta.filename} alt={fruta.name} />
                    ) : (
                        <div className="no-image">Imagen sin añadir</div>
                    )}
                </div>
                <div>
                    <h1>{fruta.name}</h1>
                    <p><span>Descripción:</span> {fruta.description}</p>
                    <p><span>Nombre romano:</span> {fruta.roman_name}</p>
                    <p><span>Tipo:</span> {fruta.type}</p>
                    <FavoriteButton fruit={fruta} variant="details" />
                </div>
            </div>
        </>
    )
}

export default Detalle;