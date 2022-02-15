function verifica() {
    //NOME
  
    let nome = document.getElementById("nome-box"); //caixa input
    let ValorNome = document.getElementById("nome").value; //valor do input
    let textoNome = document.getElementById("nome");
    let erroNome = document.getElementById("erroNome"); // adicionar texto com erro no formulario
    let labelNome = document.getElementById("labelNome");
  
    //colocar o estilo dos elementos sem erros 
    nome.style.borderBottom = "2px solid #adadad";
    textoNome.style.color = "#7b7b7b";
    erroNome.innerHTML = "";
    labelNome.style.color = "#bdbcbc";

    //SOBRENOME
  
    let sobrenome = document.getElementById("sobrenome-box"); //caixa input
    let ValorSobrenome = document.getElementById("sobrenome").value; //valor do input
    let erroSobrenome = document.getElementById("erroSobrenome"); // adicionar texto com erro no formulario
  
    //colocar o estilo dos elementos sem erros 
    sobrenome.style.borderBottom = "2px solid #adadad";
    sobrenome.style.color = "#7b7b7b";
    erroSobrenome.innerHTML = "";
  
    //POLÍTICA DE PRIVACIDADE 
  
    let termos = document.getElementById("termos"); //caixa input
    let textotermos = document.getElementById("textotermos"); //texto da politica de privacidade
    let erroTermos = document.getElementById("erroTermos"); // adicionar texto com erro no formulario
  
    //colocar o estilo dos elementos sem erros 
    textotermos.style.color = "#000";
    erroTermos.innerHTML = "";
  
    //EMAIL
  
    let mail = document.getElementById("email-box"); //caixa input
    let ValorMail = document.getElementById("mail").value; //valor do input
    let erroMail = document.getElementById("erroMail"); // adicionar texto com erro no formulario
    let validaMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex para validar se é email
  
    //colocar o estilo dos elementos sem erros 
    mail.style.borderBottom = "2px solid #adadad";
    mail.style.color = "#7b7b7b";
    erroMail.innerHTML = "";
  
    //TELEFONE
  
    let telefone = document.getElementById("telefone-box"); //caixa input
    let ValorTelefone = document.getElementById("telefone").value; //valor do input
    let erroTelefone = document.getElementById("erroTelefone"); // adicionar texto com erro no formulario
    let validaTelefone = /^\d{9}$/; //regex para validar se é email
  
    //colocar o estilo dos elementos sem erros 
    telefone.style.borderBottom = "2px solid #adadad";
    telefone.style.color = "#7b7b7b";
    erroTelefone.innerHTML = "";
  
    //REGIOES
  
    let regioes = document.getElementById("regioes-box"); //caixa input
    let ValorRegioes = document.getElementById("regioes").value; //valor do input
    let erroRegioes = document.getElementById("erroRegioes"); // adicionar texto com erro no formulario
  
    //colocar o estilo dos elementos sem erros 
    regioes.style.borderBottom = "2px solid #adadad";
    regioes.style.color = "#7b7b7b";
    erroRegioes.innerHTML = "";
  
      /* validar o campo do nome se vazio */
      if (ValorNome == "" || ValorNome == null) {
  
        /*mudar a cor do input e do texto para vermelho */
        nome.style.borderBottom = "2px solid red";
        textoNome.style.color = "red";

        labelNome.style.color = "red";

        /*inserir texto com erro */
        erroNome.innerHTML = "Introduza o seu Nome";

        return false;
  
        /* validar o campo do nome se com caracteres invalidos */
      } else if (ValorNome <= 0 || ValorNome >= 0) {

        /*mudar a cor do input e do texto para vermelho */
        nome.style.borderBottom = "2px solid red";
        textoNome.style.color = "red";

        labelNome.style.color = "red";
        /*inserir texto com erro */
        erroNome.innerHTML = "Introduza um Nome Válido";

        return false;
  
        /*validar o campo do sobrenome se vazio*/
      } else if (ValorSobrenome == "" || ValorSobrenome == null) {
  
        /*mudar a cor do input e do texto para vermelho */
        sobrenome.style.borderBottom = "2px solid red";
        sobrenome.style.color = "red";
  
        /*inserir texto com erro */
        erroSobrenome.innerHTML = "Introduza o seu Sobrenome";

        return false;
  
        /* validar o campo do sobrenome se com caracteres invalidos */
      } else if (ValorSobrenome <= 0 || ValorSobrenome >= 0) {
  
        /*mudar a cor do input e do texto para vermelho */
        sobrenome.style.borderBottom = "2px solid red";
        sobrenome.style.color = "red";
  
        /*inserir texto com erro */
        erroSobrenome.innerHTML = "Introduza um Sobrenome Válido";

        return false;
  
        /*validar o campo email se vazio*/
      } else if (ValorMail == "" || ValorMail == null) {

        /*mudar a cor do input e do texto para vermelho */
        mail.style.borderBottom = "2px solid red";
        mail.style.color = "red";
  
        /*inserir texto com erro */
        erroMail.innerHTML = "Introduza o seu email";

        return false;
  
        /*validar o campo email se conforme regex*/
      } else if (!(ValorMail.match(validaMail))) {
  
        /*mudar a cor do input e do texto para vermelho */
        mail.style.borderBottom = "2px solid red";
        mail.style.color = "red";
  
        /*inserir texto com erro */
        erroMail.innerHTML = "Introduza um endereço de email correto";

        return false;
  
        /*validar o campo telefone se vazio */
      } else if (ValorTelefone == "" || ValorTelefone == null) {
  
        /*mudar a cor do input e do texto para vermelho */
        telefone.style.borderBottom = "2px solid red";
        telefone.style.color = "red";
  
        /*inserir texto com erro */
        erroTelefone.innerHTML = "Introduza o seu telefone";

        return false;
  
        /*validar o campo telefone se conforme regex*/
      } else if (!(ValorTelefone.match(validaTelefone))) {
  
        /*mudar a cor do input e do texto para vermelho */
        telefone.style.borderBottom = "2px solid red";
        telefone.style.color = "red";
  
        /*inserir texto com erro */
        erroTelefone.innerHTML = "Introduza um telefone correto";  

        return false;
        
      } else if (ValorRegioes == "" || ValorRegioes == null) {
  
        /*mudar a cor do input e do texto para vermelho */
        regioes.style.borderBottom = "2px solid red";
        regioes.style.color = "red";
  
        /*inserir texto com erro */
        erroRegioes.innerHTML = "Introduza uma Região";

        return false;

        /* validar o campo do sobrenome se com caracteres invalidos */
      } else if (ValorRegioes <= 0 || ValorRegioes >= 0) {
  
        /*mudar a cor do input e do texto para vermelho */
        regioes.style.borderBottom = "2px solid red";
        regioes.style.color = "red";
  
        /*inserir texto com erro */
        erroRegioes.innerHTML = "Introduza uma Região Válida";

        return false;
    
        /*validar o campo politica de privacidade */
      } else if (termos == "" || termos == null || termos.checked == false) {
  
        /*inserir texto com erro */
        erroTermos.innerHTML = "Precisa de concordar com os nossos Termos & Condições";

        return false;

      }
  
  }
  