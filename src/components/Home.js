import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const URL_MOVIES = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies";

    useEffect(() => {
        axios.get(URL_MOVIES)
        .then((answer) => {
            setMovies(answer.data);
        });
    }, []);

    return (
        <>
            <h1 className="section-title">Selecione o filme</h1>
            <ul className="movie-list">
                {movies.map(movie => <Movie key={movie.id} idFilme={movie.id} img={movie.posterURL} />)}
            </ul>
        </>
    );
}