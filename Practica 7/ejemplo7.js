var factura = {
    numero: 650,
    cliente: "Transporte hernandez",
    vencimientos: {
        1: new Date(2003,10,20),
        2: new Date(2023,9,30),
        3: new Date (2023,12,1)
    }
}

var numeroFactura = factura.numero;
var primerVencimiento = factura.vencimientos[1];
console.log("El segundo vencimiento de la factura " + numeroFactura + " sera el " + primerVencimiento.getDate())