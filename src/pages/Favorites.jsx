import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Favorites = () => {
    const [favoritesMovies, setFavoritesMovies] = useState(JSON.parse(localStorage.getItem("favoritesMovies")) || []);

    return (
        <>
            <Header />
            <main className='favorite'>
                <h2 className='favorite_title'>
                    Coups de coeur <i className='fa-solid fa-heart'></i>
                </h2>
                <div className='cards favorite_cards'>
                    {favoritesMovies.map((movie) => {
                        return <Card key={movie.id} movie={movie} setFavoritesMovies={setFavoritesMovies} />;
                    })}
                </div>
            </main>
        </>
    );
};

export default Favorites;
