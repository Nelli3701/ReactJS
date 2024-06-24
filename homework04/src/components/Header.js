import {Link, Outlet} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <header>
                <Link to="/">Главная страница</Link>
                <Link to="/about">О нас</Link>
            </header>
            <Outlet/>
        </>
    )
        ;
}

export default Header;