import colchon from "../img/colchon.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <><header class="encabezado__index">
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
                <li className="item"><a href="index.js" id="active">Home</a></li>
                <li className="item"><a href="Page/Inversiones.html">Inversiones</a></li>
                <li className="item"><a href="Page/Contacto.html">Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
        </>
    );
}