import { ItemDetail } from "../ItemDetail/ItemDetail";
import { inversiones } from "../../services/inversiones";
import React, { useEffect, useState } from "react";
import Loading from "../Loader/Loader";
import { useParams } from "react-router";


    const getItems = new Promise((res, rej) => {
        setTimeout(() => {
        res(inversiones);
        }, 3000);
    });

    export const ItemDetailContainer = () => {
    const {inversionesId} = useParams();   
    const [itemDetail, setItemDetail] = useState();

    console.log(inversionesId);

    useEffect(() => {
        getItems.then((res) => {
        setItemDetail(res[inversionesId]);
    });
    }, [inversionesId]);
    console.log(itemDetail);
    console.log(inversiones);

    if (!itemDetail) return null;
    return (
        <>{itemDetail === undefined ? (
            <Loading/>
        ) : (
        <div className="ItemDetailContainer">
            <ItemDetail denominacion={itemDetail.denominacion} descripcion={itemDetail.descripcion} foto={itemDetail.foto} nivelRiesgo={itemDetail.nivelRiesgo} valor={itemDetail.valor} stock={itemDetail.stock} to={itemDetail.to} key={0}/>
        </div>
        )}
        </>
    );
}

export default ItemDetailContainer