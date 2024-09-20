getById("login_button").addEventListener("click", (e) => {
    e.preventDefault();
    const phoneNumber = getInputValueById("input_phone_number");
    const pinNumber = getInputValueById("input_pin_number");
    if(phoneNumber && pinNumber === 1) {
        window.location.href="./addmoney.html"
    } else {
        alert("Enter Your Correct Information")
    }

    getById("input_phone_number").value = ""
    getById("input_pin_number").value = ""
})