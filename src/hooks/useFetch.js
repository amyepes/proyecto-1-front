import { useState, useEffect } from 'react';

function useFetch(url) {
    const [frutas, setFrutas] = useState([]);
    const [estado, setEstado] = useState({ cargando: true, error: null });
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function cargar() {
            setFrutas([]);
            setEstado({ cargando: true, error: null });

            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) throw new Error("Error en la respuesta");
                const datos = await res.json();
                setFrutas(datos);
                setEstado({ cargando: false, error: null });
            } catch (err) {
                if (err.name === 'AbortError') return;
                setEstado({ cargando: false, error: err.message });
            }
        }
        cargar();
        // Cleanup: cancela el fetch si el componente se desmonta (tomado de la diapo :D)
        return () => controller.abort();
    }, [url, retryCount]);

    const retry = () => setRetryCount((prev) => prev + 1);

    return { frutas, ...estado, retry };
}

function useFetchI(url) {
    const [fruta, setFruta] = useState();
    const [estado, setEstado] = useState({ cargando: true, error: null });
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function cargar() {
            setFruta([]);
            setEstado({ cargando: true, error: null });

            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) throw new Error("Error en la respuesta");
                const datos = await res.json();
                setFruta(datos);
                setEstado({ cargando: false, error: null });
            } catch (err) {
                if (err.name === 'AbortError') return;
                setEstado({ cargando: false, error: err.message });
            }
        }
        cargar();
        // Cleanup: cancela el fetch si el componente se desmonta (tomado de la diapo :D)
        return () => controller.abort();
    }, [url, retryCount]);

    const retry = () => setRetryCount((prev) => prev + 1);

    return { fruta, ...estado, retry };
}

export { useFetch, useFetchI };