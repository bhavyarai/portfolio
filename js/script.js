/*=================================== toggle icon navbar =================================*/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

} 


/*========================== scroll sections active link=======================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset  && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
   /*=====================================Sticky navbar=================================*/
   let header = document.querySelector('header');

   header.classList.toggle('sticky', window.scrollY > 100);
   
   /*=================================== remove toggle icon navbar when click navbar link (scroll) =================================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*===================================== Scroll reveal =================================*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    deuration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form ', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*===================================== Typed js =================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Student', 'Frontend Developer', 'App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
