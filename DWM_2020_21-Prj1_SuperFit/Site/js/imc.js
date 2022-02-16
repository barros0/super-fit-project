function calcularIMC () {


    // dados select
    let sexo = document.getElementById("sexo").value;
    let atividade = document.getElementById("atividade").value;

    // dados inseridos
    let idade = parseInt(document.getElementById("idade").value);
    let altura = parseInt(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value); 

    // calculo
    let imc, resultado;

    imc = peso / (altura * altura / 10000); // fórmula: peso kg / (altura m * altura m)

    imc = imc.toFixed(2);

    if (imc < 18.5) {
        resultado = "magreza";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = "normal";
    } else if (imc >= 24.9 && imc <= 30) {
        resultado = "sobrepeso";
    } else if (imc > 30) {
        resultado = "obeso";
    }

    switch(resultado) {
        case "magreza": //alert("imc: " + imc + "\nEstá abaixo do peso");
        case "normal": //alert("imc: " + imc + "\nEstá com o peso ideal");
        case "sobrepeso":
            if (atividade == "moderada" || atividade == "intensa") {
                //alert("imc: " + imc + "\nTem um IMC alto, porém pratica atividade física.");
            } else {
                //alert("imc: " + imc + "\nTem sobrepeso");
            }
    }

    apresentarResultado();

}

function apresentarResultado() {

    let modal = document.getElementById("modal");

    let wtv = window.getComputedStyle(modal).getPropertyValue('display');

    if (wtv == "none") {

        modal.style.display = "block";

    }

    // fechar a caixa de modal ao clicar no x
    span.onclick = function () {

        modal.style.display = "none";

    }

}