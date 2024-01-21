let numerosecreto = 0 ;
let intentos = 0 ;
let listanumerossorteados = [] ;
let numeromaximo = 10 ;

console.log (numerosecreto) ;
// el console.log sirve simplemente para ver en la consola del desarrolador el numero creado 

function asignartextoElemento (elemento , texto) {
    let elementoHTML = document.querySelector (elemento ) ;
    elementoHTML.innerHTML = texto;
    return; 
    //el return no es obligatorio si no quieres retornar 
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value );
    
    if (numeroDeUsuario === numerosecreto ) {
    asignartextoElemento ("p", `acertaste el numero en ${ intentos } ${(intentos === 1 ) ? "vez" : "veces "}`) ; 
    document.getElementById("reinciar").removeAttribute("disabled") ;
} else  {
        if (numeroDeUsuario > numerosecreto ) {
            asignartextoElemento ("p" , "EL NUMERO SECRETO ES MENOR") ;
        } else {
            asignartextoElemento ( "p" , " EL NUMERO SECRETO ES MAYOR")
        }
        intentos ++ ;
        limpiarcaja () ; 
    }
    return ;
}

// esta funciom nos sirve para limpiar la caja donde el usuario escribe , una forma mas comoda 
function limpiarcaja () {
   document.querySelector ("#valorUsuario").value = "" ;
}

function geenerarnumerosereto() {
    let numerogenerado = Math.floor(Math.random () * numeromaximo)+1 ;   
    // si el numero generado esta incluido en la lista
if (listanumerossorteados.length === numeromaximo ){
    asignartextoElemento ("p" ,"YA SE HAN SORTEADO TODOS LOS NUMEROS POSIBLES") ;
} else {
    // si el numero generado esta incluido en la lista  
    if (listanumerossorteados.includes(numerogenerado)) {
        return geenerarnumerosereto () ;
    } else {
        listanumerossorteados.push (numerogenerado) ;
        return numerogenerado ;
    }
}

function condicionesiniciales () {
    asignartextoElemento ("h1" , "juego del numero secreto ") ;
    asignartextoElemento ("p" , `INDICA UN NUMERO DEL 1 AL ${numeromaximo} ` ) ;
    numerosecreto = geenerarnumerosereto () ;
    intentos = 1;
}

function reiniciarjuego () {
//limpiar caja 
limpiarcaja() ;
// iniciar mensajen de intervalos de numero
// generar numero aleatorio
// reinciar el numero de intentos 
condicionesiniciales () ;
//deshabilitar el boton de nuevo juego 
document.querySelector("#reinciar").setAttribute("disabled" , "true ") 
}

condicionesiniciales () ;
