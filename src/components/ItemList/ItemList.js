import React from "react";
import { Item } from "../Item/Item";
import Loading from "../Loader/Loader";

export const ItemList = ({inversionesListado}) => {
    return (
        <>
        <div className="ItemList">
        {inversionesListado.length ? inversionesListado.map((inversiones, id) => {
            return <Item inversiones={inversiones} key={id} />;
        }) : <Loading/>}
        </div>
        </>
    );
};
export default ItemList;