/**
* Author: Ketzia Arella Seraphim 102040778
* Target: clickme.html
* purpose: Javascript assignment 1B
* created: 3-4-2019
* credit: 
*/

"use strict"

function valid(){
	sessionStorage.setItem("refnum", "ITEN3");
	if(sessionStorage.firstname !=undefined) {
		document.getElementById("refnum").innerHTML = sessionStorage.getItem("refnum");
		document.getElementById("firstname").value = sessionStorage.firstname;
		document.getElementById("lasttname").value = sessionStorage.lasttname;
		document.getElementById("dob").value = sessionStorage.dob;
		document.getElementById("street").value = sessionStorage.street;
		document.getElementById("suburb").value = sessionStorage.suburb;
		document.getElementById("state").value = sessionStorage.state;
		document.getElementById("postcode").value = sessionStorage.postcode;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("phone").value = sessionStorage.phone;
	}
}

function validation(){
	sessionStorage.setItem("refnum", "ITSA2");
	if(sessionStorage.firstname !=undefined) {
		document.getElementById("refnum").innerHTML = sessionStorage.getItem("refnum");
		document.getElementById("firstname").value = sessionStorage.firstname;
		document.getElementById("lasttname").value = sessionStorage.lasttname;
		document.getElementById("dob").value = sessionStorage.dob;
		document.getElementById("street").value = sessionStorage.street;
		document.getElementById("suburb").value = sessionStorage.suburb;
		document.getElementById("state").value = sessionStorage.state;
		document.getElementById("postcode").value = sessionStorage.postcode;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("phone").value = sessionStorage.phone;
	}
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
	var regForm = document.getElementById("refnum1"); 
	regForm.onsubmit = valid;
	var regForm = document.getElementById("refnum2");
	regForm.onsubmit = validation;
	countdown();
}
window.onload = init;