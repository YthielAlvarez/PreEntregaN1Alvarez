let edad = Number(prompt("adivina la edad que tengo"));

if (edad >25){
    alert(edad + " no es la edad que tengo, soy más chico");
}else if(edad <25){
    alert(edad + " no es la edad que tengo, soy más grande");
}else{
    alert("Adivinaste tengo " + edad);
};

let nombre = prompt("Ingrese su nombre");

while (nombre != "ESC"){
    switch (nombre){
        case "DANIEL":
            alert("HOLA DANIEL");
            break;
        case "LUCAS":
            alert("HOLA LUCAS");
            break;
        case "PEDRO":
            alert("HOLA PEDRO");
            break;
        default:
            alert("¿COMO TE LLAMAS?")
            break;
    }
    nombre = prompt("Ingrese su nombre");
};

let resultado = 0;
let numero = Number(prompt("ingrese un numero"));

function multiplicar(primerNumero, segundoNumero) {
    resultado = primerNumero * segundoNumero
}
function mostrar(mensaje) {
    alert(numero + " * 5 = " + mensaje)
}
multiplicar(numero, 5);
mostrar(resultado);