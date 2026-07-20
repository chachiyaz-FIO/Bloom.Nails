console.log("Bloom Nails cargado correctamente 💅");


// ===============================
//        GALERÍA LIGHTBOX
// ===============================


const imagenes = document.querySelectorAll(".grid-galeria img");

const lightbox = document.querySelector(".lightbox");

const imagenLight = document.querySelector(".imagen-lightbox");

const cerrar = document.querySelector(".cerrar");

const siguiente = document.querySelector(".siguiente");

const anterior = document.querySelector(".anterior");

const contador = document.querySelector(".contador");

const titulo = document.querySelector(".titulo-lightbox");


let indice = 0;



// ===============================
//      ABRIR IMAGEN
// ===============================

function abrirImagen(i){
    console.log("Abrí imagen:", i);

    indice = i;


    imagenLight.src = imagenes[indice].src;


    titulo.textContent = imagenes[indice].alt;


    contador.textContent =
    `${indice + 1} / ${imagenes.length}`;


    lightbox.classList.add("activo");

}




// ===============================
//     CLICK EN GALERÍA
// ===============================


imagenes.forEach((img,index)=>{


    img.addEventListener("click",()=>{


        abrirImagen(index);


    });


});




// ===============================
//          CERRAR
// ===============================


cerrar.addEventListener("click",()=>{


    lightbox.classList.remove("activo");


});





// ===============================
//        SIGUIENTE
// ===============================


siguiente.addEventListener("click",()=>{


    indice++;


    if(indice >= imagenes.length){

        indice = 0;

    }


    abrirImagen(indice);


});





// ===============================
//        ANTERIOR
// ===============================


anterior.addEventListener("click",()=>{


    indice--;


    if(indice < 0){

        indice = imagenes.length - 1;

    }


    abrirImagen(indice);


});





// ===============================
//        TECLADO
// ===============================


document.addEventListener("keydown",(e)=>{


    if(!lightbox.classList.contains("activo")) return;



    if(e.key === "ArrowRight"){

        siguiente.click();

    }



    if(e.key === "ArrowLeft"){

        anterior.click();

    }



    if(e.key === "Escape"){

        lightbox.classList.remove("activo");

    }


});






// ===============================
//     CERRAR CLICK AFUERA
// ===============================


lightbox.addEventListener("click",(e)=>{


    if(e.target === lightbox){


        lightbox.classList.remove("activo");


    }


});


