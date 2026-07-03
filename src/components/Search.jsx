const Search = () => {
    return (
        <section className='search'>
            <input type='text' id='search-title' placeholder="Entrez le titre d'un film" />
            <button>Rechercher</button>
            <div className='topflop'>
                <div className='topflop_top'>
                    <p>Top</p>
                    <i className='fa-solid fa-arrow-up'></i>
                </div>
                <div className='topflop_flop'>
                    <p>Flop</p>
                    <i className='fa-solid fa-arrow-down'></i>
                </div>
            </div>
        </section>
    );
};

export default Search;
