const commentTxt = document.getElementById("comment_txt");

const btn = document.getElementById("btn")

btn.addEventListener("click", () => {

    let pra = document.createElement("p");

    commentTxt.insertAdjacentElement("beforebegin", pra);

    pra.innerText = commentTxt.value;
    
    commentTxt.value = ""
})
