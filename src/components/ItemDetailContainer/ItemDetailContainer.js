import { ItemDetailList } from "../ItemDetailList/ItemDetailList";
import { useState } from "react/cjs/react.development";
import { inversiones } from "../../services/inversiones"
import { useEffect } from "react";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
    const { inversionesId } = useParams();
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
    }, [inversionesId]);

    if (!inversiones) return null;
    return (
        <><div className="ItemDetailContainer">
            <ItemDetailList inversionesListado={productos} />
        </div>
        </>
    );
}

export default ItemDetailContainer