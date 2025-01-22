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
        limpiarCaja();
        console.log(amigos)
    }
}



