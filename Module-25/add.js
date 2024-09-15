
const body = document.querySelector("body");
body.style.fontFamily = "system-ui";


const mainElement = document.getElementById("main");


const sectionElement = document.createElement("section");

mainElement.appendChild(sectionElement);

const head = document.createElement("h1");
head.innerText = "Learning Programming Language List Is Given Blow";

sectionElement.appendChild(head);


// Add list
const ul = document.createElement("ul");
mainElement.appendChild(ul);

//list item-1
const li1 = document.createElement("li");
li1.textContent = "JavaScript";
ul.appendChild(li1)

// list item-2
const li2 = document.createElement("li")
li2.textContent = "TypeScript";
ul.appendChild(li2);

// list item-3
const li3 = document.createElement("li")
li3.textContent = "Python";
ul.appendChild(li3);

// list item-3
const li4 = document.createElement("li")
li4.textContent = "Golanguage";
ul.appendChild(li4);

