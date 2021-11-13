import React from "react";
import { Title } from "../Title/Title";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";



const CartPage = () => {
    const { cartData, remove, buy, clear, itemsTotales, sumaCantidad, restaCantidad } = useContext(CartContext);
    const sumaTotal = (total, previo) => total + previo;
    const pagoTotal = cartData.map((itemCarrito) => itemCarrito.valor *  itemCarrito.quantity)
    .reduce(sumaTotal, 0);

    return (
        <div className="cart">   
            <Title text="Carrito"/>
            <div key={cartData.id}>
            {cartData.length >= 1 ? (
                    <>
                    <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                    }}>
                    <p>Nombre</p>
                    <p>Cantidad</p>
                    <p>Valor</p>
                    <p>Subtotal</p>
                    </div>
                </>
                ) : null
                }
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
                    {/* <button  onClick={restaCantidad}>-</button> */}
                    <p>{itemCarrito.quantity}</p>
                    {/* <button  onClick={sumaCantidad}>+</button> */}
                    <p>Valor: {itemCarrito.valor}</p>
                    <p>Subtotal: {itemCarrito.valor * itemCarrito.quantity}</p>
                    <button onClick={() => remove(itemCarrito.id)}>Eliminar</button>
                    </div>
                ))}
                {cartData.length >= 1 ? (
                    <>
                    <div className="subTotales">
                        <h3 className="sub">Items totales:</h3> 
                        <h3 className="sub">{itemsTotales}</h3> 
                        <h3 className="sub">Valor total:</h3>
                        <h3 className="sub">{pagoTotal}</h3>
                    </div>
                    <button className="botonesCart" onClick={clear}>Vaciar carrito</button>
                    <button className="botonesCart" onClick={buy}>Pagar Ahora</button>
                </>
                ) : (
                <><Loader className="spinner" type="Circles" color="#548aff" height={120} width={120}/>
                <h3 className="vacio">El carrito está vacio</h3>
                <Link to="/"><button className="volver">Ir a comprar</button></Link></>
                )}
            </div>
        </div> 
    );
};

export default CartPage;