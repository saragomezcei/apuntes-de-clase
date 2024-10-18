/*SE SUELE LLAMAR scripts.js, proyecto.js o main.js */

document.addEventListener("DOMContentLoaded", function () {

    //const miBody = document.querySelector(body);
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


/* -------------------------------------------- */
/*                Sección Home                  */
/* -------------------------------------------- */
function iniHome (){
    console.log("Estoy en iniHome");
}


/* -------------------------------------------- */
/*              Sección Contacto                */
/* -------------------------------------------- */
function iniContacto (){
    console.log("Estoy en iniContacto");
}


/* -------------------------------------------- */
/*                Sección Galería               */
/* -------------------------------------------- */
async function iniGaleria (){
    console.log("Estoy en iniGaleria");

    //Parte 1: Ceclarar variables y datos
    const galeriaContainer = document.querySelector(".galeria-container");
    let listaGaleria = [];
    
    //Parte 2: Declarar nuestras funciones
    
    async function traerUsuarios (){
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            // convertir mi string de JSON a un objeto JS
            const listaUsuarios = await response.json();
            //return lista de usuarios
            return listaUsuarios;
        } catch(error) {
            console.error("tuvimos un error al obtener datos: ", error);
            return [];
        }
    }
    
    function imprimirUsuarios (){
        console.log("Mis usuarios son: ", listaGaleria);
        galeriaContainer.innerHTML = listaGaleria.map ( usuario => {
            return `<div class="userCard">
            <h3>${usuario.name}</h3>
            <a href="mailto:${usuario.email}" target="_blank">${usuario.email}</a>
        </div>`;
        }).join("");
        //const miGaleriaHTML = nuevaLista.join("");

        //galeriaContainer.innerHTML = miGaleriaHTML;
    }
    //Parte 3. Ejecutar nuestro código
    //traer datos de mis usuarios
    listaGaleria = await traerUsuarios();

    //imprimirlos en pantalla
    imprimirUsuarios();
}

/* -------------------------------------------- */
/*                Sección Scroll                */
/* -------------------------------------------- */
