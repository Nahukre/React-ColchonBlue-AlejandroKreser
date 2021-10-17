import React from "react";
import { Item } from "./Item";

export const ItemList = ({inversionesListado}) => {
    return (
        <>
        <div className="ItemList">
        {inversionesListado.map((inversiones, id) => {
            return <Item item={inversiones} key={id} />;
        })}
        </div>
        </>
    );
};
export default ItemList;