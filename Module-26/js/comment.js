const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	const commentTxt = document.getElementById("comment_txt");
	const commentBox = document.getElementById("comment_container")

	const p = document.createElement("p")
	p.innerText = commentTxt.value;

	commentBox.appendChild(p)

	commentTxt.value = "";

})