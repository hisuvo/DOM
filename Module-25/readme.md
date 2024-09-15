### Question:

1.What is HTMLCollection?
2.What is NodeList?
//---------------------------

document.getElementsByClassName('lang')
HTMLCollection(6) [li.lang, li.lang, li.lang, li.lang, li.lang, li.lang]
//---------------------------

document.getElementsByTagName('li')
HTMLCollection(15) [li.lang, li.lang, li.lang, li.lang, li.lang, li.lang, li, li, li, li, li, li, li, li, li]
//---------------------------

document.querySelectorAll('.lang')
NodeList(6) [li.lang, li.lang, li.lang, li.lang, li.lang, li.lang]
//---------------------------

document.getElementById("programm_lang")

    <section id='programm_lang'>...</section>

//---------------------------

document.querySelector();
