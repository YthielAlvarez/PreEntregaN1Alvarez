let productos =[
    {id: 1, nombre: "Manzana ", precio: 500},
    {id: 2, nombre: "Pera ", precio: 300},
    {id: 3, nombre: "Banana ", precio: 200},
    {id: 4, nombre: "Naranja ", precio: 400},
]
const listaNombres = productos.map(nombre => nombre.nombre + nombre.precio)
alert(JSON.stringify(listaNombres));

const buscarm = productos.find(nombre =>  nombre.id === 1)
const buscarp = productos.find(nombre =>  nombre.id === 2)
const buscarb = productos.find(nombre =>  nombre.id === 3)
const buscarn = productos.find(nombre =>  nombre.id === 4)

let tienda = prompt("Comprar productos");
while (tienda != "pagar"){
    switch (tienda){
            case "manzana":
                alert(JSON.stringify(buscarm));
            break;
            case "banana":
                alert(JSON.stringify(buscarb));
            break;
            case "pera":
                alert(JSON.stringify(buscarp));
            break;
            case "naranja":
                alert(JSON.stringify(buscarn));
            break;
            default:
            alert("Producto no encontrado")
            break;
    }
    tienda = prompt("Comprar productos");
}


    function calculadora(num1, num2, operacion) {
       switch (operacion) {
         case "+":
           return num1 + num2;
           break;
    
         case "-":
           return num1 - num2;
           break;
    
         case "*":
           return num1 * num2;
           break;
    
         case "/":
           return num1 / num2;
           break;
    
         default:
           return "Operacion no encontrada";
           break;
       }
     }
    
     let numero1 = parseInt(prompt("Ingrese el primer precio"));
     let numero2 = parseInt(prompt("Ingrese el segundo precio"));
     let operacion = prompt("Ingrese la operación");
    
     let resultado = calculadora(numero1, numero2, operacion);
    
     alert(`La suma de los productos es: ${resultado}`);