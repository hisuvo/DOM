// Get All Button Access
//-----------------------
// const addAmountButton = document.getElementById("add_amount_button");
// const cashOutButton = document.getElementById("cash_out_button");
// const addAmountFormButton = document.getElementById("add_amount_form_btn");
// const cashOutFormButton = document.getElementById("cash_out_form_btn");


//Get all inputs Access
//---------------------
// const addAmountInputValue = document.getElementById("add_amount_input_value");
// const addAmountPinInputValue = document.getElementById("add_amount_pin_input_value");
// const cashOutInputValue = document.getElementById("cash_out_input_value");
// const cashOutPinInputValue = document.getElementById("cash_out_pin_input_value");


// Add Money part
getById("add_amount_button").addEventListener("click", function(e) {

    e.preventDefault();

    const updateNumber = getInnerTextById("current_balence");
    const amountNumber = getInputValueById("add_amount_input_value");
    const pinNumber = getInputValueById("add_amount_pin_input_value");
    
    if(pinNumber === 1){
        const totalAmount = parseFloat(updateNumber) + amountNumber;
        getById("current_balence").innerText = totalAmount;

        // export transport section
        const p = document.createElement("p");
        p.classList.add("bg-yellow-50")
        p.classList.add("p-2")
        p.classList.add("my-2")
        p.innerText = `Add:${amountNumber}Tk. total amount: ${totalAmount}Tk.`
        getById("transoport_update").appendChild(p)
        
    } else {
        alert("Falid you Payment");

    }

    getById("add_amount_input_value").value = ""
    getById("add_amount_pin_input_value").value = ""

})



getById("add_amount_form_btn").addEventListener("click", () => {
    eventShowedId("add_amount_form")
})
