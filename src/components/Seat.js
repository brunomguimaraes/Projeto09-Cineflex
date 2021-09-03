export default function Seat({isAvailable, name}) {
    if (name < 10) {
        name = "0" + name;
    }
    return (
        isAvailable ? <li className="seat">{name}</li> : <li className="seat occupied">{name}</li>
    );
}