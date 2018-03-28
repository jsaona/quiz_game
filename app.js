


//FUNCTION
function check() {
    document.getElementsByTagName("input").checked = true;
}
function uncheck() {
    document.getElementsByTagName("input").checked = false;
}

document.getElementById("button").onclick = function () {
    gamerScore.lawfulGood++;
    console.log(gamerScore);
};

//SCORE
var gamerScore = {
    lawfulGood: 0,
    lawfulEvil: 0,
    neutral: 0,
    chaoticGood: 0,
    chaoticEvil: 0
};





















//result for differnt alignment status