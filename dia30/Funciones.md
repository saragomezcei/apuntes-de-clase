# Definición de funciones

```js
// Función clásica

function miFuncion(param1, param2) {
    return valor1

    return valor2 // Este no funcionaría porque una función solo devuelve un valor, y al llegar a "return" se acaba la función, si queremos que nos devuelva varias cosas podemos hacer que return sea una lista de cosas (array)
}

miFunction(atributo1, atributo2);

// Función asignada a variables

const miFunción = function (param1, param2){
    return valor;
}

// Función en flecha (arrow function)

const miFuncion = (param1, param2) => {
    return valor;
}

const objeto = {
    color: rojo,
    metodo = () {

    }
}

let objeto;
objeto = {
    metodo: () => {

    }
} 

// Función en flecha simplificada

const miFuncion = param => valor;

// Ejemplo de función flecha
// Cuando hacemos click en "divEstadisticas", se ejecuta la función mostrar el mensaje en consola

divEstadisticas.addEventListener("click", function hacerAlgo() {
    // Función de CALLBACK
    console.log("Estoy haciendo algo cuando me hacen click");
});

divEstadisticas.addEventListener("click", () => {
    console.log("Estoy haciendo algo cuando me hacen click");
});
```