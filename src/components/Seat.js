import { useState } from "react";

export default function Seat({isAvailable, name, saveSeat}) {
    const [selected, setSelected] = useState(false);
    const selectSeat = () => {
        if (!isAvailable) {
            alert("Esse assento não está disponível");
        } else {
            saveSeat(Number(name), selected);
            setSelected(() => !selected);
        }
    }
    if (name < 10) {
        name = "0" + name;
    }
    return (
        isAvailable ? <li className={selected ? "seat selected" : "seat"} onClick={selectSeat}>{name}</li> : <li className="seat occupied" onClick={selectSeat}>{name}</li>
    );
}