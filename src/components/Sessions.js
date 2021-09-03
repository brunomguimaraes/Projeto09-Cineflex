import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Schedule from "./Schedule";

export default function Sessions() {
    const { idFilme } = useParams();
    const [movie, setMovie] = useState(null);
    const URL_MOVIE = `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idFilme}/showtimes`;

    useEffect(() => {
        const promise = axios.get(URL_MOVIE);

        promise.then((answer) => {
            setMovie(answer.data);
        });
    }, []);

    return (
        <>
            <h1 className="section-title">Selecione o horário</h1>
            <ul className="sessions-list">
                {movie ? movie.days.map(day => <Schedule weekday={day.weekday} date={day.date} showtimes={day.showtimes} />) : ""}
            </ul>
            <footer className="movie-selected">
                <div className="poster">
                    <img src={movie ? movie.posterURL : ""} alt="Poster"/>
                </div>
                <p className="movie-title">{movie ? movie.title : ""}</p>
            </footer>
        </>
    );
}