# Javascript

Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, que se utiliza para crear contenido dinámico e interactivo en sitios web.

Lenguaje de alto nivel:
- diseñado para ser fácil de leer y escribir para los humanos.

Interpretado:
- se ejecuta línea por línea en lenguaje real. No necesita ser compilado (traducido para máquina).

```js
let numero=1;
console.log("Instrucción1 y numero vale: ", numero); // Esto va a imprimir en consola "Instrucción1 y numero vale: 1"

numero = numero + 1;
console.log("Instrucción2 y numero vale: ", numero); // Esto va a imprimir en consola "Instrucción1 y numero vale: 2"
```

Orientado a objetos:
JS utiliza un paradigma (OOP), lo que significa que organiza el código en "objetos". Un objeto es una colección de propiedades y métodos que se pueden leer y manipular.

Perro:
//Propiedades: Tienen un valor
- color: blanco y negro
- nombre: Lasy
//Métodos: Tienen funcionalidades
- ladran(): hacer un ruido fuerte;
- MoverLaCola(): mueve la cola para expresar su felicidad;

```js
let alumnos = {
    nombre = "Lucía",
    edad = 35,
    saludar: function() {
        console.log("Hola, mi nombre es Lucía");
    }
}
```

## Dónde podemos utilizar/probar/codificar JS

1. En el navegador:
    - En el inspeccionador, en la ventana de consola, escribiendo directamente.
2. Etiquetas `<script></script>` dentro del archivo HTML. Se suelen poner al final del body (pero dentro de este).
3. Se puede utilizar en un archivo .js y linkearlo a nuestro HTML.
4. En sitios web externos:
    - https://playcode.io/new
    - https://linangdata.om/javascript-tester
    - https://codepen.io
    - https://jsfiddle.net

## Funcionalidades

- Manipulación del DOM (Document Object Model): agregar, eliminar o modificar elementos HTML y CSS.
- Procesar formularios: Verificar datos ingresados por el usuario y realizar formularios complejos de múltiples secciones.
- Animaciones: manipular efectos visuales y animaciones en nuestra web.
- Manejo de Eventos: Responder a las acciones del usuario (hacer click, desplazarse por la web)
- Comunicación asíncrona con servidores mediante AJAX/Fecth: enviar y recibir datos de un servidor sin tener que recargar la página.


## Como se enlaza al HTML

Aunque se podría pensar que el archivo .js se enlazara de la misma manera que los CSS, estos se linkean al final del body, pero utilizando las siguientes etiquetas `<script src="./js/archivo.js"</script>`.
También se podría enlazar como los CSS, pero no es recomendable.

## Variables

Son como "cajas" que utilizamos para guardar información. Esta información puede ser un número, un texto, una lista de cosas o muchos tipos de cosas más.
Nos permiten almacenar información o datos y luego usarlos o modificarlos en diferentes partes de nuestro programa.

1. Definir una variable
Darle un nombre a esta "caja" para poder utilizarla más facilmente.

2. Asignarle un valor
Qué es lo que va a contener la caja.

3. Usar la variable: podemos ver lo que hay dentro de la caja y modificarlo.

En JS las variables se declaran con la palabra `let` o `const`. Antes se definían con la palabra `var` seguido del nombre se la variable y opcionalmente un valor inicial, pero ahora mejor utilizar `let`.

```js
let nombre="Juan";
let edad=34;
const PI=3.14159;
```

## Comentarios en JS

- Comentario simple: se utiliza `//` para comentar una sola línea de código
- Comentario simple en la misma línea: se puede utilizar `//` al final de la línea
- Comentario de bloque: se utiliza lo mismo que en CSS `/*  */` para hacer comentarios multilinea
- Comentario de documentación: se escribe con `/**     */` se utiliza para iniciar un bloque de documentación. Este tipo de comentario se utiliza para funciones y clases.

```js
// Esto es un comentario simple
let nombre="juan";
console. log ("imprimir nombre"); // comentario simple en la misma linea.

/*
Soy un comentario
Multilinea!!
*/

/**
* Esta es una función que suma 2 números.
*
* @param { number} a - El primer número
* @param {number} b - El segundos número
* @return {number} La suma de los 2 numeros anteriores
*
* */
function sumar(a, b) {
return a+b;
}
```

## Tipos de Datos

- Números: enteros, decimales, positivos, negativos, etc. sin comillas, los decimales pueden ser tanto con punto como con comas.
- Cadenas de texto (Strings): textos, palabras, frases, letras, etc. Se escriben entre comillas simples(''), comillas dobles("") o backticks (``)
- Booleanos: true/false.
- Listas de cosas (Arrays): se escribe con corchetes [] y separados por comas. 
- Objetos (objects): es una colección de propiedades (características) y métodos (funcionalidades). Se escriben con llaves {}.


```js
//PRIMITIVOS

//Strings
let texto="Hola alumnos de CEI";
let textoConComillas='Hola estoy "bien"';
let textoConComillasSimples= "I'm Tomy";
let textoConBacktick= `Quiero usar comillas 'simples' y "dobles"`; //template Strings

//Números
let numero=3;
let number=-54;
let num=-43.9;
let numeros= Number ("345"); // Cuando recibes unos números en formato de texto y los necesitas en formato número (en formato texto no puedes operar con ellos)

//Booleanos
let estaEncendido = false;
let isPrimary = true;
let onActive = false;

//REFERENCIALES

//Arrays
let alumnosDeDisenoWeb = ["Nerea", "David", "Jenny"];
let edades = [24, 56, 34]
let listaMixta = [1, Juan, true];

// Leer listas: los valores de los elementos de listas empiezan a partir de 0.

const listaDeCompras = ["tomate", "lechuga"];
// agregar a la lista "patata"
listaDeCompras=["tomate", "lechuga", "patata"]; //OK
// listaDeCompras = "patata"; // ERRORRRR

// las listas empiezan con el indice ® y se leen así
console.log(listaDeCompras[0]); // tomate
console,log(listaDeCompras[1]); // lechuga
console. log(listaDeCompras [2]); // patata
console.log(listaDeCompras[3]) // undefined


//Objects
const alumnos = {
    nombre: "Sara", 
    edad: 28,
    isRecibido = false;
    presentaProyecto = function() => {
        isRecibido = true;
    },
};

//leer una variable
console.log(alumno);

//leer una propiedad de una variable
console.log(alumno.edad);

//leer un método
console.log(alumno.presentaProyecto)

```

```js
// ejemplo de un objeto con propiedades y métodos
let alumno = {
nombre: "Lucía"
edad: 35,
saludar: function() {
console.log ("Hola, mi nombre es Lucía"):
}
}

// quiero imprimir el nombre de mi alumno (LEER PROPIEDADES DE UN OBJETO = console.log(objeto.propiedad);)
console.log(alumno.nombre); // Lucía

console.log("Me llamo" alumno.nombre,
" y tengo "alumno.edad" años"):

// si quiero que el alumno salude (USO DE MÉTODOS)
alumno.saludar();
```


## Más tipos de datos

- Undefined: es un valor que se asigna a una variable que no tiene valor. Se declara paro no se le asigna un valor.
- Null: valor que se le asigna a una variable para indicar que no tiene ningún valor intencionalmente.
- NaN (Not a Number): valor que se obtiene cuando se esperaba un número pero no lo es.
- Empty: es un string con valor vacío.
- Funciones: 
- Fechas: en realidad son objetos

```js
// UNDEFINED
let noDefinido2;

// NULL
let varNula = "texto";
let varNula2 = null;

// NaN
let noEsUnNumero = NaN;

// Empty
let vacio = " ";

// Funciones
let saludar = function () {
    console.log("Hola a todos");
}

// Fecha
let hoy = new Date(); // en realidad es un objeto
```

Podemos saber qué tipo de dato es una variable utilizando el operador "typeof":

console.log(typeof hoy);
console.log(typeof alumnos);

## Consola

La consola nos permite imprimir mensajes y depurar nuestro código. Podemos imprimir mensajes de diferentes tipos:

También nos permite filtrar los mensajes según su tipo.
```js
// Mensajes informativos
console. log ("Este es un mensaje informativo");
// Mensajes de Error
console.error("Este es un mensaje de error"):
// Mensaje de advertencia
console.warn("Este es un mensaje de advertencia")
//Mensaje de información
console.info("Este es un mensaje de información")
// Mensajes de depuración (no verbose)
console.debug ("Este es un mensaje informativo para deupración");
// Tabla de datos
console. table( ["Manzana", "Banana", "Cerezas"]);

```


##  Operadores

Son símbolos que nos permiten hacer operaciones en JavaScript. Hay diferentes tipos: aritméticos, de asignación, de comparación, lógica...

### Operadores aritméticos

- Suma: `+`
- Resta: `-`
- Multiplicación: `*`
- División: `/`
- Módulo: `%`. Devuelve el resto de la división de dos valores.
- Incremento: `++` Incrementa en 1 punto el valor de la variable.
- Decremento: `--` Disminuye en 1 punto el valor de la variable.

```js
let a = 10;
let b = 5;

let suma = a + b; // 15
let resta = a - b; // 5
let multiplicacion = a * b; // 50
let division = a / b; // 2
let modulo = a g b; // 0
let incremento = a++; // 11
let decremento = b--; // 4
```

Un ejemplo de módulo muy común es para saber si un número es par o impar.
Si el resto de la división de un número por 2 es igual a 0 es PAR
Si el resto de la división de un número por 2 es igual a 1 es IMPAR

```js
let numero = 10;

let esPar = (numero % 2 === 0); // es true
let esImpar = (numero % 2 !== 0); // es false
```

### Operadores comparativos

Se utilizan para comparar 2 valores en JS. Es como si preguntaras ¿Es variable1 igual, diferente, mayor, menor (lo que sea) que variable2? Por tanto el resultado siempre será true o false.

>El símbolo `=` por sí solo no compara, sino que asigna valores.

- Igual `==`: Comparo si 2 valores son iguales
- Estrictamente igual `===`: Compara si 2 valores son iguales y del mismo tipo.
- Distinto `!=`: Distinto valor.
- Estrictamente distinto `!==`: Distinto valor y/o tipo
- Mayor que `>` Compara si un valor es mayor a otro.
- Menor que `<` Compara si un valor es menor que otro.
- Mayor o igual que `>=` Compara si un valor es mayor o igual a otro.
- Menor o igual que `<=` Compara si un valor es menor o igual a otro.

```js
let num1 = 10;
let num2 = "10":

num1 == num2; // true
num1 === num2; // false
```

```js
let num1 = 10
let num2 = 5

let esIgual = ( num1 == num2 ) // false
let estrictamenteIgual = ( num1 == num2 ) // false
let esDistinto = ( num1 != num2 ) // true
let estrictamenteDistinto = ( num1 !== num2 ) // false
```

### Operadores lógicos

Podemos verificar que múltiples operaciones sean verdaderas utilizando estos operadores:

- `&&` (y) se tienen que cumplir todas las operaciones.
- `||` (o) se tiene que cumplir alguna de las operaciones
- `!` (no) si no se cumple

```js
if (edad > 21 && acepteTyC == true) {
    // Registrar al usuario;
};

if (dia == "sabado" || dia == "domingo") {
    respuesta = "Es festivo";
};

if (numero%2 !== 0) {
    respuesta = "Es impar";
};

if (!true) {
    //false;
}
```

## Funciones

Es un bloque de código o algoritmo que realiza una operación/acción específica. Puede recibir valores de entrada (`parámetros`) y devolver un único resultado. A los valores que se pasan a la función cuando se invoca, se les llama `argumentos`.


```js

/**
 * Función que saluda al usuario y le dice su nombre y edad.
 * 
 * @param {string} nombre - Nombre del usuario
 * @param {number} edad - Edad del usuario
 * 
 * @return {void} - no devuelve nada
 */

function Saludar () {
    // código que va a realizar mi función, entre { }
    console.log("Hola a todos!! Mi nombre es");
}

function Saludar (nombre, edad) {
    // código que va a realizar mi función, entre { }
    console.log("Hola a todos!! Mi nombre es" + nombre + "y tengo" + edad + "años.");
}

function Saludar (nombre, edad) {

    // 1. Creo una variable
    let respuesta;
    
    // 2. Actualizo la variable
    respuesta = ("Hola a todos!! Mi nombre es" + nombre + "y tengo" + edad + "años.");
    
    // 3. Devuelvo la variable actualizada
    return respuesta;
}

// para ejecutarla 

Saludar ();

Saludar (Pedro, 45); // Hola a todos!! Mi nombre es Pedro y tengo 45 años.

let saludo;

saludo = Saludar(Paula, 29);

console.log(saludo);
alert(saludo);
```

### Condicionales

Son estructuras de control que nos permiten tomar decisiones. Si se cumple la condición, se ejecuta un bloque de código, y si no se cumple se ejecuta otro bloque de código.

```js
let numero = 7

/**
 * Me indica si el módulo (resto de la división) de 2 de un número es 0 para saber si es par o impar.
 */

if( numero % 2 === 0 ) {
    console.log("El número es par")
}

else {
    console.log("El número es impar")
}


let edad = 16
// Saber si es mayor de edad
if (edad >= 18) {
    console.log("Es mayor de edad");
}

else {
    console.log("Es menor de edad");
}
```

### Ejercicios

1. Crear una función que reciba un número y devuelva si el número es par o impar.
2. Crear una función que reciba un número y me diga si es positivo, negativo o cero.
3. Crear una función que me indica si es mayor o menor de edad.
4. Crear una función a la que si le indico el día de la semana me diga si es laboral o festivo.
5. Crear una función donde sus parámetros sean Jugador1 y Jugador2, y devuelva si el Jugador1 gana al Jugador2 en el juego piedra, papel o tijera.
6. Modificar la calculadora del día 25 para que podamos sumar, restar, multiplicar o dividir dos valores utilizando funciones.

## Uso de bucles

Los bucles permiten repetir un código varias veces. En JS tenemos tres tipos de bucles:

- `for`: se utiliza cuando sabemos cuántas veces queremos que se repita algo.
- `while`:
- `do-while`:

```js
// for (inicializador; condición; incremento)

for (let contador = 0; contador < 10; contador++) {
    //me voy a repetir muchas veces
    console.log("HOLA!!");
}

```