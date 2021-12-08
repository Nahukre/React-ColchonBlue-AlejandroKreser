import React from "react";
import "./Formulario.css";

export const Formulario = () => {
    return (
        <section>
            <form className="pagina" action="https://formsubmit.co/nahuelkreser@gmail.com" method="POST">
            <fieldset>
                <div className="formulario">
                    <p>
                        <label for="nombre">Nombre:</label>
                        <input type="text" name="nombre" required/>
                    </p>
                    <p>
                        <label for="apellido">Apellido:</label>
                        <input type="text" name="apellido" required/>
                    </p>
                    <p>
                        <label for="Celular">Celular:</label>
                        <input type="tel" class="prefijo" name="prefijo" placeholder="11" required /><input type="tel" class="telefono" name="telefono" placeholder="55562439" required />
                    </p>
                    <p>
                        <label for="email">Email:</label>
                        <input type="email" name="email" placeholder="nombre@ejemplo.com" required/>
                    </p>
                    <p>
                        <label for="start">Fecha de nacimiento:</label>
                        <input type="date" id="start" name="trip-start"
                        value="2002-01-01"
                        min="1920-01-01" max="2015-12-31"/>
                    </p>
                    <p className="motivo">
                        <label>Motivo de consulta:</label>
                        <select name="motivo de consulta">
                            <option name="Compras" value="Compras">Compras</option>
                            <option name="Asesoramiento financiero" value="Asesoramiento financiero">Asesoramiento financiero</option>
                            <option name="Otras consultas" value="Otras consultas">Otras consultas</option>
                            </select>
                    </p>
                    <p>
                        <label className="consulta">Consulta:</label>
                        <textarea name="textarea" class="consulta2"></textarea>
                    </p>
                    <p>
                        <div className="formularioNovedades">
                            <div className="checkbox">Desea recibir novedades</div> 
                            <input name="checkbox" type="checkbox"/>
                        </div>
                    </p>
                    <p>
                        <input type="submit" value="Enviar formulario" className="botones"/>
                        <input type="reset" value="Limpiar formulario" className="botones"/>
                    </p>
                </div>
            </fieldset>
        </form>
    </section>);
}