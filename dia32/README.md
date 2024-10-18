# Métodos nativos JS

## Query Selector

Los Query Selector nos devuelven el primer objeto del tipo "element" que son referencias a los nodos de HTML, o `null` si no lo encuentra. 

```js
const textInput = document.querySelector('input[type: text]');

```

## QuerySelectorAll

Esto nos devuelve una lista de nodos (nodeList) que se comporta como un array, incluso es una `lista vacía`si no encuentra ningún elemento.

```js
const todosLosDivSection = document.querySelectorAll('.section');

todosLosDivSection.forEach ( elemento =>{
    console.log(elemento);
} )
```

## addEventListener
Escuchamos un evento específico en alguno de nuestros elementos. Por ejemplo;
["click", "keyup", "input", "mouse over", "change"]

```js
primerTextInput.addEventListener( "keyup", funcionAEjecutaCuandoSueltEAlBotón

);

primerTextInput.addEventListener( "keyup", => {
    console.log("Acabo de soltar una tecla")
});


primerTextInput.addEventListener( "input", => {
    console.log("El input cambió su valor")
});


primerTextInput.addEventListener( "change", => {
    console.log("Me fui del input y su valor ha cambiado")
});
```

- keyup: Cada vez que el usuario suelta la tecla. Es útil por si necesitas detectar cambios en tiempo real, pero no se va a ejecutar si el usuario pega un texto o borra con el ratón.

- change: Este evento se ejecuta cuando el elemento pierde el foco y su valor ha cambiado. Es útil si solo necesitamos reaccionar cuando el usuario termina de editar el campo.

- input: Ejecuta una función cuando el valor del input cambia. Eso incluye escribir, borrar, editar o pegar texto con el ratón.