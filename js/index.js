// DOM

const domMinutes    = document.getElementById('minutes');
const domSeconds    = document.getElementById('seconds');
const domTens       = document.getElementById('tens');

const buttonStart   = document.getElementById('button-start')
const buttonStop    = document.getElementById('button-stop')
const buttonReset   = document.getElementById('button-reset')

// Variables

let minutes = '00';
let seconds = '00';
let tens    = '00';

let interval;

// Funciones

function start() {
    // Paro intervalo para que no se vaya sumando si se da click nuevamente
    clearInterval(interval);
    // Cada 10 milisegundos agregar una decima y actualizar DOM
    interval = setInterval(() => {
        addTens();
        update();
    }, 10);
}

function stopT() {
    // Paro intervalo
    clearInterval(interval);
}

function reset() {
    // Paro intervalo
    clearInterval(interval);
    // Reseteo valores
    minutes = '00';
    seconds = '00';
    tens    = '00';
    // Actualizo DOM
    update();
}

function addTens() {
    // Sumo una decima
    tens++;
    // Si es menor a 10 agregar un cero a la izquierda por aspecto visual
    tens < 10 && (tens = '0' + tens);
    // Si llega a 100 decimas, resetear tens y agregar un segundo
    tens > 99 && (tens = '00', addSeconds());
}

function addSeconds() {
    // Sumo un segundo
    seconds++;
    // Si es menor a 10 agregar un cero a la izquierda por aspecto visual
    seconds < 10 && (seconds = '0' + seconds);
    // Si llega a 60 segundos, resetear segundos y agregar un minuto
    seconds > 59 && (seconds = '00', addMinutes());
}

function addMinutes() {
    // Sumar un minuto
    minutes++;
    // Si es menor a 10 agregar un cero a la izquierda por aspecto visual
    minutes < 10 && (minutes = '0' + minutes);
}

// Actualizar DOM con valores
function update() {
    domMinutes.innerText    = minutes;
    domSeconds.innerText    = seconds;
    domTens.innerText       = tens;
}

// Eventos

buttonStart.onclick = () => {start()}
buttonStop.onclick  = () => {stopT()}
buttonReset.onclick = () => {reset()}

// Ejecutar