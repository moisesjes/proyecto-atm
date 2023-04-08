
window.addEventListener('load', function (){
console.log ('el contendio a cargado')

let imagenes = [];
    
imagenes[0] = 'imagenes/img01.png';
imagenes[1] = 'imagenes/img02.png';
imagenes[2] = 'imagenes/img03.png';

let indiceImagenes = 0;
let tiempo =2000
function cambiarImagenes(){
 
    this.document.show.src = imagenes[indiceImagenes];

    if (indiceImagenes < 2){
        indiceImagenes++;
    }
    else{
        indiceImagenes = 0;
    }
    
}

this.setInterval(cambiarImagenes, tiempo)

})