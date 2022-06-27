<<<<<<< HEAD
let search = document.querySelector (".search-box");

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle("active");
    menu.classList.remove('active');
}
let menu = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
    menu.classList.toggle("active");
    search.classList.remove('active');
}
//Hide menu and Search bar
window.onscroll = () => {
    menu.classList.remove('active')
    search.classList.remove('active')
}

//Header
let Header = document.querySelector('header')

window.addEventListener('scroll', () => {
    Header.classList.toggle('shadow', window.scroll > 0);
});
=======
let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle("active");
    menu.classList.remove('active');
}
let menu = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
    menu.classList.toggle("active");
    search.classList.remove('active');
}
//Hide menu and Search bar
window.onscroll = () => {
    menu.classList.remove('active')
    search.classList.remove('active')
}

//Header
let Header = document.querySelector('header')

window.addEventListener('scroll', () => {
    Header.classList.toggle('shadow', window.scroll > 0);
});
>>>>>>> 10777960cbd80faac04ea785a3b15c8aa818d619
