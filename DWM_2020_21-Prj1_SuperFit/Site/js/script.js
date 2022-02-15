function tipotreino() {
    let x, facil, medio, dificil;

    x = document.getElementById("treino").value;
    facil = document.getElementById("treino-facil");
    medio = document.getElementById("treino-medio");
    dificil = document.getElementById("treino-dificil");

    console.log(facil.style.display);

    if (x == 1) {
        facil.style.display = 'block';
        medio.style.display = 'none';
        dificil.style.display = 'none';
    }
    else if (x == 2) {
        facil.style.display = 'none';
        medio.style.display = 'block';
        dificil.style.display = 'none';
    }
    else {
        facil.style.display = 'none';
        medio.style.display = 'none';
        dificil.style.display = 'block';
    }
}

