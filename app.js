const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const burger = document.querySelector('.burger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero,1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, '-=1.2')
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
.fromTo(burger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
.fromTo(headline, 0.5, {opacity: 0, x: 0}, {opacity: 1, x: 0}, '-=0.5');


// ------------------------------------------------------------
// -----------------------Menu Open Close----------------------
// ------------------------------------------------------------
const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // toggle nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation ='';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // burger animation
        burger.classList.toggle('toggle');

    });

}

navSlide();

