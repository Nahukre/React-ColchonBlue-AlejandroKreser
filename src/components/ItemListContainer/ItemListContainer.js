import { ItemList } from "../ItemList/ItemList";
import { Title } from "../Title/Title";
import { useState } from "react/cjs/react.development";
import { inversiones } from "../../services/inversiones"
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
        },2000)
    });

    useEffect(() => {
        getData(inversiones)
            .then(res => setProductos(res))
        .catch(err => console.log(err))
    }, []);

    return (
        <><div className="ItemListContainer">
            <Title text="Home"/>
            <ItemList inversionesListado={productos} />
        </div>
        </>
    );
}

export default ItemListContainer