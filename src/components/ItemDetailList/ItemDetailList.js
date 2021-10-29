import React from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailList = ({inversionesListado}) => {
    return (
        <>
        <div className="ItemDetail">
        {inversionesListado.map((inversiones, id) => {
            return <ItemDetail inversiones={inversiones} key={id} />;
        })}
        </div>
        </>
    );
};
export default ItemDetailList;