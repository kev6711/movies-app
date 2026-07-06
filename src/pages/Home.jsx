import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const url =
            searchValue === ""
                ? "https://api.themoviedb.org/3/movie/now_playing?api_key=b506326af662e1dfbbf6b2f2d3972c7e&language=fr-FR&page=1"
                : `https://api.themoviedb.org/3/search/movie?api_key=b506326af662e1dfbbf6b2f2d3972c7e&language=fr-FR&query=${searchValue}`;

        axios.get(url).then((res) => {
            setData(res.data.results);
        });
    }, [searchValue]);

    return (
        <>
            <Header />
            <main>
                <Search
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setSearchValue={setSearchValue}
                    setFilter={setFilter}
                />
                <div className='cards'>
                    {(filter === "top"
                        ? [...data].sort((a, b) => b.vote_average - a.vote_average)
                        : filter === "flop"
                          ? [...data].sort((a, b) => a.vote_average - b.vote_average)
                          : data
                    ).map((movie) => {
                        return <Card key={movie.id} movie={movie} />;
                    })}
                </div>
            </main>
        </>
    );
};

export default Home;
