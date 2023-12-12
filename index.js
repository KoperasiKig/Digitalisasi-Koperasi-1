let navbar = document.querySelector('.navbar');
let fabars = document.querySelector('.fa-bars');

fabars.onclick = () => {
    navbar.classList.toggle('active')
};

var swiper = new Swiper(".home-slid", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".team-slid", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoinys:{
        "0": {
            slidesPerView: 1,
            autoplay:{
                delay:700,
                disableOnIntertaction:false,
            },
        },
        "768":{
            slidesPerView:2,
        },
        "1020":{
            slidesPerView:3,
        },
    },
  });