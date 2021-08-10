let menu= document.querySelector('#menu-bars');
let navbar= document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.addEventListener('scroll', ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});

let section= document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');
window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let height= sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+ id +']').classList.add('active');
            });
        };
    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true
});

var review = new Swiper('.review-slider', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

let loader = () =>{
    document.querySelector('.loader-container').classList.add('fade-out');
}
let fadeOut = ()=>{
    setInterval(loader, 3000);
}
window.onload = fadeOut;