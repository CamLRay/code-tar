$(document).ready(function() {
 $("#quiz").submit(function(event) {
   event.preventDefault();
   const questOne = $('input[name="question1"]:checked').val();
   const questTwo = $('input[name="question2"]:checked').val();
   const questThree = $('input[name="question3"]:checked').val();
   const questFour = $('input[name="question4"]:checked').val();
   const questFive = $('input[name="question5"]:checked').val();
   const questSix = $('input[name="question6"]:checked').val();
   
 });



});

function codeSelector(qOne, qTwo, qThree, qFour, qFive) {
  if(qTwo === "money") {
    cPlusPlus();
  } else if (qTwo === "legacy" && qFour === "mac" && qFive === "science") {
    java();
  } else if (qTwo === "legacy" && qFour === "mac" && qFive === "soul") {
    ruby();
  } else if (qTwo === "legacy" && qFour === "pc" & qFive === "science") {
    cSharp();
  } else if (qTwo === "legacy" && qOne === "warz") {
    python();
  } else if (qTwo === "legacy" && qFive === "rock") {
    rockstar();
  }
} 

function cPlusPlus() {}

function cSharp() {}

function java() {}

function javaScript() {}

function php() {}

function python() {}

function ruby() {}

function swift() {}

function rockstar() {}

//PC languages
//cSharp, cPlusPluis

//web languages
//php javascript

//