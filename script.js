// == SLIDER ==
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        perPage: 3,
        gap: '20px',
        arrows: true,
        type: 'loop',
        //height: '400px',
        breakpoints: {
            1200: {
                perPage: 3,
                gap: '15px',
                //height: '550px'
            },
            992: {
                perPage: 2,
                gap: '10px',
                //height: '450px'
                
            },
            768: {
                perPage: 1,
                gap: '5px',
                //height: '450px'
            }
        }
    } );
    splide.mount();
});

// == SECTION FAQ ==
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle ('active')
    })
})

