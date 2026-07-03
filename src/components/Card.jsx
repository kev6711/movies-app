import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({ movie }) => {
    const [genders, setGenders] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/genre/movie/list?api_key=b506326af662e1dfbbf6b2f2d3972c7e&language=fr-FR",
            )
            .then((res) => setGenders(res.data.genres));
    }, []);
    return (
        <article className='card'>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
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
            <p className='card_synopsis'>{movie.overview}</p>
            <button>Ajouter aux coups de coeur</button>
        </article>
    );
};

export default Card;
