import { ItemList } from "../ItemList/ItemList";
import { Title } from "../Title/Title";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../Loader/Loader";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

export const ItemListContainer = () => {
    const {categoriaTo} = useParams();
    const [productos, setProductos] =useState([]);
    
    useEffect(() => {
        async function getInversiones(db) {
            const inversiones = categoriaTo ? query(collection(db, "items"),
                where("categoria", "==", categoriaTo)
                ) : collection(db, "items");
            const snapshot = await getDocs(inversiones);
            const itemsList = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
            const itemSort =  itemsList.sort((a, b) => {
                if (a.denominacion > b.denominacion) return 1
                if (a.denominacion < b.denominacion) return -1
                return 0
            })
            return setProductos(itemSort);
        }
        getInversiones(db);
    }, [categoriaTo]);

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