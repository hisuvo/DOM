
let bg = document.getElementById("body");
let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    let rgb = `rgb(${red} ${green} ${blue})`
    btn.textContent= rgb; 
    bg.style.backgroundColor = rgb
})
