const Search = ({
    inputValue,
    setInputValue,
    setSearchValue,
    setFilter,
    searchIsOpen,
    setSearchIsOpen,
    filterIsOpen,
    setFilterIsOpen,
}) => {
    const handleSearch = () => {
        setSearchValue(inputValue);
        setSearchIsOpen(true);
    };

    return (
        <section className='search'>
            <input
                type='text'
                id='search-title'
                placeholder="Entrez le titre d'un film"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <button
                onClick={() => {
                    handleSearch();
                }}
            >
                Rechercher
            </button>
            <div className='topflop'>
                <button
                    onClick={() => {
                        setFilter("top");
                        setFilterIsOpen(true);
                    }}
                    className='topflop_top'
                >
                    <p>Top</p>
                    <i className='fa-solid fa-arrow-up'></i>
                </button>
                <button
                    onClick={() => {
                        setFilter("flop");
                        setFilterIsOpen(true);
                    }}
                    className='topflop_flop'
                >
                    <p>Flop</p>
                    <i className='fa-solid fa-arrow-down'></i>
                </button>
            </div>
            <div className='cancel-buttons'>
                {searchIsOpen === true && (
                    <button
                        onClick={() => {
                            setSearchIsOpen(false);
                            setInputValue("");
                            setSearchValue("");
                        }}
                        className='cancel-buttons_search'
                    >
                        Annuler la recherche <i className='fa-solid fa-circle-xmark'></i>
                    </button>
                )}
                {filterIsOpen === true && (
                    <button
                        onClick={() => {
                            setFilterIsOpen(false);
                            setFilter("");
                        }}
                        className='cancel-buttons_filter'
                    >
                        Annuler le tri <i className='fa-solid fa-circle-xmark'></i>
                    </button>
                )}
            </div>
        </section>
    );
};

export default Search;
