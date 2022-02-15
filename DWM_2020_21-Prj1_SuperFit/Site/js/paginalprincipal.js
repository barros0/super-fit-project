window.onscroll = function () {
    var top2 = window.scrollY;

    let buttonup = document.getElementById("goupbtn");


    if (top2 >= 100) {
        buttonup.style.display = "block"
    }
    else {
        buttonup.style.display = "none"
    }

    if (top2 >= 2615) {
        buttonup.style.position = "relative"
    }
    else {
        buttonup.style.position = "fixed"
    }
}

function press() {
    let a = document.getElementById("alert");
    let x = document.getElementsByClassName("alertbox");

    if (a.style.display === "none") {

        a.style.display = "flex";
        x[0].style.display = "block";

    } else {
        a.style.display = "none";

    }
}

press();


let photo = document.getElementById("photoslider");
let img = photo.getAttribute("src");
let imagens = ["img/index_img/pexels-pixabay-416809.jpg", "img/index_img/pexels-cottonbro-4761779.jpg", "img/index_img/pexels-leon-ardho-1552106.jpg"];

let tit = document.getElementById("tituloslide");
let titulos = ["Traz sempre um amigo em cada sessão de treino. Treinam os dois e só paga um!", "Tem acesso a todos os clubes e à APP Super Fit", "Treina todos os dias sem limites e sem fidelização"];

let txt = document.getElementById("textoslide");
let textos = ["Sabemos que há certos dias em que precisas de uma motivação extra!Na Super Fit não precisas de treinar sempre sozinho, por 4,99€/semana tens direito a trazer um amigo à tua escolha em cada sessão de treino.", "Para além de teres livre acesso a qualquer ginásio Super Fit,podes ainda aceder no conforto de tua casa à app da Super Fit, onde tens centenas de aulas e váriosexercícios à distância de um clique. Quando não vais aoginásio, o ginásio vai até ti!", "A Super Fit é a forma mais fácil de ir direto ao que interessa: o exercício!Se o único compromisso que queres ter é com o teu treino e os teus objetivos, este é o teu ginásio."];

let pre = document.getElementById("precos")
let preco = ["4,99<span>/€ semana</span>", "6,99<span>/€ semana</span>", "2,99<span>/€ semana</span>"]

let tamanhotit = titulos.lenght;
let tamanhoimg = imagens.length;
let posicao = 0;

function slide() {
    if (posicao >= tamanhoimg) {
        posicao = 0;
    }

    photo.setAttribute("src", imagens[posicao]);
    tit.innerHTML = titulos[posicao];
    txt.innerHTML = textos[posicao];
    pre.innerHTML = preco[posicao];

    posicao++;
}

window.onload = function dwa() {
    setInterval(slide, 6000);
}