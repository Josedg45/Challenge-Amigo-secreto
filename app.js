let amigos = [];
let contador = 0;

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    
    if (nombreAmigo == ''){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreAmigo);
        actualizarAmigos()
        limpiarCaja();
    }
}

function actualizarAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        let nombreAmigo = amigos[i];
        let nuevoLi = document.createElement('li');
        nuevoLi.innerHTML = nombreAmigo;
        listaAmigos.appendChild(nuevoLi);
    }
}

function sortearAmigo() {
    if (amigos =='' ) {
        alert('La lista esta vacia');
    }

    if (contador ==0 ) {
        let numeroSorteado = Math.floor(Math.random()*amigos.length);
        let sorteoAmigos = document.querySelector('#resultado');
        sorteoAmigos.innerHTML = amigos[numeroSorteado];
    }
    

}


