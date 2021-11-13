import React from "react";
import { Title } from "../Title/Title";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";



const CartPage = () => {
    const { cartData, remove, buy, clear, itemsTotales } = useContext(CartContext);
    const sumaTotal = (total, previo) => total + previo;
    const pagoTotal = cartData.map((itemCarrito) => itemCarrito.valor *  itemCarrito.quantity)
    .reduce(sumaTotal, 0);

    return (
        <div className="cart">   
            <Title text="Carrito"/>
            <div key={cartData.id}>
                {cartData.map((itemCarrito) => (
                    <div
                    key={itemCarrito.id}
                    item={itemCarrito}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                    }}>
                    <p>{itemCarrito.denominacion}</p>
                    <p>{itemCarrito.quantity}</p>
                    <p>Valor: {itemCarrito.valor}</p>
                    <p>Subtotal: {itemCarrito.valor * itemCarrito.quantity}</p>
                    <button onClick={() => remove(itemCarrito.id)}>Eliminar</button>
                    </div>
                ))}
                {cartData.length >= 1 ? (
                    <>
                    {" "}
                    <h3>
                    Items: {itemsTotales}{" "} 
                    Valor total: {pagoTotal}
                    </h3>{" "}
                    <button onClick={clear}>Vaciar carrito</button>{" "}
                    <button onClick={buy}>Pagar Ahora</button>{" "}
                </>
                ) : (
                <><h3>El carrito está vacio</h3>
                <Link to="/"><button>Ir a comprar</button></Link></>
                )}
            </div>
        </div> 
    );
};

export default CartPage;