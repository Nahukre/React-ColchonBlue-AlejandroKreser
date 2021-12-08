import React from "react";
import dolar from "../../img/dolar.jpg";
import dolarBolsa from "../../img/dolarBolsa.jpg";
import bitcoin from "../../img/bitcoin.jpg";
import "./TiposInversionContainer.css";
import { Link } from "react-router-dom";

export const TiposInversionContainer = () => {

    return (
        <section className="pagina">
            <section id="activo2">
                <div className="activo__dolarBlue2">
                    <h2 className="dolarBlue__nombre2">DOLAR Y ORO</h2>
                    <img className="activo__foto2" src={dolar} alt="foto de dólares"/>
                    <Link to={`category/tradicionales`}>
                        <button className="detalle2">Comprar</button>
                    </Link> 
                    <p className="activo__info2">Los dolares son el activo por excelencia elegido por los argentinos a la hora de ahorrar. Por su parte el oro es otro activo de los mas elegidos por su capacidad de conservar valor a lo largo del tiempo.</p>
                </div>
                <div className="activo__dolarBlue2">
                    <h2 className="dolarBlue__nombre2">ACCIONES</h2>
                    <img className="activo__foto2" src={dolarBolsa} alt="foto de bolsa"/>
                    <Link to={`category/acciones`}>
                        <button className="detalle2">Comprar</button>
                    </Link> 
                    <p className="activo__info2">Las acciones son uno de los instrumentos más difundidos de los mercados financieros. Representan una porción del capital social de la empresa y convierten a quien las adquiere en accionista o socio de la misma. </p>
                </div>
                <div className="activo__dolarBlue2">
                    <h2 className="dolarBlue__nombre2">CRIPTOMONEDAS</h2>
                    <img className="activo__foto2" src={bitcoin} alt="foto de actores bitcoin"/>
                    <Link to={`category/criptomonedas`}>
                        <button className="detalle2">Comprar</button>
                    </Link> 
                    <p className="activo__info2">
                    Una criptomoneda es una moneda digital que se puede usar para comprar bienes y servicios, pero que utiliza un registro electrónico fuertemente cifrado para garantizar la integridad de las transacciones.</p>
                </div>
            </section>
        </section>
    );
};