const Search = ({ inputValue, setInputValue, setSearchValue, setFilter }) => {
    return (
        <section className='search'>
            <input
                type='text'
                id='search-title'
                placeholder="Entrez le titre d'un film"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => setSearchValue(inputValue)}>Rechercher</button>
            <div className='topflop'>
                <button onClick={() => setFilter("top")} className='topflop_top'>
                    <p>Top</p>
                    <i className='fa-solid fa-arrow-up'></i>
                </button>
                <button onClick={() => setFilter("flop")} className='topflop_flop'>
                    <p>Flop</p>
                    <i className='fa-solid fa-arrow-down'></i>
                </button>
            </div>
        </section>
    );
};

export default Search;
