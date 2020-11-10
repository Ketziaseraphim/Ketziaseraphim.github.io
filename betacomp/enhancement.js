/**
* Author: Ketzia Arella Seraphim 102040778
* Target: enhancement2.html
* purpose: Javascript assignment 1B
* created: 3-4-2019
* credit: 
*/


var slideIndex = 0;

function showSlides() {
  var i;
  var imgslide = document.getElementsByClassName("mySlides");
  var bullets = document.getElementsByClassName("bullets");
  
  for (i = 0; i < imgslide.length; i++) {
    imgslide[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > imgslide.length) {slideIndex = 1}    
  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace(" act", "");
  }
  
  imgslide[slideIndex-1].style.display = "block";  
  bullets[slideIndex-1].className += " act";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function countdown() {
	
	var deadline = new Date("may 26, 2019 15:30:00").getTime(); 
  
var x = setInterval(function() { 
  
var now = new Date().getTime(); 
var t = deadline - now; 
var day = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hour = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var min = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var sec = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("day").innerHTML =day ; 
document.getElementById("hour").innerHTML =hour; 
document.getElementById("minute").innerHTML = min;  
document.getElementById("second").innerHTML =sec;  
if (t < 0) { 
        clearInterval(x); 
        document.getElementById("timeup").innerHTML = "TIME UP"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; } 
}, 1000); 

}

function init()
{
	showSlides();
	countdown();
}
window.onload = init;

