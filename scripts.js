let intentos = 6;
let diccionario = [
    'PERRO', 'CASAS', 'LUNAS', 'SALTA', 'REYES', 
    'PLUMA', 'LIBRO', 'FUEGO', 'CAMPO', 'MARZO', 
    'NIEVE', 'MONTE', 'PIEZA', 'LLAVE', 'BOLSA',
    'ROCAS', 'VELAS', 'CIELO'
  ];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];


const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';

const BOTON = document.getElementById('guess-button');
BOTON.addEventListener('click', Intentar);

function Intentar(){
    const INTENTO = LeerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    if (INTENTO === palabra ) {
        Terminar("<h1>GANASTE!😀</h1>")
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'lightgreen';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'lightyellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'lightyellow';
        }
        ROW.appendChild(SPAN)
    }
    intentos--
    if (intentos==0){
        Terminar("<h1>PERDISTE!😖</h1>")
    }
    GRID.appendChild(ROW)

}

function LeerIntento() {
    const valor = document.getElementById('guess-input').value.toUpperCase();
    return valor;
}
function Terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
