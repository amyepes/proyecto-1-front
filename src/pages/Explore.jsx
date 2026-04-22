import { useEffectEvent } from 'react';
import { Link } from 'react-router'

function Explorar() {
    const [frutas, setFrutas] = useState([]);
    const [estado, setEstado] = useState({ cargando: true, error: false });

    useEffect(() => {
        async function cargar() {
            try {
                const res = await fetch("https://api.api-onepiece.com/v2/fruits/en");
                if (!res.ok) throw new Error("Error en la respuesta");
                const datos = await res.json();
                setFrutas(datos);
                setEstado({cargando: false, error: false})
            } catch (err) {
                setEstado({cargando: false, error: true})
            }
        }
        cargar();
    }, [])


    return (
        <>

        </>
    )
}

export default Explorar;