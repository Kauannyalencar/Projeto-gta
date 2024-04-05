// Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
const botao = document.querySelector(".btn-plataforma");
// Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

const elementoPlataforma = document.querySelector(".btn-plataforma .plataformas")
console.log(elementoPlataforma);
//  Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

// Passo 3 - pegar o clique do usuario no js
botao.addEventListener("click", () => {
    elementoPlataforma.classList.toggle("ativo")
})
    // Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça
    // Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
    // if (botaoEstaAberto) {
    //     elementoPlataforma.classList.remove("ativo")
    // }else {
    //     elementoPlataforma.classList.add("ativo")
    // }


// Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

