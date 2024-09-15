/**
 * const demo = document.getElementById("demo");
 * 
 * demo.parentNode();
 * demo.childNode();
 * 
 * 
 * cosnt paragraph = document.createElement("p");
 * paragraph.innteHTML = "This is new Paragraph"
 * paragraph.textContent = " hellow world"
 * 
 * const span = document.createElement("span");
 * span.textContent = "lorem sum"
 * or,
 * const node = docment.createTextNode("lorem sum")
 * span.append(node)
 */



const web = document.createElement('span');
//way-1 element inside add to text 
web.textContent = "This is textContent"

//way-2 element inside add to text 
const txt = document.createTextNode = "This is createTextNode "
web.append(txt)

// console.log(web);

//--------------------------------

const div = document.createElement("div");

const h_2 = document.createElement("h2");
const h_3 = document.createElement("h3");
const h_4 = document.createElement("h4");
const h_5 = document.createElement("h5");

div.appendChild(h_2);
div.appendChild(h_3);
div.appendChild(h_4);
div.appendChild(h_5);

// console.log(div)



