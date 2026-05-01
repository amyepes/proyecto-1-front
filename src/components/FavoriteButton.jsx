import { createPortal } from 'react-dom';
import { useState } from 'react';
import useFavorites from '../hooks/useFavorites';
import { toast } from 'react-hot-toast';

function FavoriteButton({ fruit, variant = 'icon' }) {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    if (!fruit || !fruit.id) {
        return null;
    }

    const favorite = isFavorite(fruit.id);

    const openConfirmDialog = () => {
        setConfirmOpen(true);
    };

    const handleFavoriteClick = () => {
        if (!favorite) {
            addFavorite(fruit);
            toast.success(`${fruit.name} agregado a favoritos`);
            return;
        }

        openConfirmDialog();
    };

    const handleRemoveFavorite = () => {
        removeFavorite(fruit.id);
        toast(`${fruit.name} quitado de favoritos`);
        setConfirmOpen(false);
    };

    const handleCancel = () => {
        setConfirmOpen(false);
    };

    const buttonText = favorite ? 'Quitar de favoritos' : 'Agregar a favoritos';

    const baseBtn = `absolute top-4 right-4 bg-white/10 rounded-full w-10 h-10 text-2xl inline-flex items-center justify-center transition-transform duration-300 ease z-10 text-[#6e6e78] hover:bg-white/15 hover:text-[#ffd700] hover:scale-110 focus-visible:outline-[3px] focus-visible:outline-[rgba(32,198,222,0.85)] focus-visible:outline-offset-2`;
    const detailsBtn = `static w-auto min-h-[44px] px-4 py-3 rounded-full gap-2 text-base font-bold`;
    const activeCls = `text-[#ffd700] bg-[rgba(255,215,0,0.15)] hover:bg-[rgba(255,215,0,0.25)]`;
    const buttonBase = `bg-white/10 inline-flex items-center justify-center transition-transform duration-300 ease z-10 text-[#6e6e78] hover:bg-white/15 hover:text-[#ffd700] hover:scale-110 focus-visible:outline-[3px] focus-visible:outline-[rgba(32,198,222,0.85)] focus-visible:outline-offset-2`;

    const dialogContent = `bg-[#111a2c] text-white rounded-xl w-full shadow-[0_18px_50px_rgba(0,0,0,0.45)]`;
    const modal = confirmOpen ? createPortal(
        <div
            role="dialog"
            aria-labelledby={`favorite-dialog-title-${fruit.id}`}
            aria-describedby={`favorite-dialog-description-${fruit.id}`}
            className="fixed inset-0 z-50 flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCancel} />
            <div className={`${dialogContent} relative z-10 mx-4 w-[min(92vw,420px)] max-w-105`}>
                <div className="px-6 py-4 text-left">
                    <h2 id={`favorite-dialog-title-${fruit.id}`} className="m-0 mb-3 text-lg text-white font-semibold">Confirmar eliminación</h2>
                    <p id={`favorite-dialog-description-${fruit.id}`} className="m-0 mb-5 text-[#d0d0d0] leading-6">
                        ¿Seguro que quieres quitar {fruit.name || 'esta fruta'} de favoritos?
                    </p>

                    <div className="flex gap-3 justify-end flex-wrap sm:flex-nowrap">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="rounded-full px-4 py-3 min-w-35 font-bold bg-gray-300 text-[#111827] transition-transform duration-200 hover:-translate-y-1"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={handleRemoveFavorite}
                            className="rounded-full px-4 py-3 min-w-35 font-bold bg-red-brand text-white transition-transform duration-200 hover:-translate-y-1"
                        >
                            Quitar de favoritos
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body,
    ) : null;

    return (
        <>
            <button
                type="button"
                className={`${buttonBase} ${variant === 'details' ? detailsBtn : baseBtn} ${favorite ? activeCls : ''}`}
                onClick={handleFavoriteClick}
                title={buttonText}
                aria-label={buttonText}
            >
                {variant === 'details' ? `★ ${buttonText}` : '★'}
            </button>

            {modal}
        </>
    );
}

export default FavoriteButton;