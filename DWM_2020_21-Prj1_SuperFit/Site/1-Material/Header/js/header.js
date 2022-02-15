function myFunction(x) {
  x.classList.toggle("change");

  var y = document.getElementById("submenu");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }

}

function empresa() {

  let x = document.getElementById("empresadrop");

  let d = window.getComputedStyle(x).getPropertyValue('display');

  if (d === "none") {

    x.style.display = "flex";

  } else {

    x.style.display = "none";

  }

}

function saude() {

  let x = document.getElementById("saudedrop");

  let d = window.getComputedStyle(x).getPropertyValue('display');

  if (d === "none") {

    x.style.display = "flex";

  } else {

    x.style.display = "none";

  }

}

function precos() {

  let x = document.getElementById("precosdrop");

  let d = window.getComputedStyle(x).getPropertyValue('display');

  if (d === "none") {

    x.style.display = "flex";

  } else {

    x.style.display = "none";

  }

}

function ajuda() {

  let x = document.getElementById("ajudadrop");

  let d = window.getComputedStyle(x).getPropertyValue('display');

  if (d === "none") {

    x.style.display = "flex";

  } else {

    x.style.display = "none";

  }
}