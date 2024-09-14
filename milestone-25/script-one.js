//option-1:
const section = document.getElementsByTagName('section'); //THML collection
// console.log(section) 

// for(let item of section) {
//     console.log("Item is:", item)
// }

//option-2:
const language = document.getElementsByClassName("lang") // HTML collection
// console.log(language)


//option-3:
const p = document.querySelector("p"); // only first item get 
// console.log(p)

// for(let item of p) {
//     console.log("Paragraph is :", item)
// }


//option-4:
const stack = document.querySelectorAll("#full_stack #list li"); //Node list
// console.log(stack);

// for(let item of stack) {
//     console.log("list is :", item)
// }

// option-5:
const programLang = document.getElementById("programm_lang") // only one item get that i want
console.log(programLang)