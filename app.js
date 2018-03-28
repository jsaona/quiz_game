function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    //ANSWERS
    if (question1 == "The first permanent English settlement in the Americas") {
        correct++;
    }
    if (question2 == "South Carolina") {
        correct++;
    }
    if (question3 == "1776") {
        correct++;
    }

    //ARRAY
    var pictures = ["images/win.gif", "images/meh.gif", "images/lose.gif"];
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var score;

    if (correct == 0) {
        score = 4;
    }
    
    if (correct == 0) {
        score = 3;
    }
    
    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }


    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
}
