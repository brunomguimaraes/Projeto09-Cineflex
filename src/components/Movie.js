import { Link } from "react-router-dom";

export default function Movie({idFilme, img}) {
    return (
        <li className="movie">
            <Link to={`/filme/${idFilme}`}>
                <img src={img} alt="Poster"/>
            </Link>
        </li>
    );
}