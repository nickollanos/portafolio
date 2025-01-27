let menuVisible = false;

//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el hamburguesa una vez se selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion de animaciones habilidades
function efectoHabilidades(){
 var skills =  document.getElementById("skills");
 console.log(skills.getBoundingClientRect().top);
 
 var distanciaSkills =  window.innerHeight - skills.getBoundingClientRect().top;
 console.log(distanciaSkills);
 if(distanciaSkills >= 300){
    let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("laravel");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("angular");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoenequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("responsabilidad");
        console.log(habilidades);
 }
}

//defecto el sccrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    console.log("Efecto habilidades ejecutado");
    efectoHabilidades();
}
