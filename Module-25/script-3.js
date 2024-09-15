// styleing by DOM

let sec = document.getElementsByTagName("section")

for(let item of sec) {
    item.style.backgroundColor = "teal"
    item.style.padding = "2rem"
    item.style.margin = "2rem"
    item.style.color = "#fff"
}

const head = document.getElementById("head")
head.style.margin = "2rem"


//GetAttribute

console.log(header.getAttribute("head"))