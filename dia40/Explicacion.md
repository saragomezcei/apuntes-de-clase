# JavaScript: posición en el HTML

Hasta ahora, hemos colocado la etiqueta <script> al final del body del HTML porque sabemos que es lo último que lee, y si lo ponemos antes puede dar error. 

Para poder colocar el <script> en el header tenemos dos métodos:

1. utilizar en el propio documento script un listener: con el switch ejecutamos un código u otro dependiendo de la página en la que estemos.

```js
document.addEventListener("DOMContentLoaded", function () {

    const bodyId = document.body.id

    switch (bodyId) {
        case "home":
            console.log("Estoy en Home");
            iniHome();
            break;
        case "galeria":
            console.log("Estoy en Galería");
            iniGaleria();
            break;
        case "contacto":
            console.log("Estoy en Contacto");
            iniContacto();
            break;
    }
})
```

2. Utilizar la palabra `defer` en la etiqueta <script> del documento html al enlazar el documento .js: 
```html
    <script defer src="./js/ejemplo.js"></script>
```