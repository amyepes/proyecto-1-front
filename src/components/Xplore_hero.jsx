

function XploreHero({ searchQuery, setSearchQuery, selectedType, setSelectedType }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-[#0d1726] font-sans">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center tracking-wide">¡Explora el mundo de las <span className="text-[#00c2cb]">frutas del diablo</span>!</h1>
            <p className="text-slate-300 text-center mb-1 text-lg">Descubre los poderes y habilidades de cada fruta, y encuentra la que más te guste.</p>
            <p className="text-slate-400 text-sm text-center mb-10">Datos obtenidos de la API de One Piece.</p>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl justify-center">
                <div className="flex w-full md:w-3/5">
                    <input
                        type="text"
                        placeholder="Buscar fruta..."
                        className="w-full px-5 py-3 rounded-l-md outline-none text-slate-700 bg-white"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <button
                        className="bg-[#00c2cb] text-slate-900 font-semibold px-6 py-3 rounded-r-md hover:bg-[#00a8b0] transition-colors"
                        onClick={() => setSearchQuery('')}
                    >
                        Limpiar
                    </button>
                </div>

                <div className="w-full md:w-auto">
                    <label className="sr-only"> Tipo: </label>
                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full md:w-56 px-4 py-3 rounded-md outline-none text-slate-700 bg-white cursor-pointer font-medium">
                            <option value="">Todos</option>
                            <option value="Paramecia">Paramecia</option>
                            <option value="Logia">Logia</option>
                            <option value="Zoan">Zoan</option>
                            <option value="Zoan Antique">Zoan Antique</option>
                            <option value="Zoan Mythique">Zoan Mythical</option>
                            <option value="Smile">Smile</option>
                            <option value="Clone">Clone</option>
                        </select>

                </div>
            </div>

        </div>
    );
}

export default XploreHero;