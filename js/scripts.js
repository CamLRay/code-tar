// Business Logic
function codeSelector(qOne, qTwo, qThree, qFour, qFive) {
  if(qTwo === "money" && qOne !== "warz") {
    cPlusPlus();
  } else if(qTwo === "money" && qOne === "warz") {
    php();
  } else if (qTwo === "legacy" && qFour === "mac" && qFive === "science") {
    ruby
  } else if (qTwo === "legacy" && qFour === "mac" && qFive === "soul") {
    swift();
  } else if (qTwo === "legacy" && qFour === "pc" & qFive === "science") {
    cSharp();
  } else if (qTwo === "legacy" && qOne === "warz") {
    python();
  } else if (qTwo === "legacy" && qFive === "rock") {
    rockstar();
  } else if (qTwo === "legacy" && qThree === "micro") {
    javaScript();
  } else if (qTwo === "legacy" && qFive === "art") {
    piet();
  } else {
    java();
  }
} 

function fighter(qSix) {
  let fighter;
  if (qSix === "tech") {
    fighter = $(".fighter-image").attr('src', 'img/tech-boss.png');
  } else if (qSix === "bread") {
    fighter = $(".fighter-image").attr('src', 'img/bread-boss.png');
  } else if (qSix === "fluff") {
    fighter = $(".fighter-image").attr('src', 'img/fluff-boss.png');
  } else {
    fighter = $(".fighter-image").attr('src', 'img/tooth-boss.png');
  }
  return fighter;
}

// User Interface Logic
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const name = $('#name').val();
    const questOne = $('input[name="question1"]:checked').val();
    const questTwo = $('input[name="question2"]:checked').val();
    const questThree = $('input[name="question3"]:checked').val();
    const questFour = $('input[name="question4"]:checked').val();
    const questFive = $('input[name="question5"]:checked').val();
    const questSix = $('input[name="question6"]:checked').val();
    console.log(name, questOne, questTwo, questThree, questFour, questFive, questSix)
    if (questOne === undefined || questTwo === undefined || questThree === undefined || questFour === undefined || questFive === undefined || questSix === undefined) {
      $('#error').text("Must select and answer for all questions!");
    } else {
    $("#quiz").addClass("hidden");
    $("#retake").removeClass("hidden");
    $(".fighter-image").removeClass("hidden");
    codeSelector(questOne, questTwo, questThree, questFour, questFive);
    fighter(questSix);
    }
  });

  $("#retake").click(function() {
    $("#retake, .result").addClass("hidden");
    $("#quiz").removeClass("hidden");
    $(".fighter-image").addClass("hidden");
  });
 });


function cPlusPlus(fighter) {
  $("#cPlusPlus").removeClass("hidden");
}

function cSharp(fighter) {
  $("#cSharp").removeClass("hidden");
}

function java(fighter) {
  $("#java").removeClass("hidden");
}

function javaScript(fighter) {
  $("#javaScript").removeClass("hidden");
}

function php(fighter) {
  $("#php").removeClass("hidden");
}

function python(fighter) {
  $("#python").removeClass("hidden");
}

function ruby(fighter) {
  $("#ruby").removeClass("hidden");
}

function swift(fighter) {
  $("#swift").removeClass("hidden");
}

function rockstar(fighter) {
  $("#rockstar").removeClass("hidden");
}

function piet(fighter) {
  $("#piet").removeClass("hidden");
}
