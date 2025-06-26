const form = document.getElementById('formJogador');
const lista = document.getElementById('listaJogadores');

// Função que, ao clicar no botão de enviar, pega os valores
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const habilidades = document.querySelectorAll('input[name="Habilidades"]:checked');
    const habilidadesArray = Array.from(habilidades).map(h => h.value); // Corrigido para acessar o valor correto

    // Pega a posição do jogador
    const posicao = document.querySelector('input[name="Posição"]:checked'); // Corrigido o seletor
    const dataEstreia = document.getElementById('estreia').value;

    // Validação básica
    if (!nome || habilidadesArray.length === 0 || !posicao || !dataEstreia) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Cria o item do jogador
    const jogadorItem = document.createElement('li');
    jogadorItem.innerHTML = `
        Nome: ${nome},<br>
        Habilidades: ${habilidadesArray.join(', ')},<br>
        Posição: ${posicao.value},<br>
        Data de estreia: ${dataEstreia}
    `;
    lista.appendChild(jogadorItem);

    // Reseta o formulário
    form.reset();
});