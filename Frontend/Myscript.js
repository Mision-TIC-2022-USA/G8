//let elemento = document.querySelector("h1");
//elemento.style.color = "red";
//elemento.style.backgroundColor = "yellow";

window.onload = () => {
    console.log("pagina cargada");
}


let NOMBRE = "Juan";
NOMBRE = "Pedro";
console.log(NOMBRE);


let resultado;

// esta operacion suma dos numero
function suma(numero1, numero2) {
    return numero1 + numero2;
}

resultado = suma(50, 50);
console.log(resultado);

if (resultado > 100) {
    console.log("El resultado es mayor a 100");
}
else if (resultado < 100) {
    console.log("El resultado es menor a 100");
}
else {
    console.log("El resultado es igual a 100");
}

let diaActual = new Date().getDay();
console.log(diaActual);
switch (diaActual) {
    case 0:
        console.log("Es domingo");
        break;
    case 1:
        console.log("Es lunes");
        break;
    case 2:
        console.log("Es martes");
        break;
    case 3:
        console.log("Es miercoles");
        break;
    case 4:
        console.log("Es jueves");
        break;
    case 5:
        console.log("Es viernes");
        break;
    case 6:
        console.log("Es sabado");
        break;

    default:
        console.log("No es un dia de la semana");
        break;
}

//let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for (const numero of numeros) {
//    console.log(numero);
//}
let nombre = "Juan";
let apellido = "Perez";

console.log(nombre + " " + apellido);

let numero1 = 5;
let numero2 = "5";

let resultado2 = (numero1 + numero2) - 5;

console.log(resultado2);

function clickme() {
    alert("Hola mundo");
}

function cambiar() {
    console.log("cambiando...");
}

function mouseover() {
    console.log("pasaste por el header");
}



function keydown() {
    let input = document.getElementById("input");
    caracteres = input.value.length;
    console.log(caracteres);
    if(caracteres > 9)
    {
        input.style.backgroundColor = "red";
    }
    else
    {
        input.style.backgroundColor = "white";
    }     
}

//javascript 2

let persona = new Object();
persona.nombre = "Juan";
persona.apellido = "Perez";
persona.edad = 30;
console.log(persona);

const persona2 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    detalle : function() {
        console.log(this.nombre + " " + this.apellido + " " + this.edad);
    }
}

persona2.nuevaPropiedad = "nueva propiedad";
console.log(persona2["edad"]);
console.log(persona2);
persona2.detalle();

let dia2 = new Date();

console.log(dia2);

let numeros = [1, "Saludo", persona2, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros);
numeros.push(100);
//numeros.push(numeros2);
console.log(numeros);
let ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
numeros.unshift(80);
console.log(numeros);
numeros.shift();
console.log(numeros);
let numeros2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let contenacion = numeros.concat(numeros2);
console.log(contenacion);
console.log(numeros);
//let r = numeros + "," + numeros2;
//console.log(r);
console.log(numeros.slice(2, 6));
console.log(numeros);
//console.log(numeros.splice(2, 6));
//console.log(numeros);
console.log(numeros.join(" - "));
console.log(numeros);
//console.log(numeros.splice(2, 6, "hola", "mundo"));
console.log(numeros);
console.log(Array.from("hola"));
console.log(Array.isArray(numeros));
console.log(numeros.includes(persona2));
//console.log(numeros.fill(0,3,7));
console.log(numeros.reverse());
let palabras = ["hola", "mundo", "como", "estas"];
console.log(palabras.sort());
numeros.sort((a, b) => {
    return a - b
});
console.log(numeros);

numeros.forEach(element => {
    console.log(element);
});

let resultado3 = numeros2.every(element => {
    return element > 0;
});


console.log(resultado3);

let resultado4 = numeros2.some(element => {
    return element > 0;
});

console.log(resultado4);

let nuevoArray = numeros2.map(element => {
    return element * 2;
});

console.log(nuevoArray);

let nuevoArray2 = numeros2.filter(element => {
    return element != 15;
});

console.log(nuevoArray2);

let dato = numeros2.find(element => {
    return element == 15;
});

console.log(dato);



