// == HAMBURGER MENU ==
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
});



// == SLIDER ==
/*
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        perPage: 3,
        gap: '30px',
        pagination: false,
        arrows: true,
        type: 'loop',
        breakpoints: {
            1280: {
                perPage: 2,
                gap: '20px',

                
            },
            1023: {
                perPage: 1,
            },
        }
    } );
    splide.mount();
});
*/

document.addEventListener('DOMContentLoaded', function () {
    // Vyhledání všech elementů s třídou .splide
    const splides = document.querySelectorAll('.splide');

    // Pro každý nalezený element vytvořte novou instanci Splide
    splides.forEach(function (splideElement) {
        new Splide(splideElement, {
        perPage: 3,
        gap: '30px',
        pagination: false,
        arrows: true,
        type: 'loop',
        breakpoints: {
            1280: {
            perPage: 2,
            gap: '20px',
            },
            
            1023: {
            perPage: 1,
            },
        },
        }).mount();
    });
});


// == SECTION FAQ ==
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle ('active')
    })
})

