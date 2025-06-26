document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formParticipante");
    const lista = document.getElementById("listaParticipantes");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Captura os valores
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const genero = document.getElementById("genero").value;
        const evento = document.getElementById("evento").value;
        
        // Validação básica
        if (!nome || !idade || !genero || !evento) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        
        // Cria o novo item da lista
        const novoItem = document.createElement("li");
        novoItem.textContent = `${nome} - ${idade} anos - ${genero} - ${evento}`;
        
        // Adiciona à lista
        lista.appendChild(novoItem);
        
        // Limpa o formulário
        form.reset();
    });
});