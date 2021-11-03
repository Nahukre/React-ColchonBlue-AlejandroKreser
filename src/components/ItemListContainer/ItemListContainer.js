import { ItemList } from "../ItemList/ItemList";
import { Title } from "../Title/Title";
import { useState } from "react/cjs/react.development";
import { inversiones } from "../../services/inversiones"
import { useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../Loader/Loader";

export const ItemListContainer = () => {
    const {categoriaTo} = useParams();
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
        .then((res) => {categoriaTo ?
        setProductos(res.filter((inversiones) => inversiones.categoria === categoriaTo )) : setProductos(inversiones);
        })
        .catch(err => console.log(err))
    }, [categoriaTo]);

    return (
        <>{ItemList === undefined ? (
            <Loading/>
        ): (
        <div className="ItemListContainer">
            <Title text="Home"/>
            <ItemList inversionesListado={productos} />
        </div>
        )}
        </>
    );
}

export default ItemListContainer