$(document).ready(function(){
var min = 19;
var max = 120;
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
var blueCrystal = Math.floor(Math.random() * 12) +1;
var greenCrystal = Math.floor(Math.random() * 12) + 1;
var navyCrystal = Math.floor(Math.random() * 12) + 1;
var redCrystal = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;
var totalScore = 0;
var numberString1 = "";
var numberString2 = "";

console.log("rando number " + randomNumber);

//random number to HTML
$(".random-number").html(randomNumber);

$("#blue-crystal").on("click", function() {
    totalScore += blueCrystal;
    $(".total-score").html(totalScore);
})

$("#green-crystal").on("click", function () {
    totalScore += greenCrystal;
    $(".total-score").html(totalScore);
})

$("#navy-crystal").on("click", function () {
    totalScore += navyCrystal;
    $(".total-score").html(totalScore);
})

$("#red-crystal").on("click", function () {
    totalScore += redCrystal;
    $(".total-score").html(totalScore);
})


});