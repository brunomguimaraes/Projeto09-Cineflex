import { Link } from "react-router-dom";

export default function Session({idSessao, time}) {
    return (
        <Link to={`/sessao/${idSessao}`}>
            <li className="time">{time}</li>
        </Link>    
    );
}