import axios from "axios";
import { useEffect, useState, useRef } from "react";

const Card = ({ movie }) => {
    const [genders, setGenders] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [showAllText, setShowAllText] = useState(false);
    const synopsisRef = useRef(null);

    const handleShowMoreClick = () => {
        setShowAllText((prev) => !prev);
    };

    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/genre/movie/list?api_key=b506326af662e1dfbbf6b2f2d3972c7e&language=fr-FR",
            )
            .then((res) => setGenders(res.data.genres));
    }, []);

    useEffect(() => {
        const synopsisParagraph = synopsisRef.current;

        if (synopsisParagraph && synopsisParagraph.scrollHeight > synopsisParagraph.clientHeight) setShowMore(true);
    }, [movie.overview]);

    return (
        <article className='card'>
            <img
                src={movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : "./img/poster.jpg"}
                alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p className='card_date'>Sorti le : {new Date(movie.release_date).toLocaleDateString("fr-FR")}</p>
            <div className='card_rating'>
                <span className='card_rating--score'>{movie.vote_average.toFixed(1)}/10</span>
                <i className='fa-solid fa-star'></i>
            </div>
            <div className='card_genders'>
                {movie.genre_ids.map((id) => (
                    <p className='card_genders--gender' key={id}>
                        {genders.find((gender) => gender.id === id)?.name}
                    </p>
                ))}
            </div>
            <h3>Synopsis</h3>
            <div className='card_synopsis'>
                <p
                    ref={synopsisRef}
                    className={showAllText === false ? "card_synopsis--text" : "card_synopsis--text showAll"}
                >
                    {movie.overview}
                </p>
                {showMore && (
                    <button onClick={handleShowMoreClick} className='card_synopsis--button'>
                        {showAllText === true ? "Voir moins" : "Voir plus"}
                    </button>
                )}
            </div>
            <button className='card_favorite'>
                <i className='fa-solid fa-heart'></i>
            </button>
        </article>
    );
};

export default Card;
