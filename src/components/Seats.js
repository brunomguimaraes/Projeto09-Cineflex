export default function Seats() {
    return (
        <>
            <h1 className="section-title">Selecione o(s) assento(s)</h1>
            <ul className="seats">
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
                <li className="seat">01</li>
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
                    <img src="" />
                </div>
                <p className="movie-title">Enola Holmes<span className="date">Quinta-feira - 15:00</span></p>
            </footer>
        </>
    );
}