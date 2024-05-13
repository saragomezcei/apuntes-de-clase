# SuiteCSS

### Links Oficiales

- Link a [documentación](https://suitcss.github.io/)
- Link a [GitHub](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

Es una nomenclatura que se utiliza mucho en preprocesadores (frameworks o librerías como React, Angular). Es una nomenclatura basada en BEM, pero con algunas diferencias. Sus partes son `Componentes`, `Elementos`, `Modificadores`, `Estados` y `Utilidades/Utilities`.

### Partes de SuiteCSS

- COMPONENTES: ComponentName (PascalCase)
- ELEMENTOS: ComponentName-elementName (-camelCase)
- MODIFICADORES: ComponentName--modifierName (--camelCase)
- ESTADOS: ComponentName.isStateOfComponent (.isPascalCase, .hasPascalCase, .focusPascalCase, .onPascalCase)
- UTILITIES: u-utilityName (u-camelCase)
- VARIABLES

### Componentes (bloques) y elementos
Se basa en tener bloques y elementos, como en BEM, pero estos se escriben en PascalCase.
.MiComponente-miElemento {}
```css
/* Esto es un componente */
.Galeria {}

/* Esto son elementos (Descendants) */
.Galeria-titulo {}
.Galeria-imagen {}
.Galeria-pieGaleria {}
```

 ### Modificadores
Al igual que en BEM, se utilizan modificadores.

```css
.Galeria--portada {}
```

### Estados
Los estados son modificadores `TEMPORALES` de un element (activo, inactivo, abierto, cerrado), y son independientes de los componentes en los que se usan.

```css
.MyComponent.isActive {}
.MyComponent.onHover {}
.MyComponent.isLoading {}
```

## Utilidades / Utilities
Es una de las principales diferencias con BEM, ya que se agrega el concepto de "utilidad". Se puede aplicar a cualquier etiqueta y no tiene relación ninguna con un componente o elemento. Se escriben con una "u-" delante

```css
.u-textCenter {
    text-align: center;
    margin-left: auto;
    margin-right:auto;
}
.u-bgRed {
    background-color: red;
}
.u-textRight {}
```

### Variables
.......

```CSS
:root {
/* Ejemplos de variables CSS tradicionales */
/*
-MiColorPrincipal: #fff;
--MiColorSecundario: #000;
*/

/* en SUITECSS */
--Componente-miColorPrincipal: red;
--Componente-elemento-miColorPrincipal: red;
--Componente-modificador-miColorPrincipal: red;
--Componente-onHover-miColorPrincipal: red;
--Componente-elemento-onHover-miColorPrincipal: red;
}
```