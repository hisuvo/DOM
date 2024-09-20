//all button blue print
function getById(id){
    const btn = document.getElementById(id);
    return btn;
}

// all input value blue print
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


// all Element innerText blue print
function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
}

// showod form 
function eventShowedId(id) {
    document.getElementById("add_amount_form").classList.add("hidden");
    document.getElementById("cash_out_form").classList.add("hidden");
    document.getElementById("transition_output_part").classList.add("hidden");

    // Only show element

    document.getElementById(id).classList.remove('hidden')
}