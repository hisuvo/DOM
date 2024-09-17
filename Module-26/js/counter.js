// Get button access
const incressBtn = document.getElementById("incress_btn");
const decressBtn = document.getElementById("decress_btn");

// Get Count Number access
const countNumber = document.getElementById("count")


incressBtn.addEventListener("click", () => {
	let number = Number(countNumber.innerText);
	const getNumber = ++number
	
	countNumber.innerText = getNumber;

})


decressBtn.addEventListener("click", () => {
	let number = Number(countNumber.innerText);
	const getNumber = --number

	if(getNumber >= 0) {
		countNumber.innerText = getNumber
	} 

})


