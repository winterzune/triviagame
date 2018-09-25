$(document).ready(function() {

//counters

var correctAnswers = 0
var wrongAnswers = 0



var questions = ["1) What house was Moaning Myrtle in?", "2) Who taught the History of Magic lessons?", "3) What is a Bezoar?", "4) What is Dumbledore's full name?", "5) Which of these is an unforgivable curse?", "6) What dragon breed does Harry face in the Goblet of Fire?", "7) Which of these is a horcrux that harry destroyed?", "8) What does the spell Accio do?", "9) What stops Fleur from finishing the second task?", "10) What's the name of Hermione's pet?"]

//var answers? 


//when submit button is clicked, it should store the options chosen by the user
$("#submits").on("click", function() {
    var chosenOption = $('input[name=optionRadios]: checked').val();

});

//if the checked options have the class of .correctAnswer then:
if (chosenOption = $(".correctAnswer")) {
    correctAnswers++;
    qAndA = qAndA - 1;
}

else {
    wrongAnswers++;
    qAndA = qAndA - 1;
};



//when the timer reaches 0
    
setTimeout (oneMinute, 60000);
function oneMinute () {
   alert("Times up!")

//Results Alert

if (correctAnswers === 10) {
    alert("Perfect Score! Grade: Outstanding!")
    location.reload()
}

else if (correctAnswers === 8 || correctAnswers === 9 || correctAnswers === 7) {
    alert("Grade: Exceeds Expectations!")
    location.reload()
}

else if (correctAnswers === 6 || correctAnswers === 5) {
    alert("Grade: Acceptable.")
    location.reload()
}

else if (correctAnswers === 4) {
    alert("Grade: Poor.")
    location.reload()
}

else if (correctAnswers === 3 || correctAnswers === 2) {
    alert("Grade: Dreadful.")
}

else if (correctAnswers === 1) {
    alert("Grade: Troll")

};





}});