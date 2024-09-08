const menu =document.querySelector("#menu");
const nav=document.querySelector(".nav-links");

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}