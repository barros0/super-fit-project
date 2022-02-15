/*botao seguinte */
function seguinte() {

  //buscar os elementos
  let textopt1 = document.getElementById("textopt1");
  let formpt1 = document.getElementById("formpt1");
  let textopt2 = document.getElementById("textopt2");
  let formpt2 = document.getElementById("formpt2");
  let textopt3 = document.getElementById("textopt3");
  let formpt3 = document.getElementById("formpt3");
  /*bolas indicadoras de passo */
  let bola1 = document.getElementById("bola1");
  let bola2 = document.getElementById("bola2");
  let bola3 = document.getElementById("bola3");

  //javascript devido a aplicar inline style nao le de forma correta o css, este codigo evita isso ao ir buscar
  //diretamente o estilo do elemento.
  let parte1 = window.getComputedStyle(formpt1).getPropertyValue('display');

  //NOME

  let nome = document.getElementById("nome"); //caixa input
  let ValorNome = document.getElementById("nome").value; //valor do input
  let iconeNome = document.getElementById("iconeNome"); // icone associado a caixa de input
  let erroNome = document.getElementById("erroNome"); // adicionar texto com erro no formulario

  //colocar o estilo dos elementos sem erros 
  nome.style.border = "1px solid #ccc";
  nome.style.color = "#7b7b7b";
  iconeNome.style.color = "#333";
  iconeNome.style.border = "1px solid #ccc";
  erroNome.innerHTML = "";

  //SOBRENOME

  let sobrenome = document.getElementById("sobrenome"); //caixa input
  let ValorSobrenome = document.getElementById("sobrenome").value; //valor do input
  let iconeSobrenome = document.getElementById("iconeSobrenome"); // icone associado a caixa de input
  let erroSobrenome = document.getElementById("erroSobrenome"); // adicionar texto com erro no formulario

  //colocar o estilo dos elementos sem erros 
  sobrenome.style.border = "1px solid #ccc";
  sobrenome.style.color = "#7b7b7b";
  iconeSobrenome.style.color = "#333";
  iconeSobrenome.style.border = "1px solid #ccc";
  erroSobrenome.innerHTML = "";

  //DATA DE NASCIMENTO

  let dataNas = document.getElementById("dataNas"); //caixa input
  let ValordataNas = document.getElementById("dataNas").value; //valor do input
  let iconeData = document.getElementById("iconeData"); // icone associado a caixa de input
  let erroData = document.getElementById("erroData"); // adicionar texto com erro no formulario

  let dataAtual = new Date().getFullYear(); //buscar a data atual
  let dataUtilizador = new Date(ValordataNas).getFullYear(); //buscar a data que o utilizador introduziu

  //colocar o estilo dos elementos sem erros 
  dataNas.style.border = "1px solid #ccc";
  dataNas.style.color = "#7b7b7b";
  iconeData.style.color = "#333";
  iconeData.style.border = "1px solid #ccc";
  erroData.innerHTML = "";

  //GÉNERO

  let genero = document.getElementById("genero"); //caixa input
  let ValorGenero = document.getElementById("genero").value; //valor do input
  let iconeGenero = document.getElementById("iconeGenero"); // icone associado a caixa de input
  let erroGenero = document.getElementById("erroGenero"); // adicionar texto com erro no formulario

  //colocar o estilo dos elementos sem erros 
  genero.style.border = "1px solid #ccc";
  genero.style.color = "#7b7b7b";
  iconeGenero.style.color = "#333";
  iconeGenero.style.border = "1px solid #ccc";
  erroGenero.innerHTML = "";

  //POLÍTICA DE PRIVACIDADE 

  let termos = document.getElementById("termos"); //caixa input
  let textotermos = document.getElementById("textotermos"); //texto da politica de privacidade
  let erroTermos = document.getElementById("erroTermos"); // adicionar texto com erro no formulario

  //colocar o estilo dos elementos sem erros 
  textotermos.style.color = "#000";
  erroTermos.innerHTML = "";

  //EMAIL

  let mail = document.getElementById("mail"); //caixa input
  let ValorMail = document.getElementById("mail").value; //valor do input
  let iconeMail = document.getElementById("iconeMail"); // icone associado a caixa de input
  let erroMail = document.getElementById("erroMail"); // adicionar texto com erro no formulario
  let validaMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex para validar se é email

  //colocar o estilo dos elementos sem erros 
  mail.style.border = "1px solid #ccc";
  mail.style.color = "#7b7b7b";
  iconeMail.style.color = "#333";
  iconeMail.style.border = "1px solid #ccc";
  erroMail.innerHTML = "";

  //TELEFONE

  let telefone = document.getElementById("telefone"); //caixa input
  let ValorTelefone = document.getElementById("telefone").value; //valor do input
  let iconeTelefone = document.getElementById("iconeTelefone"); // icone associado a caixa de input
  let erroTelefone = document.getElementById("erroTelefone"); // adicionar texto com erro no formulario
  let validaTelefone = /^\d{9}$/; //regex para validar se é email

  //colocar o estilo dos elementos sem erros 
  telefone.style.border = "1px solid #ccc";
  telefone.style.color = "#7b7b7b";
  iconeTelefone.style.color = "#333";
  iconeTelefone.style.border = "1px solid #ccc";
  erroTelefone.innerHTML = "";

  //PLANO

  let plano = document.getElementById("plano"); //caixa input
  let ValorPlano = document.getElementById("plano").value; //valor do input
  let iconePlanos = document.getElementById("iconePlanos"); // icone associado a caixa de input
  let erroPlanos = document.getElementById("erroPlanos"); // adicionar texto com erro no formulario

  //colocar o estilo dos elementos sem erros 
  plano.style.border = "1px solid #ccc";
  plano.style.color = "#7b7b7b";
  iconePlanos.style.color = "#333";
  iconePlanos.style.border = "1px solid #ccc";
  erroPlanos.innerHTML = "";

  //LOCALIZAÇÃO

  let localizacao = document.getElementById("localizacao"); //caixa input
  let ValorLocalizacao = document.getElementById("localizacao").value; //valor do input
  let iconeLocalizacao = document.getElementById("iconeLocalizacao"); // icone associado a caixa de input
  let erroLocalizacao = document.getElementById("erroLocalizacao"); // adicionar texto com erro no formulario

  //colocar o estilo dos elementos sem erros 
  localizacao.style.border = "1px solid #ccc";
  localizacao.style.color = "#7b7b7b";
  iconeLocalizacao.style.color = "#333";
  iconeLocalizacao.style.border = "1px solid #ccc";
  erroLocalizacao.innerHTML = "";

  //caso a primeira parte do formulario esteja ativa passar para a proxima fase
  if (parte1 === "block") {

    /* validar o campo do nome se vazio */
    if (ValorNome == "" || ValorNome == null) {

      /*mudar a cor do input e do texto para vermelho */
      nome.style.border = "1px solid red";
      nome.style.color = "red";

      /*mudar a cor do icone */
      iconeNome.style.color = "red";
      iconeNome.style.border = "1px solid red";

      /*inserir texto com erro */
      erroNome.innerHTML = "Introduza o seu Nome";

      return false;

      /* validar o campo do nome se com caracteres invalidos */
    } else if (ValorNome <= 0 || ValorNome >= 0) {

      /*mudar a cor do input e do texto para vermelho */
      nome.style.border = "1px solid red";
      nome.style.color = "red";
      /*mudar a cor do icone */
      iconeNome.style.color = "red";
      iconeNome.style.border = "1px solid red";
      /*inserir texto com erro */
      erroNome.innerHTML = "Introduza um Nome Válido";

      return false;

      /*validar o campo do sobrenome se vazio*/
    } else if (ValorSobrenome == "" || ValorSobrenome == null) {

      /*mudar a cor do input e do texto para vermelho */
      sobrenome.style.border = "1px solid red";
      sobrenome.style.color = "red";

      /*mudar a cor do icone */
      iconeSobrenome.style.color = "red";
      iconeSobrenome.style.border = "1px solid red";

      /*inserir texto com erro */
      erroSobrenome.innerHTML = "Introduza o seu Sobrenome";

      return false;

      /* validar o campo do sobrenome se com caracteres invalidos */
    } else if (ValorSobrenome <= 0 || ValorSobrenome >= 0) {

      /*mudar a cor do input e do texto para vermelho */
      sobrenome.style.border = "1px solid red";
      sobrenome.style.color = "red";

      /*mudar a cor do icone */
      iconeSobrenome.style.color = "red";
      iconeSobrenome.style.border = "1px solid red";

      /*inserir texto com erro */
      erroSobrenome.innerHTML = "Introduza um Sobrenome Válido";

      return false;

      /* validar o campo data de nascimento se vazio*/
    } else if (ValordataNas == "" || ValordataNas == null) {

      /*mudar a cor do input e do texto para vermelho */
      dataNas.style.border = "1px solid red";
      dataNas.style.color = "red";

      /*mudar a cor do icone */
      iconeData.style.color = "red";
      iconeData.style.border = "1px solid red";

      /*inserir texto com erro */
      erroData.innerHTML = "Introduza a sua Data de Nascimento";

      return false;

      /* validar o campo data de nascimento se menor de 18 anos*/
    } else if ((dataAtual - dataUtilizador) < 18) {

      /*mudar a cor do input e do texto para vermelho */
      dataNas.style.border = "1px solid red";
      dataNas.style.color = "red";

      /*mudar a cor do icone */
      iconeData.style.color = "red";
      iconeData.style.border = "1px solid red";

      /*inserir texto com erro */
      erroData.innerHTML = "Tem de ter pelo menos 18 anos para se inscrever";

      return false;

      /*validar o campo do género */
    } else if (ValorGenero == "" || ValorGenero == null) {

      /*mudar a cor do input e do texto para vermelho */
      genero.style.border = "1px solid red";
      genero.style.color = "red";

      /*mudar a cor do icone */
      iconeGenero.style.color = "red";
      iconeGenero.style.border = "1px solid red";

      /*inserir texto com erro */
      erroGenero.innerHTML = "Selecione o seu género";

      return false;

      /*validar o campo politica de privacidade */
    } else if (termos == "" || termos == null || termos.checked == false) {

      /*inserir texto com erro */
      erroTermos.innerHTML = "Precisa de concordar com os nossos Termos & Condições";

      return false;

    } else {

      textopt1.style.display = "none";
      formpt1.style.display = "none";
      textopt2.style.display = "block";
      formpt2.style.display = "block";
      textopt3.style.display = "none";
      formpt3.style.display = "none";
      /*bolas indicadoras de passo */
      bola1.classList.remove("atual");
      bola2.classList.add("atual");
      bola3.classList.remove("atual");

    }

    //caso a segunda parte do formulario esteja ativa passar para a proxima fase

  } else if (textopt2.style.display === "block") {

    /*validar o campo email se vazio*/
    if (ValorMail == "" || ValorMail == null) {

      /*mudar a cor do input e do texto para vermelho */
      mail.style.border = "1px solid red";
      mail.style.color = "red";

      /*mudar a cor do icone */
      iconeMail.style.color = "red";
      iconeMail.style.border = "1px solid red";

      /*inserir texto com erro */
      erroMail.innerHTML = "Introduza o seu email";

      return false;

      /*validar o campo email se conforme regex*/
    } else if (!(ValorMail.match(validaMail))) {

      /*mudar a cor do input e do texto para vermelho */
      mail.style.border = "1px solid red";
      mail.style.color = "red";

      /*mudar a cor do icone */
      iconeMail.style.color = "red";
      iconeMail.style.border = "1px solid red";

      /*inserir texto com erro */
      erroMail.innerHTML = "Introduza um endereço de email correto";

      return false;

      /*validar o campo telefone se vazio */
    } else if (ValorTelefone == "" || ValorTelefone == null) {

      /*mudar a cor do input e do texto para vermelho */
      telefone.style.border = "1px solid red";
      telefone.style.color = "red";

      /*mudar a cor do icone */
      iconeTelefone.style.color = "red";
      iconeTelefone.style.border = "1px solid red";

      /*inserir texto com erro */
      erroTelefone.innerHTML = "Introduza o seu telefone";

      return false;

      /*validar o campo telefone se conforme regex*/
    } else if (!(ValorTelefone.match(validaTelefone))) {

      /*mudar a cor do input e do texto para vermelho */
      telefone.style.border = "1px solid red";
      telefone.style.color = "red";

      /*mudar a cor do icone */
      iconeTelefone.style.color = "red";
      iconeTelefone.style.border = "1px solid red";

      /*inserir texto com erro */
      erroTelefone.innerHTML = "Introduza um telefone correto";

      return false;

    } else {

      textopt1.style.display = "none";
      formpt1.style.display = "none";
      textopt2.style.display = "none";
      formpt2.style.display = "none";
      textopt3.style.display = "block";
      formpt3.style.display = "block";
      /*bolas indicadoras de passo */
      bola1.classList.remove("atual");
      bola2.classList.remove("atual");
      bola3.classList.add("atual");

    }

    /* caso a terceira parte do formulario esteja ativa, validar os inputs*/
  } else if (textopt3.style.display === "block") {

    /*validar o campo planos se vazio*/
    if (ValorPlano == "" || ValorPlano == null || ValorPlano == "A") {

      /*mudar a cor do input e do texto para vermelho */
      plano.style.border = "1px solid red";
      plano.style.color = "red";

      /*mudar a cor do icone */
      iconePlanos.style.color = "red";
      iconePlanos.style.border = "1px solid red";

      /*inserir texto com erro */
      erroPlanos.innerHTML = "Selecione o plano pretendido";

      return false;

      /*validar o campo localizacao se vazio*/
    } else if (ValorLocalizacao == "" || ValorLocalizacao == null || ValorLocalizacao == "A") {

      /*mudar a cor do input e do texto para vermelho */
      localizacao.style.border = "1px solid red";
      localizacao.style.color = "red";

      /*mudar a cor do icone */
      iconeLocalizacao.style.color = "red";
      iconeLocalizacao.style.border = "1px solid red";

      /*inserir texto com erro */
      erroLocalizacao.innerHTML = "Selecione a localização pretendida";

      return false;

    }

  }

}

/*botao anterior */
function anterior() {

  let textopt1 = document.getElementById("textopt1");
  let formpt1 = document.getElementById("formpt1");
  let textopt2 = document.getElementById("textopt2");
  let formpt2 = document.getElementById("formpt2");
  let textopt3 = document.getElementById("textopt3");
  let formpt3 = document.getElementById("formpt3");
  let bola1 = document.getElementById("bola1");
  let bola2 = document.getElementById("bola2");
  let bola3 = document.getElementById("bola3");

  let parte2 = window.getComputedStyle(formpt2).getPropertyValue('display');

  if (parte2 === "none") {

    textopt1.style.display = "none";
    formpt1.style.display = "none";
    textopt2.style.display = "block";
    formpt2.style.display = "block";
    textopt3.style.display = "none";
    formpt3.style.display = "none";
    bola1.classList.remove("atual");
    bola2.classList.add("atual");
    bola3.classList.remove("atual");

  } else if (textopt1.style.display === "none") {

    textopt1.style.display = "block";
    formpt1.style.display = "block";
    textopt2.style.display = "none";
    formpt2.style.display = "none";
    textopt3.style.display = "none";
    formpt3.style.display = "none";
    bola1.classList.add("atual");
    bola2.classList.remove("atual");
    bola3.classList.remove("atual");

  }

}