export default function initAreas() {
    new Swiper(".js-areas-swiper", {
        slidesPerView: 5,
        spaceBetween: 24,
        loop: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        speed: 800,

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
                loop: false,
                autoplay: false,
                allowTouchMove: false,
            },
        },
    });
}
