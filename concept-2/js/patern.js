const items = [
    {
      description: "A powerful narrative about a totalitarian regime and the fight for individual freedom.",
      author: "George Orwell",
      img: "https://www.pngwing.com/en/search?q=small+logo"
    },
    {
      description: "A detailed guide to mastering JavaScript and understanding its core principles.",
      author: "Kyle Simpson",
      img: "https://ds.rokomari.store/rokomari110/people/61d90cfff_78471.png"
    },
    {
      description: "A moving memoir that explores the resilience of the human spirit in the face of adversity.",
      author: "Maya Angelou",
      img: "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@1.5x.png"
    },
    {
      description: "A gripping mystery following a genius detective as he solves complex cases.",
      author: "Arthur Conan Doyle",
      img: "https://ds.rokomari.store/rokomari110/people/068d7a1a0_930.jpg"
    },
    {
      description: "An epic fantasy adventure set in Middle-earth, filled with magic, battles, and heroism.",
      author: "J.R.R. Tolkien",
      img: "https://ds.rokomari.store/rokomari110/people/9ca21332f_13863.jpg"
    },
    {
      description: "An exploration of the rise and fall of ancient civilizations, highlighting key historical events.",
      author: "Will Durant",
      img: "https://ds.rokomari.store/rokomari110/people/63e8a202d_49301.jpg"
    },
    {
      description: "A groundbreaking exploration of how humans think, make decisions, and react to uncertainty.",
      author: "Daniel Kahneman",
      img: "https://via.placeholder.com/150"
    },
    {
      description: "A heartwarming tale of childhood adventures along the Mississippi River, highlighting the bonds of friendship.",
      author: "Mark Twain",
      img: "https://via.placeholder.com/150"
    },
    {
      description: "An accessible introduction to Python programming, covering basic to advanced topics for beginners.",
      author: "Guido van Rossum",
      img: "https://via.placeholder.com/150"
    },
    {
      description: "A philosophical exploration of the nature of existence, freedom, and responsibility in an absurd world.",
      author: "Jean-Paul Sartre",
      img: "https://via.placeholder.com/150"
    }
  ];
  
const image = document.getElementById("image")
const text = document.getElementById("text");
const author = document.getElementById("author")
const btn = document.getElementById('btn');

image.style.width = "8rem"
image.style.height = "8rem"

btn.addEventListener("click", (e) => {

    let index = Math.floor(Math.random() * items.length)
    text.innerText = items[index].description;
    author.innerText = items[index].author;
    image.src = items[index].img
    
})
