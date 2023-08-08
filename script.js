const contadorCronometro = document.querySelector('.Contagem');
const iniciar = document.querySelector('.iniciar');
const pausarCronometro = document.querySelector('.pause');

let i = 0
let timer;

iniciar.addEventListener('click', contador);
pausarCronometro.addEventListener('click', pause);
pausarCronometro.addEventListener('dblclick', resetar);


function contador(){
    timer = setInterval(()=>{
        contadorCronometro.innerText = i++;
    }, 300)
    iniciar.setAttribute('disabled', '');
}

function pause(){
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetar(){
    contadorCronometro.innerText = 0;
    i = 0;
}

