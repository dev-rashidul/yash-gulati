const headerh1 = document.querySelector(".headerh1");
const headerh2 = document.querySelector(".headerh2");
const viewButton = document.querySelector(".button");
const scrollButton = document.querySelector(".scroll-p");
const imgSection = document.querySelector("#home");
const nav = document.querySelector('nav');

document.addEventListener("DOMContentLoaded", function () {
    if(headerh1.classList.contains("anim")) {

    } else {
        headerh1.classList.add("anim");
        headerh2.classList.add("anim");
        viewButton.classList.add("anim");
        scrollButton.classList.add("anim");
        imgSection.classList.add("anim");
        nav.classList.add('anim');
    }
})
