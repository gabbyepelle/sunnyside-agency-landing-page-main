const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".text-box");




hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
})