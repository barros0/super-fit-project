function myFunction(x) {
  x.classList.toggle("change");

  var y = document.getElementById("submenu");
  if (y.style.display === "flex") {
    y.style.display = "none";
  } else {
    y.style.display = "flex";
  }

}

