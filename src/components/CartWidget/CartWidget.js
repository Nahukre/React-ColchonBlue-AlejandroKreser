import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import carrito from "../../img/carrito.png";

import "./CartWidget.css";
export const CartWidget = () => {
    const { cartData, itemsTotales } = useContext(CartContext)
    // const itemsTotales = cartData.reduce((total, itemCarrito) => total +itemCarrito.quantity, 0)
    
    return (
        <>
        <Link to="/cart">
            <img src={carrito} className="carrito" alt="Carrito de compras"/>
        </Link>
        <p className="items">{itemsTotales}</p>
        </>
    );
}
