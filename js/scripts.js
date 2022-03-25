$(document).ready(function() {
 $("#quiz").submit(function(event) {
   event.preventDefault();
   const questOne = $('input[name="question1"]:checked').val();
   console.log(questOne)
 });



});