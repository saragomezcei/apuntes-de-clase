# apuntes-de-clase

    <h1>Box Model</h1>

    Tienen 4 elementos:
    - Content (Contenido)
    - Padding (Relleno interior)
    - Border (Borde / Stroke)
    - Margin (Margen)

1) Content:
- Es el espacio donde se muestra nuestro contenido como por ej: texto-
imagenes-video, etc.
CSS: height, width, min-height, min-width, max-height, max-width

2) Padding:
- Es el espacio entre el contenido y el borde del elemento. Podemos definir este
espacio para los cuatros lados de la caja (arriba, derecha, abajo, izquierda)
CSS: padding, padding-top, padding-right, padding-bottom, padding-left

3) Border:
- Es la linea que rodea el contenido y el relleno. Puede tener un ancho, estilo y
color.
CSS: border, border-style, border-color, border-width

4) Margin:
Es el espacio entre el borde del elemento y los otros elementos de nuestra web.
Se puede definir para los cuatro lados de la caja (arriba, derecha, abajo, izquierda)
CSS: margin, margin-top, margin-right, margin-bottom, margin-left

Cajas inline: <span> </span>
Cajas en bloque: <div> </div>
_______________________________________

17-04
"box-sizing: border-box" -> para incluir el padding dentro del ancho total
En css, para definir estilos: .clase // #id // elemento  (sin nada delante)// * (para todo el doc)

para elementos que tengan varias clases: junto (ej: .imagen.galeria{})
para elementos hijos de una clase separado (ej: .imagen.galeria .gente{})

Normalmente, para que ignore los márgenes y paddings y tal que añaden los navegadores
* {
    box-sixing: border-box;
    margin: 0px;
    padding: 0px;
}

Si después queremos añadirle margin o padding a algun elemento, como siempre manda lo más específico, priorizará esta info sobre la de 0px.
_____________________02/may

"La Web Semántica es un enfoque para organizar y presentar información en la web de
una manera que las computadoras puedan comprender el significado y el contexto de
los datos, facilitando así la colaboración y el intercambio de información entre diferentes
sistemas y usuarios.

# VSC Shortcuts interesantes

- `Ctrl + Shift + P` : Buscar cualquier comando (Ver uso de > y @)
- `Ctrl + P` : Buscar cualquier archivo en el proyecto
- `Ctrl + P` : y luego `>` : Buscar cualquier comando
- `Ctrl + P` : y luego `@` : Buscar cualquier Símbolo/Nodo en el archivo

- `Ctrl + B` : Ocultar/Mostrar el sidebar
- `Ctrl + Shift + E` : Ver el explorador de archivos
- `Ctrl + Shift + X` : Ver el explorador de extensiones
- `Ctrl + Ñ` : Abrir la terminal
- `Ctrl + Space` : Autocompletar (Tr
- `Ctrl + Space` : Autocompletar (Trigger Suggestion)
- `Ctrl + I` : Activar Github Copilot

Podemos ver la lista completa de shortcuts en la página de [Visual Studio Code](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
o para [MacOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
o haciendo `Ctrl + K` y luego `Ctrl + S`.

## Selección de texto
- `Ctrl + L` : Seleccionar la línea actual + la siguiente
- `Ctrl + D` : Seleccionar la siguiente ocurren
- `Ctrl + D` : Seleccionar la siguiente ocurrencia de la selección
- `Ctrl + Shift + L` : Seleccionar todas las ocurrencias de la selección
- `Alt + Shift + Right` : Ampliar la seleccion: "Palabra -> Linea -> Bloque"
- `Alt + Shift + Left` : Reducir la selección: "Bloque -> Linea -> Palabra"

## Movimiento por el código

- `Alt + Up` : Mover la línea actual hacia arriba
- `Alt + Down` : Mover la línea actual hacia abajo
- `F2` : Cambiar el nombre de la variable en todas sus ocurrencias