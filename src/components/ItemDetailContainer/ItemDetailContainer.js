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
            const itemToSet = res.filter((item) => {
                return item.id === Number(inversionesId)
            });
        setItemDetail(itemToSet[0]);
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
            <ItemDetail {...itemDetail} key={0}/>
        </div>
        )}
        </>
    );
}

export default ItemDetailContainer