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
        <div className="contenedorNav">
            <nav>
                <ul className="menu__items--font">
                    <li><NavLink activeClassName="active" className="item"  to="/">Home </NavLink>
                        <ul>
                            <li><NavLink activeClassName="active" className="subItem"  to="/category/tradicionales">Dolar y oro </NavLink></li>
                            <li><NavLink activeClassName="active" className="subItem"  to="/category/acciones">Acciones </NavLink></li>
                            <li><NavLink activeClassName="active" className="subItem"  to="/category/criptomonedas">Criptomonedas </NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink activeClassName="active" className="item"  to="/inversiones">Inversiones</NavLink></li>
                    <li><NavLink activeClassName="active" className="item"  to="/contacto">Contacto</NavLink></li>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
        </>
    );
}