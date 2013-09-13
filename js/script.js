// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//kochel_Reed_Expressions_wacky



//Figuring out how long a light year is

var Light = 186000; //Inputting speed of light
var seconds = 60;  //Inputting how many seconds are in a minute
var Minute = 60; //Inputing how many minutes are in an hour
var hour = 24;   //inputting how many hours are in a day
var day = 365.25; //inputting how many days are in a year
var lightYear = Light * seconds * Minute * hour * day; //light year formula
console.log("This is how how long one light year is"); //console message to show MY result
console.log(lightYear);
var userInput = prompt("Enter speed of light"); //having user put info into prompt
var userInput = prompt("Enter random seconds"); //user using prompt
var userInput = prompt("Enter random Minutes"); //user using prompt
var userInput = prompt("Enter random hours");   //user using prompt
var userInput = prompt("Enter random days");    //user using prompt
console.log("This is how long a light year is in your universe:"); //console message directed at user
alert("This is how long a light year is in your universe:");
console.log(lightYear); //user result displayed in console


