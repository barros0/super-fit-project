/*funcao que abre acordiao na caixa de ajuda */
function acordiao1() {
    let botaoacordiao = document.getElementById("acord1");
    let x = document.getElementById("botaoac1");
    let b = window.getComputedStyle(botaoacordiao).getPropertyValue('display');

    if (b == "none") {
        botaoacordiao.style.display = "block";
        x.innerHTML = "Como Jogar? <i class='fas fa-minus'></i>"

    } else {
        botaoacordiao.style.display = "none";
        x.innerHTML = "Como Jogar? <i class='fas fa-plus'></i>"
    }
}

function acordiao2() {
    let botaoacordiao = document.getElementById("acord2");
    let x = document.getElementById("botaoac2");
    let b = window.getComputedStyle(botaoacordiao).getPropertyValue('display');

    if (b == "none") {
        botaoacordiao.style.display = "block";
        x.innerHTML = "Regras <i class='fas fa-minus'></i>"
    } else {
        botaoacordiao.style.display = "none";
        x.innerHTML = "Regras <i class='fas fa-plus'></i>"
    }
}

function acordiao3() {
    let botaoacordiao = document.getElementById("acord3");
    let x = document.getElementById("botaoac3");
    let b = window.getComputedStyle(botaoacordiao).getPropertyValue('display');

    if (b == "none") {
        botaoacordiao.style.display = "block";
        x.innerHTML = "Prémios <i class='fas fa-minus'></i>"
    } else {
        botaoacordiao.style.display = "none";
        x.innerHTML = "Prémios <i class='fas fa-plus'></i>"
    }
}

/*funcao que abre modal box com ajuda */
function ajuda() {

    //buscar a modal box 
    let modal = document.getElementById("ajuda");
    // buscar o x para fechar a caixa
    let span = document.getElementById("fechar");

    //javascript devido a aplicar inline style nao le de forma correta o css, este codigo evita isso ao ir buscar
    //diretamente o estilo do elemento.
    let abreajuda = window.getComputedStyle(modal).getPropertyValue('display');

    if (abreajuda == "none") {

        modal.style.display = "block";

    }

    // fechar a caixa de modal ao clicar no x
    span.onclick = function () {
        modal.style.display = "none";
    }

}