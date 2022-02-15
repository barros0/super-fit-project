function press() {
    let a = document.getElementById("alert");
    let x = document.getElementsByClassName("alertbox");

    let b = window.getComputedStyle(a).getPropertyValue('display');

    if (b === "none") {

        a.style.display = "flex";
        x[0].style.display = "block";

    } else {
        a.style.display = "none";

    }
}

function noti() {
    let a = document.getElementById("noti");
    let x = document.getElementsByClassName("alertbox");

    let b = window.getComputedStyle(a).getPropertyValue('display');

    if (b === "none") {

        a.style.display = "flex";
        x[1].style.display = "block";

    } else {
        a.style.display = "none";

    }
}

function vermais() {
    let btn = document.getElementById("hidden-card");
    let x = window.getComputedStyle(btn).getPropertyValue('display');
    let butao = document.getElementById("more-btn");

    if (x === "none") {
        butao.innerHTML = "Ver menos...";
        btn.style.display = "flex";
    }
    else {
        butao.innerHTML = "Ver mais...";
        btn.style.display = "none";
    }
}

function proximos() {
    let proximos = document.getElementById("proximos-eventos");
    let caixa = document.getElementById("eventos");
    let btn = document.getElementById("more-btn");

    let btndir = document.getElementById("btn-right");
    let btnleft = document.getElementById("btn-left");

    let a = window.getComputedStyle(proximos).getPropertyPriority("display");
    let b = window.getComputedStyle(caixa).getPropertyPriority("display");
    let c = window.getComputedStyle(btndir).getPropertyValue('background-color');
    let d = window.getComputedStyle(btnleft).getPropertyValue('background-color');

    if (a === "none") {
        btn.style.display = "flex"
        proximos.style.display = "none"
        caixa.style.display = "flex"
    }
    else {
        btn.style.display = "none"
        proximos.style.display = "flex"
        caixa.style.display = "none"
    }

    if (c != "#FE2D2F" || d != "#FE2D2F") {
        btndir.style.backgroundColor = "#FE2D2F"
        btndir.style.color = "white"

        btnleft.style.backgroundColor = "white"
        btnleft.style.color = "black"

    }
}

function now() {
    let proximos = document.getElementById("proximos-eventos");
    let caixa = document.getElementById("eventos");
    let btn = document.getElementById("more-btn");

    let btndir = document.getElementById("btn-right");
    let btnleft = document.getElementById("btn-left");

    let a = window.getComputedStyle(proximos).getPropertyPriority("display");
    let b = window.getComputedStyle(caixa).getPropertyPriority("display");
    let c = window.getComputedStyle(btndir).getPropertyValue('background-color');
    let d = window.getComputedStyle(btnleft).getPropertyValue('background-color');

    if (a === "flex") {
        btn.style.display = "flex"
        proximos.style.display = "none"
        caixa.style.display = "flex"
    }
    else {
        btn.style.display = "flex"
        proximos.style.display = "none"
        caixa.style.display = "flex"
    }
    if (c != "#FE2D2F" || d != "#FE2D2F") {
        btndir.style.backgroundColor = "white"
        btndir.style.color = "black"

        btnleft.style.backgroundColor = "#FE2D2F"
        btnleft.style.color = "white"
    }
}


var countDownDate = new Date("March 5, 2022 15:15:00").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("datacountdown1").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("datacountdown1").innerHTML = "EXPIRED";
    }
}, 1000);