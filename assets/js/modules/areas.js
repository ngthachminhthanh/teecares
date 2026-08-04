export default function initAreas() {
    document.querySelectorAll(".home-col-5.swiper").forEach((swiperEl) => {
        new Swiper(swiperEl, {
            slidesPerView: 1,
            spaceBetween: 28,
            loop: true,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: swiperEl.parentElement.querySelector(".swiper-pagination"),
                clickable: true,
            },

            navigation: {
                nextEl: swiperEl.parentElement.querySelector(".btn-next"),
                prevEl: swiperEl.parentElement.querySelector(".btn-prev"),
            },

            speed: 800,

            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 5,
                    loop: false,
                    autoplay: false,
                    allowTouchMove: false,
                },
            },
        });
    });
}