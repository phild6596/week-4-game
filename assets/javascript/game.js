$(document).ready(function(){
var min = 19;
var max = 120;
var crystalMin = 1;
var crystalMax = 12;
var randomNumber, blueCrystal, greenCrystal, navyCrystal, redCrystal; 
var wins = 0;
var losses = 0;
var totalScore = 0;


//variables
resetGame();
function resetGame() {
    totalScore = 0;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    blueCrystal = Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
    greenCrystal = Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
    navyCrystal = Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
    redCrystal = Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
    $(".random-number").html("Match this number: " + randomNumber);
    $(".total-score").html("Crystal total score is " + totalScore);
    $(".wins-column").html("Wins: " + wins);
    $(".loss-column").html("Losses: " + losses);
}

//Click functions

$("#blue-crystal").on("click", function() {
    totalScore += blueCrystal;
    $(".total-score").html("Crystal total score is " + totalScore);
    crystalGame();
})

$("#green-crystal").on("click", function () {
    totalScore += greenCrystal;
    $(".total-score").html("Crystal total score is " + totalScore);
    crystalGame();
})

$("#navy-crystal").on("click", function () {
    totalScore += navyCrystal;
    $(".total-score").html("Crystal total score is " + totalScore);
    crystalGame();
})

$("#red-crystal").on("click", function () {
    totalScore += redCrystal;
    $(".total-score").html("Crystal total score is " + totalScore);
    crystalGame();
})

//game wins and losses
function crystalGame() {
    if (totalScore === randomNumber) {
        wins++;
        $(".wins-column").html("Wins: " + wins);
        resetGame();
    }
    else if (totalScore > randomNumber) {
        losses++;
        $(".loss-column").html("Losses: " + losses);
        resetGame();
    }
};

});
