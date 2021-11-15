import { ItemDetail } from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from "react";
import Loading from "../Loader/Loader";
import { useParams } from "react-router";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../Firebase";

//codigo anterior para utilizar el json
    // const getItems = new Promise((res, rej) => {
    //     setTimeout(() => {
    //     res(inversiones);
    //     }, 3000);
    // });

    export const ItemDetailContainer = () => {
    const {inversionesId} = useParams();   
    const [item, setItem] = useState();

    useEffect(() => {

        const getInversiones = (db) => {
            const inversion = doc(db, "items", inversionesId);
            getDoc(inversion).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.data());
                    setItem(snapshot.data());
                }
            });
        };
    getInversiones(db);
    }, [inversionesId]);

    //codigo anterior para utilizar el json
    // useEffect(() => {
    //     getItems.then((res) => {
    //         const itemToSet = res.filter((item) => {
    //             return item.id === Number(inversionesId)
    //         });
    //     setItem(itemToSet[0]);
    // });
    // }, [inversionesId]);

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