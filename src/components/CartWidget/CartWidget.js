import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import carretilla from "../../img/carretilla.png";
import "./CartWidget.css";

export const CartWidget = () => {
    const { itemsTotales } = useContext(CartContext);

    return (
        <Link to="/cart">
            <img src={carretilla} className="carrito" alt="Carrito de compras"></img>
            { itemsTotales > 0 ? (<span className="items" alt="Contador items">{itemsTotales}</span>) : null}
        </Link>
    );
}
