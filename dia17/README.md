# Media Query

## Actividad
- Crear una página web con un diseño responsive que contenga 3 breakpoints (Mobile, Tablet y Desktop).
- Implementar metodología BEM a nuestras clases.
- Utilizar Media Queries en el CSS para modificar el color de fondo de la página en cada breakpoint.
- Mostrar un título diferente en cada breakpoint.
- Implementar media queries en HTML para mostrar una imagen distinta en cada B.P.

## Pasos
1. [x] Crear estructura de carpetas y archivos de nuestro proyecto.
2. [x] Crear un archivo html (index.html) con su maquetación básica.
3. [x] Implementar metodología de BEM al nombrar mis clases.
4. [x] Crear el CSS de mi diseño principal (Mobile First)
5. [x] Crear las media queries en CSS para modificar el diseño en cada B.P.

## Opcionales
- [x] Transicion de color de fondo
En CSS, en el elemento que queremos cambiar, escribimos "transition: background-color 0.5s" (El primer elemento es al que queremos aplicar la transición y el segundo elemento es la duración)
- [ ] Transition de opacidad y visibilidad de mis títulos
Esto es chungo, pero básicamente es que transition no funciona con display, así que deberíamos cambiar "display" por "visibility: visible o no-visible;" y "opacity: 0 o 1;", y a estas propiedades sí les puedes aplicar transition. El problema es que los tres elementos de título ocupan espacio, entonces se verían 