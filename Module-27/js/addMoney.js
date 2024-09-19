/**
 * 
 * 1.Add event lisitener to the add money Button (form submit);
 * make sure to preventDefult() doesn't upload browser;
 * 
 * 2.get the money user that wants to add
 * also, get pin number provided
 * 
 * 3.Veryfi the pin number.if the pin number is worng then ==> failed to add money or right then ==> allow to add the number to the account balanece
 * 
 * 4.get the current main balance;
 * 
 * 5.add money to added with the current balance;
 * 
 * 6.Display / update the balance in the UI/DOM.
 * 
 */

// Get all input information here
const currentBalance = document.getElementById("current_balance");
const inputAmountNumber = document.getElementById("input_amount_number");
const inputPinNumber = document.getElementById("input_pin_number");
const addMoneyButton = document.getElementById("add_money_button");

// added button add eventlistener
addMoneyButton.addEventListener("click", function (event) {

    event.preventDefault(); // it used so that browser don't uploade
    
    if(inputPinNumber.value === "1234") {

        // current balance and input number convert to the number.
        //I can use here parseFloat(), parseInt() or Number() for convert to the number.
        const currentNumber = parseFloat(currentBalance.innerText);
        const inputNumber = parseFloat(inputAmountNumber.value)

        // add those number
        const updateBalance = currentNumber + inputNumber

        // displayed inside of UI
        currentBalance.innerText = updateBalance

    } else {
        alert("Faild to add money");

    }

    inputAmountNumber.value = "";
    inputPinNumber.value = "";
})