// Seleciona todas as estrelas
const estrelas = document.querySelectorAll('.estrela');

// Adiciona a função para selecionar as estrelas
estrelas.forEach(estrela => {
    estrela.addEventListener('click', () => {
        // Remove a classe 'selecionada' de todas as estrelas
        estrelas.forEach(e => e.classList.remove('selecionada'));
        // Adiciona a classe 'selecionada' na estrela clicada
        estrela.classList.add('selecionada');
    });
});

// Função para enviar o comentário
function enviarComentario() {
    const comentario = document.getElementById('comentario').value;
    const estrelasSelecionadas = document.querySelectorAll('.estrela.selecionada');
    const avaliacao = estrelasSelecionadas.length;

    if (comentario && avaliacao > 0) {
        alert(`Comentário enviado: ${comentario}\nAvaliação: ${avaliacao} estrela(s)`);
    } else {
        alert('Por favor, escreva um comentário e escolha uma avaliação.');
    }
}
