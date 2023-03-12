
var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

newsrc1 = "images/dice" +randomNumber1+".png"
newsrc2 = "images/dice" +randomNumber2+".png"
image1.setAttribute('src', newsrc1);
image2.setAttribute('src', newsrc2);
var heading = document.querySelector("h1");
if (randomNumber1==randomNumber2) {
    heading.textContent = 'Draw'
} else if (randomNumber1>randomNumber2) {
    heading.textContent = 'Player1 Wins'
} else {
    heading.textContent = 'Player2 Wins'
}