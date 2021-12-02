//funciones
function suma(a, b) {
    return a + b;
    //this.
}

const suma2 = function (a, b) {
    return a + b;
}

//funciones flecha
const suma3 = (a, b) => {
    return a + b;
}

const suma4 = (a, b) => a + b;

const persona = (nombre, apellido) => {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona1 = (nombre, apellido) => ({
    nombre: nombre,
    apellido: apellido
});

//console.log(persona1("Juan", "Perez"));

//-----------------------------------------------------

const persona3 = {
    nombre: "Juan",
    apellido: "Perez"
};

//const persona4 = {
//    nombre: persona3.nombre,
//    apellido: persona3.apellido
//};

//operador spread
const persona4 = { ...persona3 };
persona4.nombre = "Pedro";

console.log(persona3);
console.log(persona4);

//desestructuracion de objetos
const { nombre, apellido } = persona3;
console.log(nombre);
console.log(apellido);

//desestructuracion de objetos por funcion
const func1 = ({ nombre, apellido }) => {
    console.log(nombre + " " + apellido);
}

func1(persona3);

const numeros = [1, 2, 3];
const [uno, dos, tres] = numeros;
console.log(uno + " " + dos + " " + tres);

//----------------------------------
//synchronous - asynchrounous
const promesa = new Promise((resolve, reject) => {
    //simulado de una llamada a una api rest
    console.log("Inicio");
    setTimeout(() => {
        //metodo de respuesta en segundos
        resolve("Respuesta del servidor");
    }, 6000);

    //reject("Error del servidor");

});

//3
promesa.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

//2
console.log("cargando data");
console.log("contruyendo objetos ");
console.log("cargando el forntend");
console.log("...");

//async await
const consultarProducto = async () => {

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Respuesta del servidor 2");
        }, 6000);
    });

    const resultado = await promesa;
    console.log(resultado);
}

consultarProducto();
console.log("fin");

//-----------------------------------------------
//Manupilacion del DOM
//const elements = document.getElementsByClassName("col");
//const elements = document.getElementsByTagName("div");
//const element = document.getElementById("selector");
//const element = document.querySelector("#selector");
const elements = document.querySelectorAll("input");
console.log(elements);

for (const element of elements) {
    if (element.value.length == 0) {
        element.style.border = "1px solid red";
    }
    else {
        element.style.border = "1px solid green";
    }
}


