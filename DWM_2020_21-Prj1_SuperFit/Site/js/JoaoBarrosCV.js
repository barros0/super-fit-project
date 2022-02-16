function myFunction(x) {
    x.classList.toggle("change");

    var y = document.getElementById("submenu");
    var a = document.getElementById("menuham")

    if (y.style.display === "flex") {
        y.style.display = "none";
        a.style.position = "inherit"
        a.style.right = "0"

    } else {
        y.style.display = "flex";
        a.style.position = "fixed"
        a.style.right = "10%"

    }
}


window.onscroll = function () {
    var top2 = window.scrollY;


    let buttonup = document.getElementById("goupbtn");

    if (top2 >= 100) {
        buttonup.style.display = "block"
    }
    else {
        buttonup.style.display = "none"
    }

    if (top2 >= 2160) {
        buttonup.style.position = "relative"
    }
    else {
        buttonup.style.position = "fixed"
    }
}