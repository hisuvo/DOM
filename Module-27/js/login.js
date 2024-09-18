const phoneNumber = document.getElementById("phone_number");
const pinNumber = document.getElementById("pin_number")
const loginBtn = document.getElementById("login_btn");

// Step-1: get login btn access
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const number = phoneNumber.value;
    const pin = pinNumber.value;

    
    

    if(number === "01571463049" && pin === "suvo2001") {
        console.log("Login Done");
        window.location.href = "/home.html"
        // window.location.replace("home.html"); // not bake root file
    } else {
        alert("Your Information is Wrong")
    }


})
