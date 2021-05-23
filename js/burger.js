
const mainMenu=document.querySelector(".menu")
console.log(mainMenu);
const hambMenu=document.querySelector(".humburger-menu");
console.log(hambMenu);

const toggleMenu=()=>{
    mainMenu.classList.toggle("menu-active");
    hambMenu.classList.toggle("hamburger-menu-active");

}

hambMenu.addEventListener("click",toggleMenu);