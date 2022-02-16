function abre(){
    let x = document.getElementById("filter");

    if (x.style.display === "none") {
        x.style.display = "inline-flex";
      } else {
        x.style.display = "none";
      }
}

abre();