import dolar from "../img/dolar.jpg";
import dolarBolsa from "../img/dolarBolsa.jpg";
import dolarBlue from "../img/dolarBlue.jpg";
import apple from "../img/apple.jpg";
import amazon from "../img/amazon.jpg";
import tesla from "../img/tesla.png";
import oro from "../img/oro.jpg";
import ethereum from "../img/ethereum.jpg";
import bitcoin from "../img/bitcoin.jpg";

export const inversiones = [
    {
            "id": 0,
            "denominacion": "Dolar solidario",
            "nivelRiesgo": "Activo recomendado para inversores conservadores",
            "valor": 170,
            "descripcion": "El Dólar solidario es aquel que se consigue en el mercado formal. Su cotización se obtiene de sumarle al dolar oficial el impuesto pais y el impuesto a las ganancias. Solo se pueden comprar 200 por mes.",
            "foto": dolar,
            "stock": 1000,
            "to": "dolarSolidario",
        },
        {
            "id": 1,
            "denominacion": "Dolar bolsa",
            "nivelRiesgo": "Activo recomendado para inversores conservadores",
            "valor": 175,
            "descripcion": "El Dólar bolsa es aquel que surge de la compra venta de títulos en el mercado financiero. Si se compra dolar solidario no se puede adquirir este dolar.",
            "foto": dolarBolsa,
            "stock": 1000,
            "to": "dolarBolsa",
        },
        {
            "id": 2,
            "denominacion": "Dolar blue",
            "nivelRiesgo": "Activo recomendado para inversores conservadores",
            "valor": 185,
            "descripcion": "El Dólar Blue es aquel que se consigue en el mercado paralelo. Su cotización generalmente es superior a la cotización del oficial y suele aumentar a medida que aumentan las restricciones para la compra de dólares al precio oficial.",
            "foto": dolarBlue,
            "stock": 1000,
            "to": "dolarBlue",
        },
        {
            "id": 3,
            "denominacion": "Apple cedear",
            "nivelRiesgo": "Activo recomendado para inversores moderados",
            "valor": 3500,
            "descripcion": "Cedears  (Certificados de Depósito Argentinos) de la compañia Apple. Activo financiero atado al dolar y a la valuación de la empresa en el mercado.",
            "foto": apple,
            "stock": 1000,
            "to": "appleCedear",
        },    
        {
            "id": 4,
            "denominacion": "Amazon cedear",
            "nivelRiesgo": "Activo recomendado para inversores moderados",
            "valor": 4500,
            "descripcion": "Cedears  (Certificados de Depósito Argentinos) de la compañia Amazon. Activo financiero atado al dolar y a la valuación de la empresa en el mercado.",
            "foto": amazon,
            "stock": 1000,
            "to": "amazonCedear",
        },
        {
            "id": 5,
            "denominacion": "Tesla cedear",
            "nivelRiesgo": "Activo recomendado para inversores agresivos",
            "valor": 8000,
            "descripcion": "Cedears  (Certificados de Depósito Argentinos) de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado. Este activo es considerado de riesgo.",
            "foto": tesla,
            "stock": 1000,
            "to": "teslaCedear",
        },
        {
            "id": 6,
            "denominacion": "Oro",
            "nivelRiesgo": "Activo recomendado para inversores conservadores",
            "valor": 55700,
            "descripcion": "El oro es un metal precioso utilizado como reserva de valor. Se caracteriza por tener poca variación en su cotización y ser resguardo de valor en epocas de inflación. El valor que se toma es por gramo.",
            "foto": oro,
            "stock": 1000,
            "to": "oro",
        },
        {
            "id": 7,
            "denominacion": "Ethereum",
            "nivelRiesgo": "Activo recomendado para inversores agresivos",
            "valor": 500000,
            "descripcion": "Ethereum es la moneda digital  con la segunda capitalización de mercado. Se caracteriza por ser una plataforma descentralizada, que sirve para programar contratos inteligentes.",
            "foto": ethereum,
            "stock": 1000,
            "to": "ethereum",
        },
        {
            "id": 8,
            "denominacion": "Bitcoin",
            "nivelRiesgo": "Activo recomendado para inversores agresivos",
            "valor": 8000000,
            "descripcion": "Bitcoin es una criptomoneda descentralizada, es decir que no existe una autoridad de control que sea responsable de su emisión y registro de sus movimientos.",
            "foto": bitcoin,
            "stock": 1000,
            "to": "bitcoin",
        }

    ]

