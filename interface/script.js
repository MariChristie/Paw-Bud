const dog =  document.querySelector(".dog");
const navMenu =  document.querySelector(".nav-menu");

dog.addEventListener("click", () => {
    dog.classList.toggle("active");
    navMenu.classList.toggle("active");
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function (){
    nextImage();
}, 5000)

function netImage(){
    count++;
    if(count>4){
        count = 1;
}

document.getElementById("radio"+count).checked = true;