let numeroSecretoUsuario = 0;
let intentos   = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;
console.log(numeroSecretoUsuario);

function asignarTextoElemento(elementoo, textoo){
    let elementoHTML = document.querySelector(elementoo);
    elementoHTML.innerHTML = textoo;
    return;
}

function verificarIntento(){
    let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    
    if (numeroDelUsuario === numeroSecretoUsuario){
        asignarTextoElemento(`p`, `Acertaste el numero!!!, que crack que no es adicto al crack, y lo hiciste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario se equivoco
        if(numeroDelUsuario > numeroSecretoUsuario) {
            asignarTextoElemento(`p`, `El numero secreto es menor, siguelo intentando`);
        } else{
            asignarTextoElemento(`p`, `El numero secreto es mayor, siguelo intentando`);
        }
        intentos++;
        limpiarcaja();
    }
    return;
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Ya sorteamos todos lo numeros
    if (listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento(`p`, `Ya se sortearon todos los numeros posibles `)
    } else {
            //Si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }
    
}

function limpiarcaja() {
   document.querySelector(`#valorUsuario`).value = "";

}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero del numero secreto!!!");
    asignarTextoElemento("p", `Coloca un número del 1 al ${numeroMax}`);
    numeroSecretoUsuario = generarNumeroSecreto();
    intentos = 1; 

}

function reiniciarJuego() {
//limpiar caja de texto
limpiarcaja();
//indicar mensaje de intgervalo de numeros
//Generar numero secreto
//deshabilitar boton reiniciar
    condicionesIniciales();
//inicializar intentos
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
   
}

condicionesIniciales();

