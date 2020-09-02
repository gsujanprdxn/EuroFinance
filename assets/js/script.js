/* Author: 

*/
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var position = document.getElementById("position");
var company = document.getElementById("company");
var company_type = document.getElementById("company_type");
var country = document.getElementById("country");
var term = document.querySelector('input[name="terms"]:checked');
var nametext = document.getElementById("nametext");
var text = document.getElementById("text");
var form = document.getElementById("form");
var emailbox = document.getElementById("emailbox");
var emailid = document.getElementById("email");
 
emailid.addEventListener("keyup",validation)
function validation(){
    var email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  
    if (email.match(pattern)){
        text.innerHTML = "Your Email Id is valid"
        text.style.color = "#00ff00"
    }
    else{
        text.innerHTML = "Your Email Id is invalid"
        text.style.color = "#ff0000"
    }
    if (email == ""){
        text.innerHTML = "enter your ID"
        text.style.color = "#00ff00"
    }
}
// var list = ["firstname","lastname","position","company"]
// for(i=0;i<list.length;i++){
//     list[i].addEventListener("keyup",namevalidation);
// function namevalidation(){
//    var fname = firstname.value;
//    for(i=0;i<fname.length;i++){
//        ch = fname.charAt(i);
//        if(!(ch>'a'&&ch>'z')&&!(ch>'A'&&ch>'Z')&&!(ch ==' ')){
//             nametext.innerHTML = "Your Name is invalid"
//             nametext.style.color = "#ff0000"
//             return false
//        }
//        else{
//             nametext.innerHTML = ""
//        }
//    }
//    return true
// }

firstname.addEventListener("change",fnamevalidation);
function fnamevalidation(){
   var fname = firstname.value;
   for(i=0;i<fname.length;i++){
       ch = fname.charAt(i);
       if(!(ch>'a'&&ch>'z')&&!(ch>'A'&&ch>'Z')&&!(ch ==' ')){
            nametext.innerHTML = "Your Name is invalid"
            nametext.style.color = "#ff0000"
            return false
       }
       else{
            nametext.innerHTML = ""
       }
   }
   return true
}
var lnameerror = document.getElementById('lnametext');
lastname.addEventListener("keyup",lnamevalidation);
function lnamevalidation(){
   var lname = lastname.value;
   console.log(lname)
   for(i=0;i<lname.length;i++){
       char = lname.charAt(i);
       console.log(char)
       if(!(char>'a'&&char>'z')&&!(char>'A'&&char>'Z')&&!(char ==' ')){
            lnameerror.innerHTML = "Your lastname is invalid"
            lnameerror.style.color = "#ff0000"
            return false
       }
       else{
        lnameerror.innerHTML = ""
       }
   }
   return true
}
var positionerror = document.getElementById('position_error');
position.addEventListener("keyup",positionvalidation);
function positionvalidation(){
   var pname = position.value;
   for(i=0;i<pname.length;i++){
       char = pname.charAt(i);
       if(!(char>'a'&&char>'z')&&!(char>'A'&&char>'Z')&&!(char ==' ')){
            positionerror.innerHTML = "Your position is invalid"
            positionerror.style.color = "#ff0000"
            return false
       }
       else{
            positionerror.innerHTML = ""
       }
   }
   return true
}

var company_error = document.getElementById('company_error');
company.addEventListener("keyup",companyvalidation);
function companyvalidation(){
   var cname = company.value;
   for(i=0;i<cname.length;i++){
       char = cname.charAt(i);
       console.log(char)
       if(!(char>'a'&&char>'z')&&!(char>'A'&&char>'Z')&&!(char ==' ')){
            company_error.innerHTML = "Your Name is invalid"
            company_error.style.color = "#ff0000"
            return false
       }
       else{
            positionerror.innerHTML = ""
       }
   }
   return true
}

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    var company_type = document.getElementById("company_type");
    if(company_type.selectedIndex == 0){
        document.getElementById('company_type_error').innerHTML ="please select anyone";
        document.getElementById('company_type_error').style.color = "#ff0000"
    }
    if(country.selectedIndex == 0){
        document.getElementById('country_error').innerHTML ="please select anyone";
        document.getElementById('country_error').style.color = "#ff0000"
    }
    var abc = document.getElementsByClassName('terms'); 
    console.log(abc)
    for(i=0;i<=abc.length;i++){
        if(abc[i].checked == true || abc[i+1].checked == true){
            var chkterm = document.querySelector('input[name="terms"]:checked').value;
            console.log(chkterm)
            return true;
        }
        else{
            document.getElementById('radiotext').innerHTML ="please select anyone";
            document.getElementById('radiotext').style.color = "#ff0000"
        }
        alert("form submitted successfully")
    }
    alert("form submitted successfully")
    return false
    
}
)

var pageup = document.querySelector('.page-up');

window.addEventListener('scroll',() => {
    if(window.pageYOffset > 100){
        pageup.classList.add('active')
    }
    else{
        pageup.classList.remove('active')
    }
})

pageup.addEventListener('click',() => {
    window.scrollTo(0,0);
})















