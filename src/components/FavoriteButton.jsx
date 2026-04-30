import { useRef } from 'react';
import useFavorites from '../hooks/useFavorites';
import './FavoriteButton.css';

function FavoriteButton({ fruit, variant = 'icon' }) {
    const dialogRef = useRef(null);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    if (!fruit || !fruit.id) {
        return null;
    }

    const favorite = isFavorite(fruit.id);

    const openConfirmDialog = () => {
        if (dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal();
        }
    };

    const handleFavoriteClick = () => {
        if (!favorite) {
            addFavorite(fruit);
            return;
        }

        openConfirmDialog();
    };

    const handleRemoveFavorite = () => {
        removeFavorite(fruit.id);
        dialogRef.current?.close();
    };

    const handleCancel = () => {
        dialogRef.current?.close();
    };

    const buttonText = favorite ? 'Quitar de favoritos' : 'Agregar a favoritos';

    return (
        <>
            <button
                type="button"
                className={`favorite-btn ${favorite ? 'active' : ''} ${variant === 'details' ? 'favorite-btn--details' : ''}`}
                onClick={handleFavoriteClick}
                title={buttonText}
                aria-label={buttonText}
            >
                {variant === 'details' ? `★ ${buttonText}` : '★'}
            </button>

            <dialog
                ref={dialogRef}
                className="favorite-dialog"
                aria-labelledby={`favorite-dialog-title-${fruit.id}`}
                aria-describedby={`favorite-dialog-description-${fruit.id}`}
            >
                <div className="favorite-dialog__content">
                    <h2 id={`favorite-dialog-title-${fruit.id}`}>Confirmar eliminación</h2>
                    <p id={`favorite-dialog-description-${fruit.id}`}>
                        ¿Seguro que quieres quitar {fruit.name || 'esta fruta'} de favoritos?
                    </p>

                    <div className="favorite-dialog__actions">
                        <button type="button" className="favorite-dialog__cancel" onClick={handleCancel}>
                            Cancelar
                        </button>
                        <button type="button" className="favorite-dialog__remove" onClick={handleRemoveFavorite}>
                            Quitar de favoritos
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default FavoriteButton;