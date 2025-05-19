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

const tabs = document.querySelectorAll(".container-menu a");
const rightArrow = document.querySelector(".container-menu .right-arrow");
const leftArrow = document.querySelector (".container-menu .left-arrow");

const tabsList = document.querySelector(".container-menu ul");

const removeAllActiveClasses = () => {
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
};

const showHideArrows = () => {
    const maxScrollLeft = tabsList.scrollWidth - tabsList.clientWidth;

    leftArrow.style.display = tabsList.scrollLeft > 0 ? "flex" : "none";
    rightArrow.style.display = tabsList.scrollLeft < maxScrollLeft ? "flex" : "none";
};

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        removeAllActiveClasses();
        tab.classList.add("active");
    });
});

const manageIcons = () => {
    if (tabsList.scrollLeft >= 20) {
        leftArrowContainer.classList.add("active");
        } else {
            leftArrowContainer.classList.remove("active");
    }

    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
    console.log("scroll width: ", tabsList.scrollWidth);
    console.log("client width: ", tabsList.clientWidth);

    if (tabsList.scrollLeft >= maxScrollValue) {
        rightArrowContainer.classList.remove("active");
    } else { 
        rightArrowContainer.classList.add("active");
    }
};

rightArrow.addEventListener("click", () => {
    tabsList.scrollLeft += 200;
setTimeout(showHideArrows, 100); 
});

leftArrow.addEventListener("click", () => {
    tabsList.scrollLeft -= 200;
setTimeout(showHideArrows, 100); 
});

tabsList.addEventListener("scroll", manageIcons);
window.addEventListener("load", showHideArrows);       
window.addEventListener("resize", showHideArrows);   

let dragging = false;

const drag = (e) => {
    if (!dragging) return;
    tabsList.classList.add("dragging");
    tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener("mousedown", () => {
    dragging = true;
});

tabsList.addEventListener("mousemove", drag);

document.addEventListener("mouseup", () => {
    dragging = false;
    tabsList.classList.remove("dragging");
});