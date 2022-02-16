function ginasio() {
    let x, localizacao, movel, email;

    x = document.getElementById("gym").value;
    localizacao = document.getElementById("loca");
    movel = document.getElementById("phone");
    email = document.getElementById("mail");

    if (x == 1) {
        localizacao.innerHTML = "LIS Shopping, Rua Dr João Soares / Porto Moniz, Bloco 1, 1º Piso, 2400-448 Leiria";
        movel.innerHTML = "244 912 371";
        email.innerHTML = "leiria@superfit.pt";
    }
    else if (x == 2) {
        localizacao.innerHTML = "Shopping Cidade do Porto,R.de Gonçalo Sampaio, 350, piso 2 4150 - 365 Porto";
        movel.innerHTML = "226 161 260";
        email.innerHTML = "porto@superfit.pt";
    }
    else {
        localizacao.innerHTML = "Rua Quinta do Paizinho, 1, Portela de Carnaxide,2790 - 236 Carnaxide";
        movel.innerHTML = "214 531 468";
        email.innerHTML = "lisboa@superfit.pt";
    }
}