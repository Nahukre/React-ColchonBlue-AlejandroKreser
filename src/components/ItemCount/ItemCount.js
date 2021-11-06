import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useModal } from "../Modal/useModal";
import "./ItemCount.css";
import {inversiones} from "../../services/inversiones";


export const ItemCount  = ({stock, initial}) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [counter, setCounter] = useState(initial);

    const carrito = inversiones.valor * counter;

    const resta = () => {
        if(counter > 1) {
        setCounter(counter - 1)}
        else 
        setCounter(counter);
    };
    const suma = () => {
        if (counter < stock){
        setCounter(counter + 1)}
        else
        setCounter(counter);
    };
    const onAdd = () => {
        
        console.log(counter);
        console.log(carrito);
    };

    return (
        <><div className="contador">
                <button className="botonesContador" onClick={resta}>-</button>
                <span className="cantidad">{counter}</span>
                <button className="botonesContador" onClick={suma}>+</button>
        </div>
        <div>
            <button className="aniadir" onClick={(onAdd, openModal1)}>Añadir al carrito</button>
        </div>
        <Modal isOpen= {isOpenModal1} closeModal= {closeModal1}>
            <Link to="/"><button className="botonesModal">Seguir comprando</button></Link>
            <Link to="/cart"><button className="botonesModal">Finalizar compra</button></Link>
        </Modal>
        </>
    
    );
}