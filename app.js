function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Não há palavra para uma busca!</p>";
        return 0;
    };

    let resultados = "";

    for (let i of dados) {
        if (i.titulo.toLowerCase().includes(campoPesquisa) || i.descricao.toLowerCase().includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="${i.link}" target="_blank" class="link-com-imagem">
                    ${i.titulo}
                    <img class="imagem-hover" src="${i.imagem}" alt="Imagem de ${i.titulo}">
                </a></h2>
                <p class="descricao-meta">${i.descricao}</p>
            </div>
            `;
        };
    };

    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>";
    };

    section.innerHTML = resultados;
};