# Transiciones en CSS

## Qué son?

Son una forma de cambiar los valores de las propiedades de un elemento de manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepte valores numéricos o de color, por eso no se puede aplicar en una propiedad "display".

Por ejemplo, se puede animar el tamaño de un elemento, el color, el color de fondo o la opacidad.

Para poner link en .md: Corchetes con el texto que se va a mostrar, seguido del link entreparéntesis. SIN ESPACIO ENTRE CORCHETES Y PARÉNTESIS.

[Imagen de Transición CSS](https://cdn-images-1.medium.com/v2/resize:fit:954/1*_6MfwckxNfQTca9SiG8MdQ.png)

Si le pongo un ! Delante, se muestra la imagen:

![Imagen de Transición CSS](https://cdn-images-1.medium.com/v2/resize:fit:954/1*_6MfwckxNfQTca9SiG8MdQ.png)

## Dónde lo podemos utilizar

Podemos consultar el manual oficial:
[Manual oficial de Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

Sin embargo, una forma rápida de identificar propiedades transicionables es buscar propiedades que acepten valores numéricos o de color.

Propiedades numéricas:
- width
- height
- font-size
- padding
- margin
- border-width
- opacity
- transform (prop como scale, rotate, translate, etc.)

Propiedades de color :
- color
- background-color
- border-color
- box-shadow
- text-shadow

## Cómo se define uns transición

Las transiciones se definen con la propiedad `transition` y se pueden personalizar con las siguientes subpropiedades:

> `transition-property`: especifica la propiedad que se animará.

> `transition-duration`: especifica la duración de la animación.

> `transition-timing-function`: especifica la función de temporalización de la animación.

> `transition-delay`: cuánto va a tardar en empezar.

```css
div {
    /* Segmentar la transición en distintas reglas (No recomendado) */
    transition-property: font-size;
    transition-duration: 4s;
    transition-timing-function: ease-in-out;
    transition-delay: 2s;

/* Unificamos cada transición en una sola regla de estructura: transition: <property> <duration> <timing-function> <delay>*/
    transition: font-size 4s ease-in-out 2s;
    transition: color 1s;

}
```

## Transition Properties

- all: todas las propiedades
- none: ninguna propiedad
- property: una o más separadas por comas

```css
div {
    transition: all 2s;
    transition: none;
    transition: width 2s, height 3s, background-color 2s;
}
```
## Timing Functions

- `ease`: velocidad lenta - rápida - lenta (por defecto).
- `linear`: velocidad constante
- `ease-in`: velocidad lenta - rápida
- `ease-out`: velocidad rápida - lenta
- `ease-in-out`: velocidad lenta-rápida-lenta, más brusco que ease
- `cubic-bezier()`: Función de timing personalizada. (cubic-bezier.com para ver gráfico y valores numéricos)

```css
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    transition: width 2s, height 2s, background-color 2s;
}

.box:hover {
    width: 200px;
    height: 200px;
    background-color: blue;
}
```