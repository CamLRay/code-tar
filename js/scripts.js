// Business Logic
function codeSelector(qOne, qTwo, qThree, qFour, qFive) {
  let language;
  if(qTwo === "money" && qOne !== "warz") {
    cPlusPlus();
    language = "C++";
  } else if(qTwo === "money" && qOne === "warz") {
    php();
    language = "PHP";
  } else if (qTwo === "legacy" && qFour === "mac" && qFive === "science") {
    ruby
    language = "Ruby";
  } else if (qTwo === "legacy" && qFour === "mac" && qFive === "soul") {
    swift();
    language = "Swift";
  } else if (qTwo === "legacy" && qFour === "pc" & qFive === "science") {
    cSharp();
    language = "C#";
  } else if (qTwo === "legacy" && qOne === "warz") {
    python();
    language = "Python";
  } else if (qTwo === "legacy" && qFive === "rock") {
    rockstar();
    language = "Rockstar";
  } else if (qTwo === "legacy" && qThree === "micro") {
    javaScript();
    language = "JavaScript";
  } else if (qTwo === "legacy" && qFive === "art") {
    piet();
    language = "Piet";
  } else {
    java();
    language = "Java";
  }
  return language;
} 

// User Interface Logic
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const name = $('#name').val().trim();
    const questOne = $('input[name="question1"]:checked').val();
    const questTwo = $('input[name="question2"]:checked').val();
    const questThree = $('input[name="question3"]:checked').val();
    const questFour = $('input[name="question4"]:checked').val();
    const questFive = $('input[name="question5"]:checked').val();
    const questSix = $('input[name="question6"]:checked').val();
    console.log(name)
    if (questOne === undefined || questTwo === undefined || questThree === undefined || questFour === undefined || questFive === undefined || questSix === undefined) {
      $('#error').text("Must select and answer for all questions!");
    } else if (name === "") {
      $('#error').text("Must enter a name!")
    } else {
    let language = codeSelector(questOne, questTwo, questThree, questFour, questFive);
    $("#quiz").addClass("hidden");
    $("#retake").removeClass("hidden");
    $("#fighter-div").removeClass("hidden");
    $("#result-name").text(name);
    language;
    $("#result-language").text(language);
    fighter(questSix);
    }
  });

  $("#retake").click(function() {
    $("#retake, .result").addClass("hidden");
    $("#quiz").removeClass("hidden");
    $("#fighter-div").addClass("hidden");
    $("#quiz")[0].reset();
    $('#error').text("")
  });

  $(".btn-next").click(function() {
    $(".active-question").next(".question").toggleClass("active-question");
    $(".active-question:first").toggleClass("active-question");
    $(".btn-prev").removeAttr("disabled");

    if ($(".active-question").next(".question").length <= 0) {
      $(".btn-submit").toggleClass("hidden");
      $(".btn-next").attr("disabled", "disabled");
    }
  });
  $(".btn-prev").click(function() {
    $(".active-question").prev(".question").toggleClass("active-question");
    $(".active-question:last").toggleClass("active-question");
    $(".btn-next").removeAttr("disabled");

    if ($(".active-question").prev(".question").length <= 0) {
      $(".btn-prev").attr("disabled", "disabled");
    }
  });

  
 });

 function fighter(qSix) {
  let fighter;
  if (qSix === "tech") {
    fighter = $("#fighter-image").attr('src', 'img/tech-boss.png');
  } else if (qSix === "bread") {
    fighter = $("#fighter-image").attr('src', 'img/bread-boss.png');
  } else if (qSix === "fluff") {
    fighter = $("#fighter-image").attr('src', 'img/fluff-boss.png');
  } else {
    fighter = $("#fighter-image").attr('src', 'img/tooth-boss.png');
  }
  return fighter;
}

function cPlusPlus() {
  $("#cPlusPlus").removeClass("hidden");
}

function cSharp() {
  $("#cSharp").removeClass("hidden");
}

function java() {
  $("#java").removeClass("hidden");
}

function javaScript() {
  $("#javaScript").removeClass("hidden");
}

function php() {
  $("#php").removeClass("hidden");
}

function python() {
  $("#python").removeClass("hidden");
}

function ruby() {
  $("#ruby").removeClass("hidden");
}

function swift() {
  $("#swift").removeClass("hidden");
}

function rockstar() {
  $("#rockstar").removeClass("hidden");
}

function piet() {
  $("#piet").removeClass("hidden");
}
