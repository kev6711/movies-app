import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/movie/popular?api_key=b506326af662e1dfbbf6b2f2d3972c7e&language=fr-FR&page=1",
            )
            .then((res) => setData(res.data.results));
    }, []);

    return (
        <>
            <Header />
            <main>
                <Search />
                <div className='cards'>
                    {data.map((movie) => {
                        return <Card key={movie.id} movie={movie} />;
                    })}
                </div>
            </main>
        </>
    );
};

export default Home;
