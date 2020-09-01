/* Author: 

*/
var text = document.getElementById("text");
var form = document.getElementById("form");
var emailbox = document.getElementById("emailbox");
var emailid = document.getElementById("email");
emailid.addEventListener("keydown",validation)
function validation(){
    var email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  
    if (email.match(pattern)){
        emailbox.classList.add("valid");
        emailbox.classList.remove("invalid");
        text.innerHTML = "Your Email Id is valid"
        text.style.color = "#00ff00"
    }
    else{
        emailbox.classList.remove("valid");
        emailbox.classList.add("invalid");
        text.innerHTML = "Your Email Id is invalid"
        text.style.color = "#ff0000"
    }
    if (email == ""){
        emailbox.classList.remove("valid");
        emailbox.classList.remove("invalid");
        text.innerHTML = "enter your ID"
        text.style.color = "#00ff00"
    }
}

var firstname = document.getElementById("firstname");
var nametext = document.getElementById("nametext");
firstname.addEventListener("keyup",fnamevalidation);

function fnamevalidation(){
   var fname = firstname.value;
   for(i=0;i<fname.length;i++){
       ch = fname.charAt(i);
       console.log(ch)
       if(!(ch>'a'&&ch>'z')&&!(ch>'A'&&ch>'Z')&&!(ch ==' ')){
        nametext.innerHTML = "Your Name is invalid"
        nametext.style.color = "#ff0000"
        return false
       }
       else{
        nametext.innerHTML = ""
       }
       
   }
   if (fname == " "){
    text.innerHTML = "enter your name"
    text.style.color = "#00ff00"
   }
   return true
}
form.addEventListener("submit",formvalidation)
var radbtn =document.getElementsByClassName("radiobutton")

function formvalidation(){
    var radbtn =document.getElementsByClassName('radiobutton');
    console.log(radbtn)
    return true
}

















