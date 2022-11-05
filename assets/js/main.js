console.log("Entro al main.js");

let nombre_persona = "Juan";

console.log(nombre_persona);

let nombre = "Juan"
let apellido = "Perez"

//Esta es la manera clasica de concatenar string
console.log (nombre + " " + apellido);

//Esta es la manera de concatenar strings con string template

console.log(`Mi nombre es:${nombre}, mi apellido es ${apellido}`)

//Objetos de Javascript
let perro = {
    nombre: "Willy",
    color: "Negro",
    raza: "Labrador",
    edad: 4,
    peso: 8, 
};
console.log(perro)
console.log(perro.nombre)
console.log("El nombre es:", perro.nombre)
console.log(perro.raza)
console.log("La raza es:", perro.raza)

let keys = Object.keys(perro);

keys.forEach(llave => {
    console.log(perro[llave]);
});

let perro2 = {
    nombre: "Dobby",
    color: "Negro",
    raza: "Chihuahua",
    edad: 4,
    peso: 8, 
};

// const edad_perro2 = perro2.edad
// const raza_perro2 = perro2.raza

//Desestructuración
const {edad, raza, nombre:NombrePerro} = perro2;

console.log(edad);
console.log(raza);
console.log(NombrePerro);

const json_colores = `
{
    "arrayColores":[{
        "nombreColor":"rojo",
        "valorHexadec":"#f00"
    },
    {
        "nombreColor":"verde",
        "valorHexadec":"#0f0"
    },
    {
        "nombreColor":"azul",
        "valorHexadec":"#00f"
    },
    {
        "nombreColor":"cyan",
        "valorHexadec":"#0ff"
    },
    {
        "nombreColor":"magenta",
        "valorHexadec":"#f0f"
    },
    {
        "nombreColor":"amarillo",
        "valorHexadec":"#ff0"
    },
    {
        "nombreColor":"negro",
        "valorHexadec":"#000"
    }
    ]
}
`;

const objeto_de_js = JSON.parse(json_colores);

console.log(json_colores); //Esto es el JSON puro
console.log(objeto_de_js); //Esto es el JSON transformado en objeto

objeto_de_js.arrayColores.forEach(color => {
    console.log(color.nombreColor);
});