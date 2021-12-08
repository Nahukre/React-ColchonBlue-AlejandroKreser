import React from "react";
import { Title } from "../Title/Title";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra";
import { useFinalizarCompra } from "../FinalizarCompra/useFinalizarCompra";
import { useState } from "react/cjs/react.development"; 
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../Firebase";
import BuyerForm from "../BuyerForm/BuyerForm";

const CartPage = () => {
    const [isOpen1, openFinalizar1, closeFinalizar1] = useFinalizarCompra(false);
    const { cartData, remove, buy, clear, itemsTotales} = useContext(CartContext);
    const sumaTotal = (total, previo) => total + previo;
    const pagoTotal = cartData.map((itemCarrito) => itemCarrito.valor *  itemCarrito.quantity)
    .reduce(sumaTotal, 0); 
    const [order, setOrder] = useState();
    const [orderNumber, setOrderNumber] = useState([]);
    const [buyer, setBuyer] = useState({
        nombre: "",
        telefono: "",
        email: "",
    });

    function handleChange(evt) {
        setBuyer({ ...buyer, [evt.target.name]: evt.target.value });
    }

    const crearPedido =  () => {
        const date = new Date();
        const orderDate = date.toLocaleString();
        const newOrder = {
            newBuyer: buyer,
            items: cartData,
            date: orderDate,
            total: pagoTotal,
        };
        setOrder(newOrder);
        setOrder(order);

        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, newOrder).then( ({id}) => setOrderNumber(id));
    }

    const finalizarPedido = () => {
        buy();
        crearPedido();
        closeFinalizar1();
    }

    return (
        <div className="cart">   
            <Title text="Carrito"/>
            <div>            
            {cartData.length >= 1 ? (
                    <div className="tablaNombres" id="tablaNombres">
                        <p>Nombre</p>
                        <p>Cantidad</p>
                        <p>Valor</p>
                        <p>Subtotal</p>
                    </div>
                ) : null
                }
                {cartData.map((itemCarrito) => (
                    <section className="contenedortabla">
                    <div className="tabla"
                    key={itemCarrito.id}
                    item={itemCarrito}>
                        <p>{itemCarrito.denominacion}</p>
                        <p>{itemCarrito.quantity}</p>
                        <p>{itemCarrito.valor}</p>
                        <p>{itemCarrito.valor * itemCarrito.quantity}</p>
                        <button onClick={() => remove(itemCarrito.id)}>Eliminar</button>
                    </div>
                    </section>
                ))}
                {cartData.length >= 1 ? (
                    <><div className="tablaNombres">
                        <p className="sub">Items totales</p> 
                        <p className="sub">{itemsTotales}</p> 
                        <p className="sub">Valor total</p>
                        <p className="sub">{pagoTotal}</p>
                    </div>
                    <button className="botonesCart" onClick={clear}>Vaciar carrito</button>
                    <button className="botonesCart" onClick={openFinalizar1}>Pagar Ahora</button>
                    </>
                ) : (
                <>
                {orderNumber.length < 1 ? (
                    <div className="carritoVacio">
                    <Loader className="spinner" type="Circles" color="#548aff" height={120} width={120} />
                    <h3 className="vacio">El carrito está vacio</h3>
                    <Link to="/"><button className="volver">Ir a comprar</button></Link>
                    </div>
                ) : (
                    <><h2 className="compraExitosa">Su compra fue exitosa</h2>
                    <p className="idCompra">El id de su compra es {orderNumber}</p>
                    <h3 className="gracias">Muchas gracias por elegirnos</h3>
                    <Link to="/"><button className="volver">Continuar comprando</button></Link>
                    </>)}
                </>
                )}
            </div>
            <FinalizarCompra isOpen= {isOpen1} closeFinalizar= {closeFinalizar1}>
                <BuyerForm setBuyer={setBuyer} name="name" buyer={buyer} handleChange={handleChange}/>
                <button disabled={!(buyer.nombre && buyer.telefono && buyer.email)} className="botonesModal" onClick={finalizarPedido}>Finalizar compra</button>
            </FinalizarCompra>
        </div> 
    );
};

export default CartPage;