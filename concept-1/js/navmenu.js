
const navItems = document.querySelector(".nav_items");
let items = navItems.getElementsByTagName("li")
let lastClick = null;

for(let item of items) {
    item.addEventListener("click", () => {
        if(lastClick === null) {
            item.style.color = "red";
            lastClick = item;

            // item.className = "bg-red-100";
            // lastClick = item;
        } else {
            lastClick.style.color = "black";
            item.style.color = "red";

            lastClick = item;

            // lastClick.className = " ";
            // item.className = "bg-red-100";
            // lastClick = item
        }
    })
}

