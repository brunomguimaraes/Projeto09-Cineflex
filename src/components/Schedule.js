import Session from "./Session";

export default function Schedule({weekday, date, showtimes}) {
    return (
        <li className="schedule">
            <p className="date">{weekday} - {date}</p>
            <ul className="sessions">
                {showtimes.map(showtime => <Session key={showtime.id} idSessao={showtime.id} time={showtime.name}/>)}
            </ul>
        </li>
    );
}