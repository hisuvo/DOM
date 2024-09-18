const password = document.getElementById("password");
const btn = document.getElementById('btn');

btn.addEventListener("click", (e) =>{
    let randomNumber = Math.floor(Math.random() * 999999 + 1000000);
    password.innerText = randomNumber

})