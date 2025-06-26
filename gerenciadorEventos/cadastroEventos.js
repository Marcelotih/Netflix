//Aq vamo pegar o form e a lista para exibir os filmes
const form = document.getElementById('formEvento')
const lista = document.getElementById('listarEventos')
//adiciona o evento de submit ao formulario
form.addEventListener("submit",function(evento){
evento.preventDefault();//evita recarregar pagina 
const titulo = document.getElementById("titulo").value;
const ano = document.getElementById('ano').value;
const genero = document.getElementById('genero').value;
//criar um novo item na lista de filmes
const novoFilme = document.createElement("li");
novoFilme.innerText = `${titulo} -- (${ano}) -- ${genero}`;
//adiciona o novo item na lista
lista.appendChild(novoFilme);
//limpa os campos do formulario 
form.reset();
});
