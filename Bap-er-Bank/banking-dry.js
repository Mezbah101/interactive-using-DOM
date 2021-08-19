
function inputMachine(inputField)
{

var userInput= document.getElementById(inputField).value;

var usrInputValue = parseFloat(userInput);
inputField.value = ''

return usrInputValue;
}

function displayConversion(displayText, newAmount)
{
    var previousAmount = parseFloat(document.getElementById (displayText).innerText);
    ;
    var totalAmount = newAmount + previousAmount;

    document.getElementById(displayText).innerText = totalAmount;
    return totalAmount;

}

// Main Event Function -- Deposit

document.getElementById("button-deposit").addEventListener("click", function (){
    var newAmount = inputMachine ("user-deposit");
    //function called

  if (newAmount>0) {
    
     displayConversion("deposit-display", newAmount)
      
  }
}
)

// Main Event Function -- Withdraw
 
document.getElementById ("button-withdraw").addEventListener ("click", function(){

    // function called
var newAmount = inputMachine("user-withdraw");

//funtion called
 displayConversion("withdraw-display",newAmount )
})