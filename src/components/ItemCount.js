import { useState } from "react";

export const ItemCount  = ({stock, initial}) => {
    
    const [counter, setCounter] = useState(initial);

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
        console.log(counter)
    };

    return (
        <><div className="contador">
                <button className="botonesContador" onClick={resta}>-</button>
                <span className="cantidad">{counter}</span>
                <button className="botonesContador" onClick={suma}>+</button>
        </div>
        <div>
            <button className="aniadir" onClick={onAdd}>Añadir al carrito</button>
        </div></>
    
    );
}