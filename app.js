//array for questions

var qArray = [
  ["Question1:Do you get very angry when someone kills you in a game.?", "It's part of the game no biggie.", "REVENGE!"], 
  ["Question2:Are you a Casual or Hardcore Gamer?", "Casual!", "Hardcore!"], 
  ["Question3:Do you follow the rules or use exploits?", "I follow the rules for fair play.", "Exploits are part of the game."]
  ["Question4:Do you use mods?", "No, I want the vanilla experience.", "Yeah, mods make the game better."]
  ["Question5:Do you like to taunt your opponents", "I want to relax and enjoy the game.", "Psychological warfare is a legit tactic."]
];


//write to the index
//used a for loop to repeat process till all questions have been displayed.
for (var i = 0; i < qArray.length; i++){
  document.body.appendChild("<form><span class='question'>" + qArray[i][0] + "</span><br>");
  for (var x = 1; x < 4; x++){
    document.body.appendChild("<input type='radio' class='answer' name='answer' value='" + qArray[i][x] + "'>" + questionArray[i][x] + "");
  }
  document.body.appendChild("</form><br>");
}

// all possible combination for answers
// total combination for questions are 10, there are 5 questions and 2 answers each. 
//result will be output an alert window with the alignment picture.
var alignment = [
    
]















//
//function check() {
//    document.getElementById("lb").checked = true;
//}
//function uncheck() {
//    document.getElementById("lb").checked = false;
//}
//
//function myFunction() {
//    document.getElementById("button").innerHTML = "this is a test";
//}