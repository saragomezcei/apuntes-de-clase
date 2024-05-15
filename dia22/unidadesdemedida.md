# UNIDADES DE MEDIDA EN CSS: px, %, em, rem

## PX
- un píxel es una medida absoluta, es un puntito de la pantalla, se usa para elementos de tamaño fijo y NO se adapta bien a sitios responsive.

## Porcentajes %
- es una medida RELATIVA al tamaño del elemento padre. Para crear diseños más fluidos y responsive que se adaptan a diferentes tamaños de pantalla. Recomendable usarlos para tamaños de contenedores y elementos que deban escalarse proporcionalmente con el tamaño de la ventana o de su padre.

## EM
- La unidad EM es relativa al tamaño de la fuente del elemento padre, por ejemplo. Si el tamaño de la fuente del padre es de 16 px, 1em va a valer 16px, si son 2 px serán 32px. 
Útil en tamaños de texto y márgenes que escalen con el tamaño de la fuente, mejorando la accesibilidad y flexibilidad del diseño. Es recomendable usar em para elementos que deban escalar proporcionalmente con el texto.

# REM
- La unidad REM es relativa al tamaño de la fuente  del elemento raíz (normalmente  el <html>). Por defecto tiene un valor de 16px. Es útil para tener consistencia en todo el documento. Recomendable usar REM para tamaños de la fuente principal, márgenes, y para garantizar la coherencia en el sitio web.