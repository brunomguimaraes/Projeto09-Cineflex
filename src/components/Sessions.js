export default function Sessions() {
    return (
        <>
            <h1 className="section-title">Selecione o horário</h1>
            <ul className="sessions-list">
                <li className="schedule">
                    <p className="date">Quinta-feira - 24/06/2021</p>
                    <ul className="sessions">
                        <li className="time">15:00</li>
                        <li className="time">15:00</li>
                    </ul>
                </li>
                <li className="schedule">
                    <p className="date">Quinta-feira - 24/06/2021</p>
                    <ul className="sessions">
                        <li className="time">15:00</li>
                        <li className="time">15:00</li>
                    </ul>
                </li>
            </ul>
            <footer className="movie-selected">
                <div className="poster">
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
                </div>
                <p className="movie-title">Welcome to Sudden Death</p>
            </footer>
        </>
    );
}