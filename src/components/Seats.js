import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Seat from "./Seat";

export default function Seats({saveOrder}) {
    const { idSessao } = useParams();
    const [session, setSession] = useState(null);
    const [userInfo, setUserInfo] = useState({ids: [], name: "", cpf: ""});
    const [isFilled, setIsFilled] = useState(false);
    
    const URL_SESSION = `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`;

    useEffect(() => {
        axios.get(URL_SESSION)
        .then((answer) => {
            setSession(answer.data);
        });
    }, []);

    const saveSeat = (id, selected) => {
        if (selected) {
            userInfo.ids = userInfo.ids.filter(num => num !== id);
            setUserInfo({...userInfo});
        } else {
            userInfo.ids = [...userInfo.ids, id]
            setUserInfo({...userInfo});
        }
    }

    const chooseSeats = () => {
        if (userInfo.name === "" || userInfo.cpf === "" || userInfo.ids.length === 0) {
            return alert("Prencha todos os campos!");
        }
        const isCPFValid = checkCPF();
        if (!isCPFValid) {
            return alert("CPF não é válido");
        }
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", userInfo)
        .then(response => console.log(response));
        setIsFilled(true);
        const seats = userInfo.ids.sort();
        saveOrder(session.movie.title, session.day.date, session.name, seats, userInfo.name, userInfo.cpf, idSessao);
    }

    const checkCPF = () => {
        const isAllNumbers = Number(userInfo.cpf);
        if (userInfo.cpf.length !== 11 || isNaN(isAllNumbers)) {
            return false;
        } else {
            return true;
        }
    }
    
    return (
        <>
            <h1 className="section-title">Selecione o(s) assento(s)</h1>
            <ul className="seats">
            {session ? session.seats.map(seat => <Seat key={seat.id} isAvailable={seat.isAvailable} name={seat.name} saveSeat={saveSeat}/>) : ""}
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
            <input className="input-box" type="text" placeholder="Digite seu nome..." value={userInfo.name} onChange={e => setUserInfo({...userInfo, name: e.target.value})}/>
            <p className="input-title">CPF do comprador:</p>
            <input className="input-box" type="text" placeholder="Digite seu CPF..." value={userInfo.cpf} onChange={e => setUserInfo({...userInfo, cpf: e.target.value})}/>
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