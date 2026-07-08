import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import axios from "axios";
import Footer from "../components/Footer";

const Home = () => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [filter, setFilter] = useState("");
    const [searchIsOpen, setSearchIsOpen] = useState(false);
    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const [favoritesMovies, setFavoritesMovies] = useState(JSON.parse(localStorage.getItem("favoritesMovies")) || []);

    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        const url =
            searchValue === ""
                ? `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr-FR&page=1`
                : `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${searchValue}`;

        axios.get(url).then((res) => {
            setData(res.data.results);
        });
    }, [searchValue, apiKey]);

    return (
        <>
            <Header />
            <main>
                <Search
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setSearchValue={setSearchValue}
                    setFilter={setFilter}
                    searchIsOpen={searchIsOpen}
                    setSearchIsOpen={setSearchIsOpen}
                    setFilterIsOpen={setFilterIsOpen}
                    filterIsOpen={filterIsOpen}
                />
                <div className='cards'>
                    {(filter === "top"
                        ? [...data].sort((a, b) => b.vote_average - a.vote_average)
                        : filter === "flop"
                          ? [...data].sort((a, b) => a.vote_average - b.vote_average)
                          : data
                    ).map((movie) => {
                        return (
                            <Card
                                key={movie.id}
                                movie={movie}
                                favoritesMovies={favoritesMovies}
                                setFavoritesMovies={setFavoritesMovies}
                            />
                        );
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
