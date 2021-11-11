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
    const [item, setItem] = useState();

    useEffect(() => {
        getItems.then((res) => {
            const itemToSet = res.filter((item) => {
                return item.id === Number(inversionesId)
            });
        setItem(itemToSet[0]);
    });
    }, [inversionesId]);

    console.log(item);
    console.log(inversiones);

    if (!item) return null;
    return (
        <>{item === undefined ? (
            <Loading/>
        ) : (
        <div className="ItemDetailContainer">
            <ItemDetail item={item} key={item.id}/>
        </div>
        )}
        </>
    );
}

export default ItemDetailContainer