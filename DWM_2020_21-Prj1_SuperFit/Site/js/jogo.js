let controlaTempo; //variavel que controla o temporizador do jogo

/*função que inicia o jogo, ativada ao clicar no botao iniciar jogo*/
function iniciarJogo() {

    let x = document.getElementById("inativo");

    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");

    let falhas = document.getElementById("falhas");

    let restart = document.getElementById("restart");

    let ajuda = document.getElementsByClassName("ajuda");

    tempoTotal = 0; //variavel que conta os segundos passados a partir do momento que o jogo começa

    //apresentar botao de recomeçar assim que o jogo começa
    restart.style.display = "block";

    //resetar tentativas falhadas
    falhas.innerHTML = "0";

    //resetar os cronometros
    minutos.innerHTML = "00";
    segundos.innerHTML = "00";

    //retirar caso existam classes indicadoras das cartas antes do jogo começar/recomeçar 

    let cartas = document.getElementsByClassName("frente-carta");
    let frentecarta = document.getElementsByClassName("frente-carta");
    let carta = document.getElementsByClassName("carta");

    for (let i = 0; i < cartas.length; i++) {

        //retirar as classes que definem qual carta é qual
        cartas[i].classList.remove("carta1");
        cartas[i].classList.remove("carta2");
        cartas[i].classList.remove("carta3");
        cartas[i].classList.remove("carta4");

        //remover efeitos de carta virada e ganha
        carta[i].classList.remove("carta-ganha");
        carta[i].classList.remove("cartarodada");

        //retirar a classe de carta clicada que aumenta o tamanho da carta
        frentecarta[i].classList.remove("carta-clicada");

    }

    gerarCartas(); //gerar as cartas que posteriormente as ira colocar no jogo

    x.style.display = "none"; //retira a máscara e botoes de comecar o jogo

    ajuda[0].style.display = "flex"; //mostrar botão de ajuda

    clearInterval(controlaTempo); // parar o contador de tempo

    controlaTempo = setInterval(contadorTempo, 1000); //começar o contador de tempo ao atualizar a funcao contadorTempo de 1 em 1 seg

}

/*funcao do temporizador */
function contadorTempo() {

    //console.log(tempoTotal);

    tempoTotal++; //tempo total em segundos, que incrementa por 1 a cada segundo que passa

    /*se for menos do que 10 segundo acresenta um 0 atrás do numero por ex 09 */
    if ((tempoTotal % 60) < 10) {

        segundos.innerHTML = "0" + (tempoTotal % 60);

        //se for maior do que 10 apresentar normalmente
    } else {

        segundos.innerHTML = (tempoTotal % 60);

    }

    /*se for menos do que 1 minuto acresenta dois 0 atrás dos segundos ex 00:14 */
    if ((tempoTotal / 60) < 1) {

        minutos.innerHTML = "00";

        //se for maior do que 1 e menor que 10 apresentar com um zero atras ex 01:11
    } else if ((tempoTotal / 60) < 10) {

        minutos.innerHTML = "0" + parseInt(tempoTotal / 60); //parseInt para converter para numero inteiro e assim "arredondar"

        //se for maior do que 10 apresentar normalmente
    } else {

        minutos.innerHTML = parseInt(tempoTotal / 60); //parseInt para converter para numero inteiro e assim "arredondar"

    }

    return tempoTotal;

}

/*funcao que gera as cartas, que depois sao enviadas para colocarCartas*/
function gerarCartas() {

    let cartas = document.getElementsByClassName("frente-carta");

    //vetor que guarda as sources das cartas 2x para distribuir aleatoriamente
    let TodasCartas = ["img/memoria/cartas/carta1.png", "img/memoria/cartas/carta2.png", "img/memoria/cartas/carta3.png", "img/memoria/cartas/carta4.png", "img/memoria/cartas/carta1.png", "img/memoria/cartas/carta2.png", "img/memoria/cartas/carta3.png", "img/memoria/cartas/carta4.png"];

    //colocar sources num vetor e enviar para a funcao colocarCartas que as vai distribuir aleatoriamente
    let cartasdesordenadas = colocarCartas(TodasCartas);

    for (let i = 0; i < TodasCartas.length; i++) {

        //adicionar a source as cartas
        cartas[i].setAttribute("src", cartasdesordenadas[i]);

        //adicionar uma classe com o nome da carta conforme a carta

        if (cartas[i].getAttribute("src") == "img/memoria/cartas/carta1.png") {

            cartas[i].classList.add("carta1");

        } else if (cartas[i].getAttribute("src") == "img/memoria/cartas/carta2.png") {

            cartas[i].classList.add("carta2");

        } else if (cartas[i].getAttribute("src") == "img/memoria/cartas/carta3.png") {

            cartas[i].classList.add("carta3");

        } else {

            cartas[i].classList.add("carta4");

        }

    }

}

/*funcao que coloca as cartas aleatoriamente */
function colocarCartas(TodasCartas) {

    let tamanho = TodasCartas.length; //buscar o tamanho do vetor

    //enquanto o tamanho nao for 0, buscar um valor aleatorio que sera definido a carta
    while (0 !== tamanho) {

        let ValorRandom = Math.floor(Math.random() * tamanho);
        tamanho -= 1;

        // Substituir posicoes no vetor
        let elemento = TodasCartas[tamanho];
        TodasCartas[tamanho] = TodasCartas[ValorRandom];
        TodasCartas[ValorRandom] = elemento;

    }

    jogo(); //depois das cartas geradas e colocadas, passar para a funcao do jogo que adiciona classes e verifica

    return TodasCartas;
}

/*funcao que executa o jogo*/
function jogo() {

    let carta = document.getElementsByClassName("carta");
    let frentecarta = document.getElementsByClassName("frente-carta");
    let falhas = document.getElementById("falhas");

    tempoTotal = contadorTempo(); // vai buscar o tempo total ocorrido e mostra no final do jogo

    let contaTent = 0; //contador de quantas cartas estao clicadas 
    let vetorcartasclicadas = []; //vetor que vai guardar as cartas que levaram clique
    let tentFalhadas = 0; //contador de tentativas falhadas
    let tentCertas = 0; //contador de tentativas erradas

    for (let i = 0; i < carta.length; i++) {

        //adiciona evento de clique as cartas e verifica qual das cartas foi clicada e adiciona as classes corretas 
        (function () {

            carta[i].onclick = function () {

                //aqui está o que acontece quando uma carta é clicada
                //console.log("Carta Nº " + i);

                if (carta[i].classList.contains("cartarodada")) {

                    //este if previne o utilizador de clicar 2x na mesma carta e assim fazer um par sem ser par
                    //console.log("Esta carta já foi clicada");

                } else {

                    carta[i].classList.add('cartarodada'); //adicionar efeito de roda à carta 
                    frentecarta[i].classList.add('carta-clicada'); //adicionar efeito de clique a carta

                    contaTent++; //aumenta o contador de cartas clicadas por um

                    //console.log("Nº Cartas Clicadas" + contaTent);

                    let classeCarta = frentecarta[i].getAttribute("class");
                    vetorcartasclicadas.push(classeCarta); //adicionar a classe da carta clicada ao vetor

                }

                //console.log(vetorcartasclicadas);
                //console.log("Elemento na última posição " + vetorcartasclicadas[vetorcartasclicadas.length - 1]);
                //console.log("Elemento na penúltima posição " + vetorcartasclicadas[(vetorcartasclicadas.length - 2)]);
                //console.log("quantidade de cartas clicadas" + contaTent);

                //apos ter selecionado duas cartas, verificar se as mesmas sao diferentes, 
                //verificando as ultimas 2 posicoes do vetor

                //se o contador de tentativas for 2 ou seja 2 cartas forem clicadas
                if (contaTent == 1) {

                    // se alguma das ultimas 2 cartas selecionadas for undefined ou seja nao foi selecionada pelo utilizador
                    if (vetorcartasclicadas[(vetorcartasclicadas.length - 1)] == undefined || vetorcartasclicadas[(vetorcartasclicadas.length - 2)] == undefined) {

                        contaTent = 0; //voltar a colocar o contador de cliques a 0, para permitir voltar a jogar

                        //se as ultimas 2 cartas selecionadas forem iguais ou seja match
                    } else if (vetorcartasclicadas[(vetorcartasclicadas.length - 1)] == vetorcartasclicadas[(vetorcartasclicadas.length - 2)]) {

                        //aumenta o contador de tentativas corretas
                        tentCertas++;

                        //console.log("x: " + vetorcartasclicadas[(vetorcartasclicadas.length - 1)]);

                        //como a carta para estar rodada foi clicada e so pode ter um maximo de 2, 
                        //procura os elementos com essa classe e muda 

                        let cartarodada = document.getElementsByClassName("cartarodada");
                        let cartaclicada = document.getElementsByClassName("frente-carta");

                        //percorrer as cartas e na que tenham a classe cartarodada, ou seja estejam viradas
                        for (let z = 0; z < cartarodada.length; z++) {

                            for (let f = 0; f < cartaclicada.length; f++) {

                                //adiciona as classes necessarias
                                cartarodada[z].classList.add('carta-ganha');
                                cartarodada[z].classList.add('cartarodada');
                                cartaclicada[f].classList.remove('carta-clicada');

                            }

                        }

                        //console.log("É match");

                        contaTent = 0; //voltar a colocar o contador de cliques a 0, para permitir voltar a jogar

                        //se as cartas selecionadas forem diferentes
                    } else {

                        //acrescenta as tentativas falhadas e mostra
                        tentFalhadas++;

                        falhas.innerHTML = tentFalhadas; //mostrar as tentativas falhadas

                        //console.log("Não é match");

                        for (let j = 0; j < carta.length; j++) {

                            //se as cartas estiverem ja "ganhas"
                            if (carta[j].classList.contains("carta-ganha")) {

                                carta[j].classList.add('cartarodada'); //adicionar efeito de roda às cartas que ja estao "ganhas" outra vez

                                //se nao estiverem "ganhas"
                            } else {

                                carta[j].classList.remove('cartarodada'); //retirar efeito de roda às cartas todas nao ganhas
                                frentecarta[j].classList.remove('carta-clicada'); //aretirar efeito de clique às cartas todas nao ganhas
                            }

                        }

                        //adicionar a mesma efeito de carta rodada e clicada na atual
                        carta[i].classList.add('cartarodada');
                        frentecarta[i].classList.add('carta-clicada');

                        contaTent = 0; //voltar a colocar o contador de cliques a 0, para permitir voltar a jogar

                    }

                }

                //assim que o utilizador tem 4 tentativas certas o jogo termina, pois todas as cartas tem par
                if (tentCertas == 4) {

                    clearInterval(controlaTempo); // parar o contador de tempo 

                    let tentativasfinaljogo = document.getElementById("tentativasfinaljogo");
                    let minutosfinaljogo = document.getElementById("minutosfinaljogo");
                    let segundofinaljogo = document.getElementById("segundofinaljogo");

                    tentativasfinaljogo.innerHTML = tentFalhadas;

                    minutosfinaljogo.innerHTML = "00";
                    segundofinaljogo.innerHTML = "00";

                    //mostrar no popup final quanto tempo foi demorado a terminar o jogo

                    /*se for menos do que 1 minuto mostrar so os segundos*/
                    if ((tempoTotal / 60) < 1) {

                        minutosfinaljogo.innerHTML = "";
                        segundofinaljogo.innerHTML = (tempoTotal % 60);

                        //se for igual a 1 minuto apresentar "minuto"
                    } else if ((tempoTotal / 60) == 1) {

                        //se os segundos estiverem a 0
                        if ((tempoTotal % 60) == 0) {

                            minutosfinaljogo.innerHTML = parseInt(tempoTotal / 60) + " minuto";  //parseInt para converter para numero inteiro e assim "arredondar"

                            //se os segundos forem superiores a 0
                        } else {

                            minutosfinaljogo.innerHTML = parseInt(tempoTotal / 60) + " minuto e ";  //parseInt para converter para numero inteiro e assim "arredondar"
                            segundofinaljogo.innerHTML = (tempoTotal % 60);
                        }

                        //se for maior do que 1 apresentar "minutos"
                    } else {

                        //se os segundos estiverem a 0
                        if ((tempoTotal % 60) == 0) {

                            minutosfinaljogo.innerHTML = parseInt(tempoTotal / 60) + " minutos";  //parseInt para converter para numero inteiro e assim "arredondar"

                            //se os segundos forem superiores a 0
                        } else {

                            minutosfinaljogo.innerHTML = parseInt(tempoTotal / 60) + " minutos e ";  //parseInt para converter para numero inteiro e assim "arredondar"
                            segundofinaljogo.innerHTML = (tempoTotal % 60);
                        }

                    }

                    //buscar a modal box 
                    let modal = document.getElementById("fimjogo");

                    // buscar o x para fechar a caixa
                    let span = document.getElementById("fechar-fim");

                    //javascript devido a aplicar inline style nao le de forma correta o css, este codigo evita isso ao ir buscar
                    //diretamente o estilo do elemento.
                    let abrefim = window.getComputedStyle(modal).getPropertyValue('display');

                    if (abrefim == "none") {

                        modal.style.display = "block";

                    }

                    // fechar a caixa de modal ao clicar no x
                    span.onclick = function () {

                        modal.style.display = "none";

                    }

                }

            }

        })(i);

    }

}