function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor do campo de pesquisa, converte para minúsculas e remove espaços em branco
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
  
    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa == "") {
      // Se estiver vazio, exibe uma mensagem de erro
      section.innerHTML = "<p>Nada foi encontrado. Não há palavra para uma busca!</p>";
      return 0; // Interrompe a função
    };
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada item do conjunto de dados
    for (let i of dados) {
      // Verifica se o título ou a descrição do item contém o termo de pesquisa (ignorando maiúsculas e minúsculas)
      if (i.titulo.toLowerCase().includes(campoPesquisa) || i.descricao.toLowerCase().includes(campoPesquisa)) {
        // Se encontrar uma correspondência, adiciona o HTML do resultado à string 'resultados'
        resultados += `
          <div class="item-resultado">
            </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      // Se não houver resultados, exibe uma mensagem informando
      resultados = "<p>Nada foi encontrado!</p>";
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}