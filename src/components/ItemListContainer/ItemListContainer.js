import { ItemList } from "../ItemList/ItemList";
import { Title } from "../Title/Title";
import { useState } from "react/cjs/react.development";
import { inversiones } from "../../services/inversiones"
import { useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../Loader/Loader";
import { getFirestore } from "@firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
    const {categoriaTo} = useParams();
    const [productos, setProductos] =useState([]);
    
    useEffect(() => {
        const db = getFirestore();

        // const q = query(
        //   collection(db, "items"),
        //   where("price", ">", 100),
        //   where("categoria", "==", "tradicionales")
        // );
        getDocs(collection(db, "items")).then((snapshot) => {
          setProductos(snapshot.docs.map((doc) => doc.data(categoriaTo)));
        });
      }, [categoriaTo]);

    // const getData = (data) =>
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => { 
    //             if(data) {
    //             resolve(data);
    //         } else {
    //             reject("No se encontró nada");
    //         }
    //     },2000)
    // });

    // useEffect(() => {
    //     getData(inversiones)
    //     .then((res) => {categoriaTo ?
    //     setProductos(res.filter((inversiones) => inversiones.categoria === categoriaTo )) : setProductos(inversiones);
    //     })
    //     .catch(err => console.log(err))
    // }, [categoriaTo]);

    return (
        <>{inversiones === undefined ? (
            <Loading/>
        ): (
        <div className="ItemListContainer">
            <Title text="Home"/>
            <ItemList inversionesListado={productos} />
        </div>
        )}
        </>
    );
}

export default ItemListContainer