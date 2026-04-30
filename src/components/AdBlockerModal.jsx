import { useRef, useEffect } from 'react';

function AdBlockerModal() {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal();
        }
    }, []);

    const handleClose = () => {
        dialogRef.current?.close();
    };

    return (
        <dialog
            ref={dialogRef}
            className="fixed inset-0 m-auto w-[92vw] max-w-[480px] rounded-xl p-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-md sm:rounded-2xl"
            style={{
                position: 'fixed',
                inset: 0,
                margin: 'auto',
            }}
            aria-labelledby="adblock-title"
            aria-describedby="adblock-description"
        >
            <div className="px-6 py-8 sm:px-8 sm:py-10 text-center">
                <h2 
                    id="adblock-title" 
                    className="mb-4 sm:mb-5 text-2xl sm:text-3xl font-black text-yellow-400 tracking-wide"
                >
                    ⚠️ Bloqueador de anuncios detectado
                </h2>

                <p 
                    id="adblock-description" 
                    className="mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base leading-relaxed font-medium"
                >
                    Hemos detectado que usas un bloqueador de anuncios. Nuestra página sustenta su economía en anuncios, 
                    por lo que te pedimos que desactives el bloqueador para seguir usando nuestra página.
                </p>

                <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <button
                        type="button"
                        className="w-full max-w-xs bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-lg hover:shadow-green-500/50 uppercase tracking-wide"
                        onClick={handleClose}
                    >
                        ✓ Desactivar adBlocker
                    </button>

                    <button
                        type="button"
                        className="!bg-transparent !border-0 text-xs sm:text-sm text-gray-500 hover:text-gray-400 opacity-60 hover:opacity-80 transition-all duration-300 font-normal px-2 sm:px-3 py-1 underline cursor-pointer"
                        onClick={handleClose}
                        title="Continuar sin desactivar"
                    >
                        Quiero continuar con el adBlocker
                    </button>
                </div>
            </div>
        </dialog>
    );
}

export default AdBlockerModal;
