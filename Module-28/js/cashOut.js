//CashOut part
getById("cash_out_button").addEventListener("click", function(e) {
    e.preventDefault();
    const updateNumber = parseFloat(getInnerTextById("current_balence"));
    const cashOutNumber = getInputValueById("cash_out_input_value");
    const pinNumber = getInputValueById("cash_out_pin_input_value");

    if(cashOutNumber > updateNumber) {
        alert("You have not anough Amount")
        return;
    }
    
    if(pinNumber === 1){
        const totalAmount = updateNumber - cashOutNumber;
        getById("current_balence").innerText = totalAmount;

        // export transport section
        const div = document.createElement("div");
        div.classList.add("bg-red-100")
        div.classList.add("p-4")
        div.innerHTML= `<h2 class="text-2xl font-semibold">Cash Out Status</h2>
        <p>Cash Out:${cashOutNumber}Tk.</p>
        <p>total amount: ${totalAmount}Tk.</p>`
        getById("transoport_update").appendChild(div)

        
    } else {
        alert("Falid you Payment")

    }

    getById("cash_out_input_value").value = ""
    getById("cash_out_pin_input_value").value = ""

})

getById("cash_out_form_btn").addEventListener("click", () => {
    eventShowedId("cash_out_form");


})