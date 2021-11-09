import { Link } from "react-router-dom";
import carrito from "../../img/carrito.png";

import "./CartWidget.css";
export const CartWidget = () => {
    

    return (
        <>
        <Link to="/cart">
            <img src={carrito} className="carrito" alt="Carrito de compras"/>
        </Link>
        </>
    );
}
