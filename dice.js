var x=Math.floor(Math.random()*6)+1;
var y=Math.floor(Math.random()*6)+1;
var p="dice"+x+".png";
var l="dice"+y+".png";
var z=document.querySelector(".img1").src=p;

var t=document.querySelector(".img2").src=l;
function delik(){
  if(x>y){
    document.querySelector("h1").innerHTML="Player 1 wins!";
  }
  else if (x<y) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }
}
delik();
var myMusic= document.getElementById("mySong");
var icon=document.getElementById("icon");

icon.onclick= function (){
   if(myMusic.paused){
     myMusic.play();
   }
   else{
     myMusic.pause();
   }
}
