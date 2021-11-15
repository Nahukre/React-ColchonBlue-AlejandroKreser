import { ItemDetail } from "../ItemDetail/ItemDetail";
import { inversiones } from "../../services/inversiones";
import React, { useEffect, useState } from "react";
import Loading from "../Loader/Loader";
import { useParams } from "react-router";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../Firebase";

    // const getItems = new Promise((res, rej) => {
    //     setTimeout(() => {
    //     res(inversiones);
    //     }, 3000);
    // });

    export const ItemDetailContainer = () => {
    const {inversionesId} = useParams();   
    const [item, setItem] = useState();

    useEffect(() => {
    const invRef = doc(db, "items", inversionesId);
    getDoc(invRef).then((snapshot) => {
        if (snapshot.exists()) {
        setItem(snapshot.data());
        }
    });
    }, [inversionesId]);
console.log(item);



    // useEffect(() => {
    //     getItems.then((res) => {
    //         const itemToSet = res.filter((item) => {
    //             return item.id === Number(inversionesId)
    //         });
    //     setItem(itemToSet[0]);
    // });
    // }, [inversionesId]);

    console.log(item);


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