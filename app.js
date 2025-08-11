let amigos = [];


function adicionarAmigo() {

    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    
    if (nome == '') {
        alert('Por favor, insira um nome.');
        return;
    }
   
   amigos.push(nome);
   input.value = '';
   atualizarLista();
    
}

function sortearAmigo() {

let resultado = document.getElementById("resultado");

if (amigo.length == 0) {
    alert('Não existe nenhum nome disponivel na lista');
    return;
}

let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let nomeSorteado = amigos[indiceAleatorio];

resultado.innerHTML = 'O amigo secreto é: ' + nomeSorteado

}

function atualizarLista() {
  
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = '';

  for(x= 0; x < amigos.length; x++) {
    
    let item = document.createElement('li');
    item.textContent = amigos[x];
    lista.appendChild(item);
 
  }
}




