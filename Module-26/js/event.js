// Option One 

// <button onclick="console.log(400)" >Click Me!</button>
// it's includes inside of html element 

//--------------------------------------

// Option two
function makeRed() {
    document.body.style.backgroundColor = "red"
}

//----------------------------------------------

// Option three

const teal = document.getElementById("makeTeal")
// teal.onclick = makeTeal();
teal.onclick = makeTeal;

function makeTeal() {
    document.body.style.backgroundColor = "teal"
}


// Option three

const tomato = document.getElementById("makeTomato");

tomato.onclick = function () {
    document.body.style.backgroundColor = "tomato"
}

// Option Three

const white = document.getElementById("makeWhite")

white.onclick = function makeWhite() {
    document.body.style.backgroundColor = "#fff"
}

//--------------------------------------------


// Option Four

const purple = document.getElementById("makePurple");

purple.addEventListener("click",makePurple);

function makePurple() {
    document.body.style.backgroundColor = "purple";
}

// Most use way
document.getElementById("makePink").addEventListener("click", function () {
    document.body.style.backgroundColor = "pink"
})