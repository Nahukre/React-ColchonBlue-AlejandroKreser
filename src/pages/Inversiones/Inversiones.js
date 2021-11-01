import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import { SideBar } from "../../components/SideBar/SideBar";
import "./Inversiones.css";
import { Title } from "../../components/Title/Title";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import Loading from "../../components/Loader/Loader";


export const Inversiones  = (inversionesListado) => {
    
    return (
        <>
        <div className="contenedor">
        <Title text="Inversiones"/>
            <SideBar />
            <ItemDetailContainer />
            <div className="ItemList">
            {inversionesListado.length ? inversionesListado.map((inversiones) => {
            return <div className="inversiones_detail" id={inversiones.to}>
            <div className= "activo__dolarBlue">
                <h2 className="dolarBlue__nombre">{inversiones.denominacion}</h2>
                <img className="activo__foto" src={inversiones.foto} alt={inversiones.descripcion} width= "100px" height= "100px"/>
                <p className="activo__info">{inversiones.descripcion}</p>
                <h4 className="nivelRiesgo">{inversiones.nivelRiesgo}</h4>
                <p className="activo__valor">Valor: ${inversiones.valor}</p>
                <div>
                    <ItemCount initial={1} stock={inversiones.stock}/>
                </div>
            </div>
        </div>;
            }) : <Loading/>}
        </div>
        </div>
        </>
    );
}
export default Inversiones;