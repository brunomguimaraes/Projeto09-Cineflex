import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Seat from "./Seat";

export default function Seats({saveOrder}) {
    const { idSessao } = useParams();
    const [session, setSession] = useState(null);
    const [reserv, setReserv] = useState({ids: [], name: "", cpf: ""});
    const [isFilled, setIsFilled] = useState(false);
    
    const URL_SESSION = `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`;

    useEffect(() => {
        const promise = axios.get(URL_SESSION);

        promise.then((answer) => {
            setSession(answer.data);
        });
    }, []);

    const saveSeat = (id, selected) => {
        if (selected) {
            reserv.ids = reserv.ids.filter(num => num !== id);
            setReserv({...reserv});
        } else {
            reserv.ids = [...reserv.ids, id]
            setReserv({...reserv});
        }
    }

    const chooseSeats = () => {
        if (reserv.name === "" || reserv.cpf === "" || reserv.ids.length === 0) {
            return alert("Prencha todos os campos!");
        }
        const isCPFValid = checkCPF();
        if (!isCPFValid) {
            return alert("CPF não é válido");
        }
        setIsFilled(true);
        const seats = reserv.ids.sort();
        saveOrder(session.movie.title, session.day.date, session.name, seats, reserv.name, reserv.cpf);
    }

    const checkCPF = () => {
        const isAllNumbers = Number(reserv.cpf);
        if (reserv.cpf.length !== 11 || isAllNumbers === NaN) {
            return false;
        } else {
            return true;
        }
    }
    
    return (
        <>
            <h1 className="section-title">Selecione o(s) assento(s)</h1>
            <ul className="seats">
            {session ? session.seats.map(seat => <Seat isAvailable={seat.isAvailable} name={seat.name} saveSeat={saveSeat}/>) : ""}
            </ul>
            <ul className="seats-information">
                <li className="category">
                    <div className="seat selected"></div>
                    <p>Selecionado</p>
                </li>
                <li className="category">
                    <div className="seat"></div>
                    <p>Disponível</p>
                </li>
                <li className="category">
                    <div className="seat occupied"></div>
                    <p>Indisponível</p>
                </li>
            </ul>
            <p className="input-title">Nome do comprador:</p>
            <input className="input-box" type="text" placeholder="Digite seu nome..." value={reserv.name} onChange={e => setReserv({...reserv, name: e.target.value})}/>
            <p className="input-title">CPF do comprador:</p>
            <input className="input-box" type="text" placeholder="Digite seu CPF..." value={reserv.cpf} onChange={e => setReserv({...reserv, cpf: e.target.value})}/>
            <Link to={isFilled ? '/sucesso' : '#'}>
                <button className="choose-seats" onMouseDown={chooseSeats}>Reservar assento(s)</button>
            </Link>
            <footer className="movie-selected">
                <div className="poster">
                    <img src={session ? session.movie.posterURL : ""} alt="Poster"/>
                </div>
                <p className="movie-title">{session ? session.movie.title : ""}<span className="date">{session ? session.day.weekday : ""} - {session ? session.name : ""}</span></p>
            </footer>
        </>
    );
}