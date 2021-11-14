const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "<IzaSyD0uFw_y6JMPv-f87483B4-X1IirBFGIkM",
    authDomain: "colchon-blue.firebaseapp.com",
    projectId: "colchon-blue"
  });
  
var db = firebase.firestore();


var inversiones = [
    {
            id: 1,
            denominacion: "Dolar solidario",
            valor: 170,
            descripcion: "El Dólar solidario es aquel que se consigue en el mercado formal. Su cotización se obtiene de sumarle al dolar oficial el impuesto pais y el impuesto a las ganancias. Solo se pueden comprar 200 por mes.",
            stock: 10,
            to: "dolarSolidario",
            categoria: "tradicionales",
        },
        {
            id: 2,
            denominacion: "Dolar bolsa",
            valor: 175,
            descripcion: "El Dólar bolsa es aquel que surge de la compra venta de títulos en el mercado financiero. Si se compra dolar solidario no se puede adquirir este dolar.",            stock: 10,
            to: "dolarBolsa",
            categoria: "tradicionales",
        },
        {
            id: 3,
            denominacion: "Dolar blue",
            valor: 185,
            descripcion: "El Dólar Blue es aquel que se consigue en el mercado paralelo. Su cotización generalmente es superior a la cotización del oficial y suele aumentar a medida que aumentan las restricciones para la compra de dólares al precio oficial.",
            stock: 10,
            to: "dolarBlue",
            categoria: "tradicionales",
        },
        {
            id: 4,
            denominacion: "Apple cedear",
            valor: 3500,
            descripcion: "Cedears (Certificados de Depósito Argentinos) de la compañia Apple. Activo financiero atado al dolar y a la valuación de la empresa en el mercado.",
            stock: 10,
            to: "appleCedear",
            categoria: "acciones",
        },    
        {
            id: 5,
            denominacion: "Amazon cedear",
            valor: 4500,
            descripcion: "Cedears  (Certificados de Depósito Argentinos) de la compañia Amazon. Activo financiero atado al dolar y a la valuación de la empresa en el mercado.",
            stock: 10,
            to: "amazonCedear",
            categoria: "acciones",
        },
        {
            id: 6,
            denominacion: "Tesla cedear",
            valor: 8000,
            descripcion: "Cedears  (Certificados de Depósito Argentinos) de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado. Este activo es considerado de riesgo.",
            stock: 10,
            to: "teslaCedear",
            categoria: "acciones",
        },
        {
            id: 7,
            denominacion: "Oro",
            valor: 55700,
            descripcion: "El oro es un metal precioso utilizado como reserva de valor. Se caracteriza por tener poca variación en su cotización y ser resguardo de valor en epocas de inflación. El valor que se toma es por gramo.",
            stock: 10,
            to: "oro",
            categoria: "tradicionales",
        },
        {
            id: 8,
            denominacion: "Ethereum",
            valor: 500000,
            descripcion: "Ethereum es la moneda digital  con la segunda capitalización de mercado. Se caracteriza por ser una plataforma descentralizada, que sirve para programar contratos inteligentes.",
            stock: 10,
            to: "ethereum",
            categoria: "criptomonedas",
        },
        {
            id: 9,
            denominacion: "Bitcoin",
            valor: 8000000,
            descripcion: "Bitcoin es una criptomoneda descentralizada, es decir que no existe una autoridad de control que sea responsable de su emisión y registro de sus movimientos.",
            stock: 10,
            to: "bitcoin",
            categoria: "criptomonedas",
        }

    ]

inversiones.forEach(function(obj) {
    db.collection("inversiones").add({
        id: obj.id,
        denominacion: obj.denominacion,
        valor: obj.valor,
        descripcion: obj.descripcion,
        stock: obj.stock,
        to: obj.to,
        categoria: obj.categoria
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});