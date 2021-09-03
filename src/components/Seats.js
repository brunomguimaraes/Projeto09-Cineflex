import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Seat from "./Seat";

export default function Seats() {
    const { idSessao } = useParams();
    const [session, setSession] = useState(null);
    const URL_SESSION = `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`;

    useEffect(() => {
        const promise = axios.get(URL_SESSION);

        promise.then((answer) => {
            setSession(answer.data);
        });
    }, []);

    return (
        <>
            <h1 className="section-title">Selecione o(s) assento(s)</h1>
            <ul className="seats">
            {session ? session.seats.map(seat => <Seat isAvailable={seat.isAvailable} name={seat.name} />) : ""}
            </ul>
            <ul className="seats-information">
                <li className="category">
                    <div className="seat selected"></div>
                    <p>Selecionado</p>
                </li>
                <li className="category">
                    <div className="seat available"></div>
                    <p>Disponível</p>
                </li>
                <li className="category">
                    <div className="seat occupied"></div>
                    <p>Indisponível</p>
                </li>
            </ul>
            <p className="input-title">Nome do comprador:</p>
            <input className="input-box" type="text" placeholder="Digite seu nome..." />
            <p className="input-title">CPF do comprador:</p>
            <input className="input-box" type="text" placeholder="Digite seu CPF..." />
            <button className="choose-seats">Reservar assento(s)</button>
            <footer className="movie-selected">
                <div className="poster">
                    <img src={session ? session.movie.posterURL : ""} />
                </div>
                <p className="movie-title">{session ? session.movie.title : ""}<span className="date">{session ? session.day.weekday : ""} - {session ? session.name : ""}</span></p>
            </footer>
        </>
    );
}