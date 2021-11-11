import { ItemDetail } from "../ItemDetail/ItemDetail";
import { inversiones } from "../../services/inversiones";
import React, { useEffect, useState } from "react";
import Loading from "../Loader/Loader";
import { useParams } from "react-router";




    // const getItems = new Promise((res, rej) => {
    //     setTimeout(() => {
    //     res(inversiones);
    //     }, 3000);
    // });

    export const ItemDetailContainer = () => {
    const {inversionesId} = useParams();   
    const [item, setItem] = useState();

    // console.log(inversionesId);

    // useEffect(() => {
    //     getItems.then((res) => {
    //         const itemToSet = res.filter((item) => {
    //             return item.id === Number(inversionesId)
    //         });
    //     setItemDetail(itemToSet[0]);
    // });
    // }, [inversionesId]);
    const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontro nada");
        }
      }, 2000);
    });

  useEffect(() => {
    getData(inversiones)
      .then((res) => {
        inversionesId ? setItem(res.find((item) => item.id === inversionesId)) : setItem(inversiones);
      })
      .catch((err) => console.log(err));
  }, [inversionesId]);


    console.log(item);
    console.log(inversiones);

    if (!item) return null;
    return (
        <>{item === undefined ? (
            <Loading/>
        ) : (
        <div className="ItemDetailContainer">
            <ItemDetail item={item} key={item}/>
        </div>
        )}
        </>
    );
}

export default ItemDetailContainer