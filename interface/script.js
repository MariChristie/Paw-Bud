const dog =  document.querySelector(".dog");
const navMenu =  document.querySelector(".nav-menu");

dog.addEventListener("click", () => {
    dog.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    dog.classList.remove("active");
    navMenu.classList.remove("active");
}))