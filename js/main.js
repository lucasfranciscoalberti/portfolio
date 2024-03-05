const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true,
    autoplay:true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    
    },
    pagination: {
    el: ".swiper-pagination",
    clickable:true,
    },
});

window.sr = ScrollReveal({reset:true});

sr.reveal('.home', {duration:1000});

sr.reveal('.about', {duration:1000});

sr.reveal('.qualification', {duration:1000});

sr.reveal('.portfolio', {duration:1000});

sr.reveal('.project', {duration:1000});

sr.reveal('.contact', {duration:1000});


document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated",{
        speed:150,
        loop:true,

    }).go()
})




