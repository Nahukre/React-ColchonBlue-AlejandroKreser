import { ItemList } from "../ItemList/ItemList";
import { Title } from "../Title/Title";
import { useState } from "react/cjs/react.development";
// import { inversiones } from "../../services/inversiones"
import { useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../Loader/Loader";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

export const ItemListContainer = () => {
    const {categoriaTo} = useParams();
    const [productos, setProductos] =useState([]);
    
    useEffect(() => {
        async function getItems(db) {
        const itemsCol = categoriaTo ? query(
            collection(db, "items"),
            where("categoria", "==", categoriaTo)
        ) : collection(db, "items");
        const snapshot = await getDocs(itemsCol);
        const itemsList = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
        const itemSort =  itemsList.sort((a, b) => {
            if (a.denominacion > b.denominacion) return 1
            if (a.denominacion < b.denominacion) return -1
            return 0
          })
        return setProductos(itemSort);
        }
        getItems(db);
    }, [categoriaTo]);


//codigo viejo para utilizacion del json
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
        <>{db === undefined ? (
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