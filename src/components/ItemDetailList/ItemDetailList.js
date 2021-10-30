import React from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Loading from "../Loader/Loader";

export const ItemDetailList = ({inversionesListado}) => {
    return (
        <>
        <div className="ItemDetail">
        {inversionesListado.length ? inversionesListado.map((inversiones, id) => {
            return <ItemDetail inversiones={inversiones} key={inversiones.id} />;
        }) : <Loading/> }
        </div>
        </>
    );
};
export default ItemDetailList;