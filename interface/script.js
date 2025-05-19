const dog =  document.querySelector(".dog");
const navMenu =  document.querySelector(".nav-menu");

dog.addEventListener("click", () => {
    dog.classList.toggle("active");
    navMenu.classList.toggle("active");
})
