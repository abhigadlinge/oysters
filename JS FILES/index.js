

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
        return;
    }
  if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
     hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
     toggleMenu();
})
closeMenu.addEventListener("click",() =>{
     toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
})
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
    if(this.innerWidth >991){
        if(menu.classList.contains("active")){
            toggleMenu();
        }

    }
}



var swiper = new Swiper(".swiper", {
    autoplay :{
        delay:5000,
    },
    loop:true,
    effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
     },
    coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });





 
 
var swiper = new Swiper(".slide-content", {
    autoplay:{
     delay:5000 ,
    },
     slidesPerView: 4,
     spaceBetween: 25,
     loop: true,
     centerSlide: 'true',
     fade: 'true',
     grabCursor: 'true',
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       dynamicBullets: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
 
     breakpoints:{
         320: {
             slidesPerView: 1,
         },
         480: {
             slidesPerView: 2,
         },
         768: {
             slidesPerView: 3,
         },
         1200: {
          slidesPerView: 4,
        },
     },
   });
  
 