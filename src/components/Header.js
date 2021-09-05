import history from "./history";
import { useLocation } from "react-router";

export default function Header() {
    const {pathname} = useLocation();
    const goToPreviousPage = () => {
        history.goBack();
    };

    return (
        <>
        {pathname !== "/" ? <button className="return-button" onClick={goToPreviousPage}>{"<"}</button> : ""}
        <header className="top-bar">CINEFLEX</header>
        </>
    );
}