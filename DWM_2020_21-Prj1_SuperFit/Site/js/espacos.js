//correr os scripts no load da pagina
piscina();
crossfit();
yoga();
cardio();
pesos();
combate();


function piscina(){

//buscar a modal box 
let modal = document.getElementById("pop-piscina");

// buscar a caixa com o espaço 
let x = document.getElementById("piscina");

// buscar o x para fechar a caixa
let span = document.getElementById("close-piscina");

// quando clicar na caixa abrir a caixa de modal
x.onclick = function() {
  modal.style.display = "block";

}

// fechar a caixa de modal ao clicar no x
span.onclick = function() {
  modal.style.display = "none";
}


}

function crossfit(){

//buscar a modal box 
let modal = document.getElementById("pop-crossfit");

// buscar a caixa com o espaço 
let x = document.getElementById("crossfit");

// buscar o x para fechar a caixa
let span = document.getElementById("close-crossfit");

// quando clicar na caixa abrir a caixa de modal
x.onclick = function() {
  modal.style.display = "block";

}

// fechar a caixa de modal ao clicar no x
span.onclick = function() {
  modal.style.display = "none";
}



}

function yoga(){

    //buscar a modal box 
    let modal = document.getElementById("pop-yoga");
    
    // buscar a caixa com o espaço 
    let x = document.getElementById("yoga");
    
    // buscar o x para fechar a caixa
    let span = document.getElementById("close-yoga");
    
    // quando clicar na caixa abrir a caixa de modal
    x.onclick = function() {
      modal.style.display = "block";
    
    }
    
    // fechar a caixa de modal ao clicar no x
    span.onclick = function() {
      modal.style.display = "none";
    }

    
    }


function cardio(){

        //buscar a modal box 
        let modal = document.getElementById("pop-cardio");
        
        // buscar a caixa com o espaço 
        let x = document.getElementById("cardio");
        
        // buscar o x para fechar a caixa
        let span = document.getElementById("close-cardio");
        
        // quando clicar na caixa abrir a caixa de modal
        x.onclick = function() {
          modal.style.display = "block";
        
        }
        
        // fechar a caixa de modal ao clicar no x
        span.onclick = function() {
          modal.style.display = "none";
        }
        
}


function pesos(){

    //buscar a modal box 
    let modal = document.getElementById("pop-pesos");
    
    // buscar a caixa com o espaço 
    let x = document.getElementById("pesos");
    
    // buscar o x para fechar a caixa
    let span = document.getElementById("close-pesos");
    
    // quando clicar na caixa abrir a caixa de modal
    x.onclick = function() {
      modal.style.display = "block";
    
    }
    
    // fechar a caixa de modal ao clicar no x
    span.onclick = function() {
      modal.style.display = "none";
    }
    
}

function combate(){

    //buscar a modal box 
    let modal = document.getElementById("pop-combate");
    
    // buscar a caixa com o espaço 
    let x = document.getElementById("combate");
    
    // buscar o x para fechar a caixa
    let span = document.getElementById("close-combate");
    
    // quando clicar na caixa abrir a caixa de modal
    x.onclick = function() {
      modal.style.display = "block";
    
    }
    
    // fechar a caixa de modal ao clicar no x
    span.onclick = function() {
      modal.style.display = "none";
    }

}

/********************************SLIDERS */

/**Indexes das posicções dos sliders, tem de ser 1 diferente para cada um**/
let index=0;
let indexCrossfit=0;
let indexYoga=0;
let indexCardio=0;
let indexPesos=0;
let indexCombate=0;

//correr os scripts no load da pagina
SliderPiscina();
SliderCrossfit();
SliderYoga();
SliderCardio();
SliderPesos();
SliderCombate();


function SliderPiscina(){
 
  let x = document.getElementsByClassName("slider-piscina");

  for(let i=index; i<x.length; i++){

    x[i].style.display="none";

  }

  index ++;

  if(index > x.length-1){
    index = 0;
  }

  x[index].style.display="block";

  setTimeout(SliderPiscina, 3000);

}


function SliderCrossfit(){
 
  let x = document.getElementsByClassName("slider-crossfit");

  for(let i=indexCrossfit; i<x.length; i++){

    x[i].style.display="none";

  }

  indexCrossfit ++;

  if(indexCrossfit > x.length-1){
    indexCrossfit = 0;
  }

  x[indexCrossfit].style.display="block";

  setTimeout(SliderCrossfit, 3000);

}

function SliderYoga(){
 
  let x = document.getElementsByClassName("slider-yoga");

  for(let i=indexYoga; i<x.length; i++){

    x[i].style.display="none";

  }

  indexYoga ++;

  if(indexYoga > x.length-1){
    indexYoga = 0;
  }

  x[indexYoga].style.display="block";

  setTimeout(SliderYoga, 3000);

}

function SliderCardio(){
 
  let x = document.getElementsByClassName("slider-cardio");

  for(let i=indexCardio; i<x.length; i++){

    x[i].style.display="none";

  }

  indexCardio ++;

  if(indexCardio > x.length-1){
    indexCardio = 0;
  }

  x[indexCardio].style.display="block";

  setTimeout(SliderCardio, 3000);

}

function SliderPesos(){
 
  let x = document.getElementsByClassName("slider-pesos");

  for(let i=indexPesos; i<x.length; i++){

    x[i].style.display="none";

  }

  indexPesos ++;

  if(indexPesos > x.length-1){
    indexPesos = 0;
  }

  x[indexPesos].style.display="block";

  setTimeout(SliderPesos, 3000);

}

function SliderCombate(){
 
  let x = document.getElementsByClassName("slider-combate");

  for(let i=indexCombate; i<x.length; i++){

    x[i].style.display="none";

  }

  indexCombate ++;

  if(indexCombate > x.length-1){
    indexCombate = 0;
  }

  x[indexCombate].style.display="block";

  setTimeout(SliderCombate, 3000);

}
