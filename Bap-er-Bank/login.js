document.getElementById("button-submit").addEventListener("click", function(){

const userEmail = document.getElementById("user-email").value;

console.log(userEmail);

const userPassword = document.getElementById("user-password").value;
console.log(userPassword);
if(userEmail=="admin" && userPassword == "secret"){

window.location.href = "banking-page.html"


}

})

