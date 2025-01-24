let amigos = [];

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


