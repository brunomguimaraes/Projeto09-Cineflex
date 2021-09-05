import { Link, useHistory } from "react-router-dom";

export default function Review({order, clearOrder}) {
    const {movie, date, time, seats, name, cpf, idSessao} = order;
    const history = useHistory(); 

    const goToPreviousPage = () => {
        history.push(`/sessao/${idSessao}`);
    };
    return (
        <>
            <button className="return-button" onClick={goToPreviousPage}>{"<"}</button>
            <h1 className="section-title end-screen">Pedido feito com sucesso!</h1>
            <h2 className="data-title">Filme e sessão</h2>
            <p className="data">{movie}</p>
            <p className="data">{date} {time}</p>
            <h2 className="data-title">Ingressos</h2>
            {seats.map(seat => <p className="data" key={seat}>Assento {seat}</p>)}
            <h2 className="data-title">Comprador</h2>
            <p className="data">Nome: {name}</p>
            <p className="data">CPF: {cpf}</p>
            <Link to="/">
                <button className="choose-seats" onClick={clearOrder}>Voltar pra Home</button>
            </Link>
        </>
    );
}