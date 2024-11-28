document.addEventListener("DOMContentLoaded", function () {
    const botaoEnviar = document.getElementById("enviar-comentario");
    const campoComentario = document.getElementById("comentario");
    const listaComentarios = document.getElementById("lista-comentarios");
    const estrelas = document.querySelectorAll(".estrela");
    let avaliacaoSelecionada = 0;

    // Lógica para selecionar a avaliação por estrelas
    estrelas.forEach((estrela, index) => {
        estrela.addEventListener("click", function () {
            // Remove a seleção de todas as estrelas
            estrelas.forEach((e) => e.classList.remove("selecionada"));

            // Adiciona a seleção à estrela clicada e às anteriores
            for (let i = 0; i <= index; i++) {
                estrelas[i].classList.add("selecionada");
            }

            // Atualiza a avaliação selecionada
            avaliacaoSelecionada = index + 1; // Adiciona 1 porque os índices começam em 0
        });
    });

    // Enviar comentário
    botaoEnviar.addEventListener("click", function () {
        const textoComentario = campoComentario.value.trim();

        if (textoComentario === "") {
            alert("Por favor, escreva um comentário antes de enviar.");
            return;
        }

        // Criar o elemento para exibir o comentário
        const comentarioDiv = document.createElement("div");
        comentarioDiv.className = "comentario-item";

        // Adicionar texto do comentário e o botão de eliminar
        comentarioDiv.innerHTML = `
            <p><strong>Comentário:</strong> ${textoComentario}</p>
            ${
                avaliacaoSelecionada > 0
                    ? `<p><strong>Avaliação:</strong> ${"★".repeat(avaliacaoSelecionada)}</p>`
                    : "<p><strong>Avaliação:</strong> Não Avaliado</p>"
            }
            <button class="btn-eliminar">Eliminar</button>
        `;

        // Adicionar o comentário à lista
        listaComentarios.appendChild(comentarioDiv);

        // Limpar os campos
        campoComentario.value = "";
        estrelas.forEach((estrela) => estrela.classList.remove("selecionada"));
        avaliacaoSelecionada = 0;
    });

    // Lógica para eliminar comentários
    listaComentarios.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-eliminar")) {
            // Confirmar a eliminação
            const confirmar = confirm("Tens a certeza que queres eliminar este comentário?");
            if (confirmar) {
                e.target.parentElement.remove(); // Remove o comentário (elemento pai do botão)
            }
        }
    });
});
