import { ItemList } from "./ItemList";
import { Title } from "./Title";
import { useState } from "react/cjs/react.development";
import inversiones from "../inversiones"
import { useEffect } from "react";

export const ItemListContainer = () => {

    const [productos, setProductos] =useState([]);
    
    const getData = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => { 
                if(data) {
                resolve(data);
            } else {
                reject("No se encontró nada");
            }
        },3000)
    });

    useEffect(() => {
        getData(inversiones)
            .then(res => setProductos(res))
        .catch(err => console.log(err))
    }, []);

    return (
        <><div class="ItemListContainer">
            <Title text="Home"/>
            <ItemList inversiones= {inversiones}/>
            {productos.length
            ? productos.map(producto => (
            <ItemList inversiones={producto} key={producto.id}/>
            ))
            : "Loading..."}
        </div>
        </>
    );
}

export default ItemListContainer