

function XploreHero({ searchQuery, setSearchQuery, selectedType, setSelectedType }) {
    return (
        <div className="xplore-hero">
            <h1>¡Explora el mundo de las <span className="highlight">frutas del diablo</span>!</h1>
            <p>Descubre los poderes y habilidades de cada fruta, y encuentra la que más te guste.</p>
            <p>Datos obtenidos de la API de One Piece.</p>

            <div>
                <input 
                    type="text" 
                    placeholder="Buscar fruta..." 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div className="filter-options">
                    <label>
                        Tipo:
                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                            <option value="">Todos</option>
                            <option value="Paramecia">Paramecia</option>
                            <option value="Logia">Logia</option>
                            <option value="Zoan">Zoan</option>
                            <option value="Zoan Antique">Zoan Antique</option>
                            <option value="Zoan Mythique">Zoan Mythical</option>
                            <option value="Smile">Smile</option>
                            <option value="Clone">Clone</option>
                        </select>
                    </label>
                </div>
            </div>

        </div>
    );
}

export default XploreHero;