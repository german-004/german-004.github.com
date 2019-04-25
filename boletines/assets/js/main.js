// console.log("Hola Mundo desde un archivo externo de  JavaScript");

//DOM = 

// queySelector /  querySelectorAll

// let links = document.querySelectorAll("a");

// links.forEach(function(link){
//     console.log(link);
// });

//console.log(links);

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
//     td.addEventListener('click',function(){
//         console.log(this);
//     })
// });

//----------------------Ejemplo practico---------------------------------
// Optener los elementos de la clase .close

// let links = document.querySelectorAll('.close');

// // Recorrerlos

links.forEach(function(link) {

    // Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(evento){
        evento.preventDefault();
        let content = document.querySelector('.content');

        // Quitar clases e animacion que ya tiene
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        // Agergar clases para animar salida  fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        // Aleta el mensaje
        setTimeout(function(){
            location.href = "/boletines";
        }),1000;

        // setInterval(function(){
        //     location.href = "/";
        // }),1000;
        

        return false;
    });
    
});

// let iconos = document.querySelectorAll('i');

// // --Agregar y quitar CLASES---
// iconos.forEach(function(icono) {
//     icono.classList.remove("fa-star-o");
//     icono.classList.add("fa-star");
// })




