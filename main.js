let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

function convertirAMonedas(cantidad, monedas){
    if(typeof cantidad!='number'){
        throw TypeError('El dato debe ser numero');      
    }
    if(!Number.isInteger(cantidad)){
        throw TypeError('El dato debe ser numero entero');
    }
    if(cantidad <=0){
        throw Error('El dato debe ser positivo');

    }
    if(!Array.isArray(monedas)){
        throw TypeError('error');

    }

}

