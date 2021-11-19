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