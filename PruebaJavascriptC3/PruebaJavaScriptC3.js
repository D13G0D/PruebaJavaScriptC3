/*José es el dueño de un minimarket de barrio, lleva más de 15 años administrando el
funcionamiento completo de su negocio, siempre lo ha hecho de manera análoga, lo cual en un
inicio no presentaba problemas, pero con el pasar de los años esto ha generado errores
humanos, pérdidas de registros, documentos estropeados por la antigüedad y una nula
posibilidad de poder estudiar el real crecimiento de su negocio año tras año.
José te contrata para generar un software para su negocio.*/

//Ejercicio 1 

var canastadecompra = [1000,200,500,400,700,3000]
var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']; 
function diasdedescuento(dias){
    if(dias == 'Martes' || 'Jueves'){
        return (true);
    }else{
        return (false);
    }
}

//Ejercicio 2 

let canastadecompra2 = [400,500,700,10000];
function oferta3 (canastadecompra2){
   for (let i = 0; i < canastadecompra2.length; i++) 
   if (canastadecompra2.length >= 3 && canastadecompra2[i] >= 10000  ){
    return(true)
}
}  


//Ejerecicio 3 

var canasta3 = [300,400,500,600,-400]
function nonegativos (canasta3){
for (let i=0; i < canasta3.length; i++){
    if(canasta3[i] >=0 ){
        mnsj = 'No tenemos precios negativos'
    }   
}
}




//ejercicio 4

//4.1
var canasta= [200,5500,900,7000,500,300];
var n = canasta[0];
for (let i=0; i < canasta.length; i++){
    if(canasta[i] > n  ){
      n= canasta [i]
    }
}
console.log(n)

//4.2

var canasta= [200,5500,900,7000,500,300];
var mb = canasta[0];
for (let i=2; i < canasta.length; i++){
    if(canasta[i] < mb  ){
      mb= canasta [i]
    }
}
console.log(mb)
