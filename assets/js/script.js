import { contatos, listarUsuarios, mostrarConversa } from "./contatos.js";

// listarUsuarios();
// contatos(0);  
// mostrarConversa(2, 2);

const elemento = {
  lista_contatos: document.querySelector(".container-mensagens"),
};

function criarContatos(srcFoto, nome, hora, previa, naolidas) {
  // criação dos elementos do card contatos
  const cardContato = document.createElement("div");
  const fotoContato = document.createElement("img");
  const nomeContato = document.createElement("p");
  const horaMsg = document.createElement("p");
  const previaMsg = document.createElement("p");
  const msgNaoLidas = document.createElement("p");

  //   define quais calsses CSS serão aplicadas para estilizar o css
  cardContato.className = "card-mensagem";
  fotoContato.className = "foto-contato";
  nomeContato.className = "nome-contato";
  horaMsg.className = "horario-mensagem";
  previaMsg.className = "previa-mensagem";
  msgNaoLidas.className = "bola-mensagem";

  //   preenche os dados que serão recebidos como parametro função
  fotoContato.src = srcFoto;
  nomeContato.innerText = nome;
  horaMsg.innerText = hora;
  previaMsg.innerText = previa;
  msgNaoLidas.innerText = naolidas;

//   cardContato.id = idContato;

  cardContato.append(fotoContato, nomeContato, horaMsg, previaMsg, msgNaoLidas);

  elemento.lista_contatos.append(cardContato);
}

contatos(0).forEach(element => {
    criarContatos(
        element.image,
        element.name,
        element.messages,
    )
});