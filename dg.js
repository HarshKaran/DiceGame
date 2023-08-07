

var randNum1=Math.floor(Math.random()*6)+1;
var randiceimg="dice"+ randNum1 + ".png";
var randimgSource= "images/"+ randiceimg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randimgSource);


var randNum2=Math.floor(Math.random()*6)+1;
var randiceimg="dice"+ randNum2 + ".png";
var randimgSource2= "images/"+ randiceimg;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randimgSource2);

if(randNum1 > randNum2){
    document.querySelector("h2").innerHTML = "🎉Player1 is Winner🎊";
}
else if(randNum2 > randNum1){
    document.querySelector("h2").innerHTML = "🎊Player2 is Winner🎉";
}
else{
    document.querySelector("h2").innerHTML = "😵!Draw🤔";
}