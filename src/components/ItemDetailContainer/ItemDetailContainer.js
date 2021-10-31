import { ItemDetail } from "../ItemDetail/ItemDetail";
import { inversiones } from "../../services/inversiones";
import React, { useEffect, useState } from "react";
import Loading from "../Loader/Loader";


    const getItems = new Promise((res, rej) => {
        setTimeout(() => {
        res(inversiones);
        }, 3000);
    });

    const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState();

    useEffect(() => {
        getItems.then((res) => {
        setItemDetail(res[0]);
    });
    }, []);
    console.log(itemDetail);

    if (!inversiones) return null;
    return (
        <>{itemDetail === undefined ? (
            <Loading/>
        ) : (
        <div className="ItemDetailContainer">
            <ItemDetail denominacion={itemDetail.denominacion} descripcion={itemDetail.descripcion} foto={itemDetail.foto} nivelRiesgo={itemDetail.nivelRiesgo} valor={itemDetail.valor} stock={itemDetail.stock} to={itemDetail.to} key={1}/>
        </div>
        )}
        </>
    );
}

export default ItemDetailContainer