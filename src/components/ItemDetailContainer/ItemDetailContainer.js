import { ItemDetail } from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from "react";
import Loading from "../Loader/Loader";
import { useParams } from "react-router";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../Firebase";

    export const ItemDetailContainer = () => {
    const {inversionesId} = useParams();   
    const [item, setItem] = useState();

    useEffect(() => {

        const getInversiones = (db) => {
            const inversion = doc(db, "items", inversionesId);
            getDoc(inversion).then((snapshot) => {
                if (snapshot.exists()) {
                    setItem(snapshot.data());
                }
            });
        };
    getInversiones(db);
    }, [inversionesId]);

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