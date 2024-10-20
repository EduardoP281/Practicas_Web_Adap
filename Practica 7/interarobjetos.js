const producto = {
    nombre: "laptop",
    precio: 800,
    disponible: true
}

// uso de un bucle para iterar sobre las propiedades del objeto

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}