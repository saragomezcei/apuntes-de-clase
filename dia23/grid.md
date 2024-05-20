# Grid CSS

- Es un sistema para crear y organizar nuestro layout, pero no es opuesto ni incompatible con flex ni a float, se pueden combinar entre ellos.
- Es un sistema de maquetación bidimensional que permite desarrollar interfaces o layputs en formato de tablas. Se compone de filas y columnas, que a su vez están formadas por celdas. Se pueden anidar unos dentro de otros.

La utilidad es poder crear layouts complejos con muy pocas líneas de código.

## Implementación

Uso de las reglas en el container:

```css
/* Creamos un grid de 3 x 2 */
.container {
    display: grid; /* Inicializar el grid */
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px;
}
```

Uso de las reglas en los elementos:

```css
.item-1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
}
```

Cada numerito es el número de la línea que delimita las filas y columnas

![alt text](<Captura de Pantalla 2024-05-16 a las 17.00.36.png>)

Se pueden invertir el `start`y el `end`de los selectores, y funcionará de la misma manera:

```css
.item-1 {
    grid-column-start: 4;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 1;
}
```

Podemos utilizar valores negativos para seleccionar elementos desde el final del grid. Esto es útil para cuando tenemos grids muy grandes, ya que no tenemos que contar en positivo, sino que si queremos que ocupe todo podemos utilizar 1 y -1, o para dejar espacio al footer, podríamos utilizar "de la fila 1 a la -2":

```css
.item-1 {
    grid-column-start: 1;
    grid-column-end: -2;
    grid-row-start: 3;
    grid-row-end: -1;
}
```

Podemos utilizar la palabra `span`para indicar cuantas columnas o filas queremos que ocupe un ítem. Por ejemplo, si quiero que un elemento se expanda de la línea 1 a la 4 columnas, podemos utilizar un span de 4:

```css
.item-1 {
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: span 3;
}
```

Si el elemento está posicionado donde queremos automáticamente, podemos utilizar las propiedades `grid-column`y `grid-row` (sin start) y utilizar `span` para indicar cuánto espacio queremos que ocupe:
```css
 .item-2 {
           grid-column: span 2;
           grid-row: span 2; 
 }
```

Estas propiedades se pueden utilizar también para sintetizar las de `-start` de la siguiente manera:

```css
 .item-2 {
           grid-column: 1 / 3; /* Sería lo mismo que decirle grid-column-start: 1; y grid-column-end: 3; */
           grid-row: 2 / 5; /* Sería lo mismo que decirle grid-row-start: 2; y grid-row-end: 5; */
 }
```

Podemos acortar aún más la sintaxis de la siguiente manera:

```css
.item-3 {
    /* row-start / col-start / row-end / column-end */
    grid-area: 1 / 1 / 4 / 4 ;
}
```

Si agregamos más ítems a nuestro Grid de los que caben, se crea una nueva fila. Esta fila NO tendrá el tamaño de nuestro grid-template, y se llaman grids implícitas. Podemos utilizar `grid-auto-rows`para definir el tamaño de las nuevas filas. Por ejemplo "grid-auto-rows: 100px;".

También podemos definir si queremos que los elementos "sobrantes" se agreguen en nuevas filas o en nuevas columnas con `grid-auto-flow.

```css
.gridContainer {
            display: grid;
            grid-template-columns: 100px 100px 100px 100px;
            grid-template-rows: 100px 50px 100px;

            grid-auto-flow: column;
            grid-auto-rows: 150px;
            grid-auto-columns: 200px;
}
```

Las celdas en grid-template pueden marcarse en px, %, em y rem, pero hay un valor especial llamado `fr`(fractional Unit). Este valor nos permite fraccionar el tamaño disponible. 

Por ejemplo, si tenemos 3 columnas y definimos los tamaños de la sigueinte manera: {1fr 2fr 1fr;}, la segunda columna ocupará el doble de ancho que la primera y la tercera, y todas variarán el tamaño según el espacio disponible, ya que ocuparán "una parte" del espacio.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 100px 100px 200px; /* Ocupará el espacio que quede disponible */
}
```

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 100px 200px; /* Cada una ocupará la mitad del espacio disponible */
}
```

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 200px; /* La primera ocupará 1/3 partes del espacio disponible, y la segunda ocupará 2/3 */
}
```

Existe la propiedad minmax() que nos permite definir el valor mínimo y máximo que ocupará nuestra columna/fila.

```css
.container {
    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) 1fr;
}
```

Existe otra propiedad llamada repeat() que nos permite repetir un número de veces un tamaño de columna o fila.

```CSS
.container {
display: grid;
/* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
grid-template-columns:repeat(8,1fr);
}


```CSS
.container {
display: grid;
/* grid-template-columns: 1fr 1fr 1fr 100px :
grid-template-columns: repeat(3, 1fr) 100px;
}
````

Podemos nombrar las celdas utilizando "grid-template-areas" y asignar un nombre a cada celda vacía.

```CSS
.container {
display: grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows: repeat(3, 100px) ;
grid-gap:10px;
grid-template-areas:
"header header header"
"main main sidebar"
"footer footer footer";
}
```
y ademas a cada caja le debemos decir que espacio ocupar:

```css
.item-1 {
grid-area: header:
}
.item-2 {
grid-area: footer;
}
```

Podemos utilziar las reglas justify-items y align-items para alinear los elementos dentro
de sus celdas. Sus opciones posibles son: start, end, center, stretch.
Por defecto estan en stretch.

```css
.container {
display: grid;
grid-template-columns:repeat(3,1fr):
grid-template-rows: repeat(3, 100px) ;
justify-items: start;
align-items: end;
```

Podemos decirle a un item específico que se alinee de una manera diferente utilizando
justify-self y align-self.

```CSS
.item-1 {
justify-self: center;
align-self:stretch;
}
```

Por último podremos alinear nuestro grid en base a su contenedor utilizando
justify-content y align-content. Sus opciones posibles son: start, end, center,
space-around, space-between y space-evenly.

```css
.container{
    display:grid;
    height: 600px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    justify-content: center;
    align-content: center;
}




## GAP

Es la separación entre celdas. Podemos utilizar un valor para que la separación sea la misma entre todas las celdas, o 2 valores para primero separación entre filas y segundo separación entre columnas. Se puede utilizar gap pero la regla original es grid-gap.