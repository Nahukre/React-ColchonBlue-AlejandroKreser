import React from "react";
import { Title } from "../Title/Title";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";



const CartPage = () => {
    const { cartData, Remove, Buy } = useContext(CartContext);
    let Valor = 0;
    cartData.forEach((inversiones) => {
    Valor = parseFloat(Valor) + parseFloat(inversiones.valor);
    });
    console.log(Valor);
    const valorTotal = Valor * cartData.length;

    return (
        <div className="cart">   
            <Title text="Carrito"/>
            <div key={cartData.id}>
                {cartData.map((Crt) => (
                    <div
                    key={Crt.id}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                    }}>
                    <p>{Crt.denominacion}</p>
                    <p>Valor: {Crt.valor}</p>
                    <p>Total: {valorTotal}</p>
                    <button onClick={() => Remove(Crt.id)}>Eliminar</button>
                    </div>
                ))}
                {cartData.length >= 1 ? (
                    <>
                    {" "}
                    <h3>
                    Items: ({cartData.length}) Valor total: {Valor}
                    </h3>{" "}
                    <button onClick={Buy}>Pagar Ahora</button>{" "}
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