/*  DEPOSIT PART --  Click on Deposit Button  */


document.getElementById("button-deposit").addEventListener("click", function(){ 
 var newdepositAmount=  document.getElementById("user-deposit").value;


var previousDepositAmount =  document.getElementById("deposit-display").innerText;
// if ( typeof(newdepositAmount)== "number") {
 
// }

// else {

//     console.log("Give amount in number")
// }

var totalDepoAmount = parseFloat(previousDepositAmount)  +parseFloat(newdepositAmount);

document.getElementById("deposit-display").innerText = totalDepoAmount;
document.getElementById ("user-deposit").value = "";



    /* Updating Balance */


   var previousBalance =  document.getElementById("balance-display").innerText;
   var totalBalance = parseFloat(previousBalance) + totalDepoAmount ;
   console.log(totalBalance);
   document.getElementById("balance-display").innerText = totalBalance;


}

)








/* // Withdraw PART -- Withdraw Button  */





document.getElementById("button-withdraw").addEventListener("click", function(){ 
  var newwithdrawAmount =  document.getElementById("user-withdraw").value;
 
 
 var previouswithdrawAmount =  document.getElementById("withdraw-display").innerText;
 // if ( typeof(newdepositAmount)== "number") {
  
 // }
 
 // else {
 
 //     console.log("Give amount in number")
 // }
 
 var totalwithdrawAmount = parseFloat(previouswithdrawAmount)  + parseFloat(newwithdrawAmount);
 
 document.getElementById("withdraw-display").innerText = totalwithdrawAmount;
 document.getElementById ("user-withdraw").value = "";



/* WITHDRAW UPDATING BALANCE */



 var previousBalance =  document.getElementById("balance-display").innerText;
var totalBalance = parseFloat(previousBalance) - newwithdrawAmount ;
console.log(totalBalance);
document.getElementById("balance-display").innerText = totalBalance;

}) 
 




