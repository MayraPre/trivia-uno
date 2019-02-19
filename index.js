function myFunction() {
  let text;
  let person = prompt("Como te llamas Marinerx?", "Bob Esponja");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hola " + person + "! Estas listx? Presiona continuar"; 
  }
  document.getElementById("demo").innerHTML = txt;
   document.getElementById("saludo").style.display = "none"
   document.getElementById("siguiente1").style.display = "blok"
};



function changeVisibility() {
  document.getElementById("saludo").style.display = "none"
  document.getElementById("siguiente1").style.display = "none"
  document.getElementById("buena suerte").style.display = "block";
};

function changeVisibility1() {
   document.getElementById("buena suerte").style.display = "none"
  document.getElementById("quizFondodeBikini").style.display = "block"
  document.getElementById("results").style.display = "none";
};

function changeVisibility2() {
   document.getElementById("buena suerte").style.display = "none"
  document.getElementById("CrustáceoKaskarudo").style.display = "block"
  document.getElementById("results").style.display = "none";
 };

function changeVisibility3 () {
  document.getElementById("quizFondodeBikini").style.display = "none"
  document.getElementById("results").style.display = "block";
};

function changeVisibility4 () {
  document.getElementById("CrustáceoKaskarudo").style.display = "none"
  document.getElementById("results").style.display = "block";
};

function changeVisibility5() {
  document.getElementById("saludo").style.display = "block"
  document.getElementById("buena suerte").style.display = "none"
  document.getElementById("buena suerte").style.display = "none";
  document.getElementById("results").style.display = "none"
};


function countAnswers () {
    let amountCorrect = 0;          
    for(let i = 1; i <= 3; i++) {
        const radios = document.getElementsByName('questions'+i);
        for(let j = 0; j < radios.length; j++) {
            let radio = radios[j];
            if(radio.value == "correct" && radio.checked) {
                amountCorrect++;
            }
        }
    }
    return amountCorrect;
    
}
const resultsBtn = document.getElementById('results-btn');
resultsBtn.addEventListener('click', () => {
  CrustáceoKaskarudo.style.display = "none";
    results.style.display = "block";
    const amountCorrect = countAnswers();
    document.getElementById('right-answers').innerHTML = 'Tienes ' + amountCorrect + ' respuesta(s) correcta(s).';
    if (amountCorrect === 3) {
        document.getElementById("winner-text").innerHTML = 'Felicidades!';
    } else {
        document.getElementById("loser-text").innerHTML = 'Lamentable cenarás en el Balde de carnanda';
    }
    
})