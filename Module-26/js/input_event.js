// get input text
const headerTitle = document.getElementById("haeder_title");
const inputTxt = document.getElementById("input_text");
const updateBtn = document.getElementById("update_btn");


updateBtn.addEventListener("click", function () {
    // headerTitle.innerText = "Hello JavaScript DOM Manupulator Programmer";
    headerTitle.innerText = inputTxt.value;
    // headerTitle.style.textTransform = "uppercase"
    inputTxt.value = '';
})

