import { NavLink } from "react-router-dom";
import colchon from "../../img/colchon.png";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <><header className="encabezado__index">
            <div className="encabezado__logo">
                <img src={colchon} className="encabezado__logo" alt="logo" />
            </div>
            <div>
                <div className="encabezado__nombre">Colchón blue</div>
                <div className="encabezado__subnombre">finanzas personales</div>
            </div>
        </header>
        <nav>
            <ul className="menu__items--font">
                <NavLink activeClassName="active" className="item" to="/">Home </NavLink>
                <NavLink activeClassName="active" className="item" to="/Inversiones">Inversiones</NavLink>
                <NavLink activeClassName="active" className="item" to="/Contacto">Contacto</NavLink>
                <CartWidget/>
            </ul>
        </nav>
        </>
    );
}