import React from "react";
import { Title } from "../Title/Title";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";



const CartPage = () => {
    const { cartData, remove, buy, clear } = useContext(CartContext);
    let Valor = 0;
    cartData.forEach(({item, quantity}) => {
    Valor = quantity * item.valor;
    });
    console.log(Valor);
    const valorTotal = Valor ;


    return (
        <div className="cart">   
            <Title text="Carrito"/>
            <div key={cartData.id}>
                {cartData.map(({item}, quantity) => (
                    <div
                    key={item.id}
                    item={item}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                    }}>
                    <p>{item.denominacion}</p>
                    <p>{quantity}</p>
                    <p>Valor: {item.valor}</p>
                    <p>Subtotal: {valorTotal}</p>
                    <button onClick={() => remove(item.id)}>Eliminar</button>
                    </div>
                ))}
                {cartData.length >= 1 ? (
                    <>
                    {" "}
                    <h3>
                    Items: {cartData.length} Valor total:{cartData.map(({item}) => {
                        let precioTotal = 0;
                        precioTotal = parseFloat(item.valor) + parseFloat(precioTotal);
                        return precioTotal;
                    })} 
                    </h3>{" "}
                    <button onClick={clear}>Vaciar carrito</button>
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