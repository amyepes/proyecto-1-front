import { useState, useEffect } from 'react';

function useFetch(url) {
    const [frutas, setFrutas] = useState([]);
    const [estado, setEstado] = useState({ cargando: true, error: null });

    useEffect(() => {
        const controller = new AbortController();

        async function cargar() {
            setEstado({cargando: true, error: null});

            try {
                const res = await fetch(url, {signal: controller.signal,});
                if (!res.ok) throw new Error("Error en la respuesta");
                const datos = await res.json();
                setFrutas(datos);
                setEstado({cargando: false, error: false})
            } catch (err) {
                if (err.name === 'AbortError') return;
                setEstado({cargando: false, error: err.message})
            }
        }
        cargar();
        // Cleanup: cancela el fetch si el componente se desmonta (tomado de la diapo :D)
        return () => controller.abort();
    }, [])

    return {frutas, ...estado}
}

export default useFetch;