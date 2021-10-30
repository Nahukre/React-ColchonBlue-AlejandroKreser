import "./SideBar.css";
import dolar from "../../img/dolar.jpg";
import dolarBolsa from "../../img/dolarBolsa.jpg";
import dolarBlue from "../../img/dolarBlue.jpg";
import apple from "../../img/apple.jpg";
import amazon from "../../img/amazon.jpg";
import tesla from "../../img/tesla.png";
import oro from "../../img/oro.jpg";
import ethereum from "../../img/ethereum.jpg";
import bitcoin from "../../img/bitcoin.jpg";
import { HashLink as Link } from "react-router-hash-link";

export const SideBar = () => {
    return (
        <>
        <div class="sidebar">
            <div className="SideContenedor">
                <Link smooth to="#dolarSolidario">
                    <img className="SideFoto" src={dolar} alt="Dolar solidario"/>
                </Link>
                <h5 className="SideNombre">Dolar solidario</h5>
            </div>
            <div className="SideContenedor">
                <Link smooth to="#dolarBolsa">
                    <img className="SideFoto" src={dolarBolsa} alt="Dolar bolsa"/>
                </Link>
                <h5 className="SideNombre">Dolar bolsa</h5>
            </div>
            <div className="SideContenedor">
                <Link smooth to="#dolarBlue">
                    <img className="SideFoto" src={dolarBlue} alt="Dolar blue"/>
                </Link>    
                <h5 className="SideNombre">Dolar blue</h5>
            </div>
            <div className="SideContenedor">
                <Link smooth to="#appleCedear">
                    <img className="SideFoto" src={apple} alt="Apple cedear"/>
                </Link>
                <h5 className="SideNombre">Apple cedear</h5>
            </div>
        </div>

        <div class="sidebarDerecha">
            <div className="SideContenedor">
                <Link smooth to="#amazonCedear">
                    <img className="SideFoto" src={amazon} alt="Amazon cedear"/>
                </Link>
                <h5 className="SideNombre">Amazon cedear</h5>
            </div>
            <div className="SideContenedor">
                <Link smooth to="#teslaCedear">
                    <img className="SideFoto" src={tesla} alt="Tesla cedear"/>
                </Link>    
                <h5 className="SideNombre">Tesla cedear</h5>
            </div>
            <div className="SideContenedor">
                <Link smooth to="#oro">
                    <img className="SideFoto" src={oro} alt="Oro"/>
                </Link>
                <h5 className="SideNombre">Oro</h5>
            </div>
            <div className="SideContenedor">
                <Link smooth to="#ethereum">
                    <img className="SideFoto" src={ethereum} alt="Ethereum"/>
                </Link>
                <h5 className="SideNombre">Ethereum</h5>
            </div>
            <div className="SideContenedor">
                <Link smooth to="#bitcoin">
                    <img className="SideFoto" src={bitcoin} alt="Bitcoin"/>
                </Link>
                <h5 className="SideNombre">Bitcoin</h5>
            </div>
        </div>
        </>
    );
}