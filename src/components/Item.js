import { ItemCount } from "./ItemCount";
import dolarBlue from "../img/dolarBlue.jpg"
import dolar from "../img/dolar.jpg"
import dolarSolidario from "../img/dolarSolidario.jpg"

export const Item = () => {

    return (
        <><div className="card__dolares">
            <div>
                <div>
                    <img src={dolar} alt="Foto dolar oficial" className="dolarFoto" />
                </div>
                <h5 className="dolarNombre">Dolar Oficial</h5>
                <h5 className="dolarPrecio">$100</h5>
                <div>
                    <ItemCount initial={1} stock={10} />
                </div>
            </div>
        </div>
        <div className="card__dolares">
            <div>
                <div>
                    <img src={dolarBlue} alt="Foto dolar Blue" className="dolarFoto" />
                </div>
                <h5 className="dolarNombre">Dolar Blue</h5>
                <h5 className="dolarPrecio">$180</h5>
                <div>
                    <ItemCount initial={1} stock={9} />
                </div>
            </div>
        </div>
        <div className="card__dolares">
            <div>
                <div>
                    <img src={dolarSolidario} alt="Foto dolar solidario" className="dolarFoto" />
                </div>
                <h5 className="dolarNombre">Dolar solidario</h5>
                <h5 className="dolarPrecio">$165</h5>
                <div>
                    <ItemCount initial={1} stock={8} />
                </div>
            </div>
        </div>
        </>
        
        
    );
}

