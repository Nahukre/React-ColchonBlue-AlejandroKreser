import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import { SideBar } from "../../components/SideBar/SideBar";
import "./Inversiones.css";
import { Title } from "../../components/Title/Title";


export const Inversiones  = () => {
    
    

    return (
        <>
        <div className="contenedor">
        <Title text="Inversiones"/>
            <SideBar />
            <ItemDetailContainer />
        </div>
        </>
    );
}
export default Inversiones;