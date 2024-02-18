let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


function verificarIntento(){
console.log(numeroSecreto)
console.log(intentos)
let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
if(numeroDelUsuario == numeroSecreto){
asignarTextoElemento('p',`¡Has acertado el número! , en ${intentos}${(intentos == 1) ? ' vez' : ' veces'}`)
document.getElementById('reiniciar').removeAttribute('disabled');
} else {
if(numeroDelUsuario > numeroSecreto){
asignarTextoElemento('p',`No has acertado, el número secreto es MENOR, llevas ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`)
} else {
asignarTextoElemento('p',`No has acertado, el número secreto es MAYOR, llevas ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`)
}
intentos++;
limpiarOpcionUsuario()
}
}
function asignarTextoElemento(elemento,texto){
let titulo = document.querySelector(elemento);
titulo.innerHTML = texto;
}

function generarNumeroSecreto(){
let numeroGenerado = (Math.floor((Math.random()*numeroMaximo)))+1;
if(listaNumerosSorteados.length == numeroMaximo){
  asignarTextoElemento('p',`¡Ya has desbloqueado los ${numeroMaximo} números posibles!, muchas gracias por jugar.`)
} else{
  if(listaNumerosSorteados.includes(numeroGenerado)){
  return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      console.log(numeroGenerado)
      console.log(listaNumerosSorteados)
      return numeroGenerado; 
}
}
}

function limpiarOpcionUsuario(){
let valorCaja = document.querySelector('#valorUsuario')
valorCaja.value = '';
}

function reinciarJuego(){
asignarTextoElemento('h1','Juego del número misterioso');
asignarTextoElemento('p',`Ingresa un número entre el 1 y el ${numeroMaximo}`);  
intentos = 1
numeroSecreto = generarNumeroSecreto();
limpiarOpcionUsuario()
document.getElementById('reiniciar').disabled =true;
}
asignarTextoElemento('h1','Juego del número misterioso');
asignarTextoElemento('p',`Ingresa un número entre el 1 y el ${numeroMaximo}`);   