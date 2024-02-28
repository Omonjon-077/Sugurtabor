'use strict'
/*=============== LOADER ===============*/
document.addEventListener('DOMContentLoaded', function () {
    $('.load').fadeIn();
})
window.addEventListener("load", function () {
    $('.load').fadeOut("slow");
});

/*=============== HEADER FIXED ===============*/
if ($("#homeHeader").length) {
    $(document).ready(function () {
        var header = $('#homeHeader');
        var headerHeight = header.outerHeight();

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            // Add 'sticky' class when scrolling down
            if (scroll > headerHeight) {
                header.addClass('sticky');
            } else {
                header.removeClass('sticky');
            }
        });
    });
}

/*=============== CALCULATE | SWIPER ===============*/
if ($(".resultCompany").length) {
    let swiperCompany = new Swiper(".resultCompany", {
        slidesPerView: 3,
        // centeredSlides: true,
        spaceBetween: 24,
        lazy: true,
        loop: true,
        autoplay: {
            delay: 250000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 280px
            300: {
                slidesPerView: 1,
                // spaceBetween: 16,
                // slideToClickedSlide: true,
                // autoplay: true,
            },
            // when window width is >= 400px
            400: {
                slidesPerView: 1,
                // autoplay: {
                //     delay: 2000,
                //     disableOnInteraction: true,
                // },
                // spaceBetween: 16,
                // slideToClickedSlide: true,
            },
            // when window width is >= 575px
            575: {
                slidesPerView: 1,
                // spaceBetween: 16,
                // slideToClickedSlide: true,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                // spaceBetween: 16,
                // slideToClickedSlide: true,
            },
            // when window width is >= 992px
            991: {
                slidesPerView: 2,
                // spaceBetween: 16,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 2,
                // spaceBetween: 16,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1400px
            1400: {
                slidesPerView: 3,
                // spaceBetween: 16,
                // slideToClickedSlide: true,
            },
        },
    });
}


/*=============== PARTNERS | SWIPER ===============*/
if ($(".partnerSwiper").length) {
    let swiper = new Swiper(".partnerSwiper", {
        slidesPerView: "5",
        // centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        breakpoints: {
            // when window width is >= 280px
            300: {
                slidesPerView: 1,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 400px
            400: {
                slidesPerView: 2,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 575px
            575: {
                slidesPerView: 3,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1400px
            1400: {
                slidesPerView: 5,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
        },
    });
}

/*=============== TESTIMONIAL | SWIPER ===============*/
if ($(".testimonialSwiper").length) {
    let swiper = new Swiper(".testimonialSwiper", {
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 280px
            300: {
                slidesPerView: 1,
                spaceBetween: 20,　　　　　　　　　　//gap of slides
                grid: {                            //row count of shown slide
                    rows: 2,
                },
            },
            // when window width is >= 575px
            575: {
                slidesPerView: 1,
                spaceBetween: 20,　　　　　　　　　　//gap of slides
                grid: {                            //row count of shown slide
                    rows: 2,
                },
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1,
                spaceBetween: 20,　　　　　　　　　　//gap of slides
                grid: {                            //row count of shown slide
                    rows: 2,
                },
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 2,
                spaceBetween: 20,　　　　　　　　　　//gap of slides
                grid: {                            //row count of shown slide
                    rows: 2,
                },
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 2,
                spaceBetween: 20,　　　　　　　　　　//gap of slides
                grid: {                            //row count of shown slide
                    rows: 2,
                },
            },
            // when window width is >= 1400px
            1400: {
                slidesPerView: 3,　　　　　　　　　　//column count of shown slide
                spaceBetween: 24,　　　　　　　　　　//gap of slides
                grid: {                            //row count of shown slide
                    rows: 2,
                },
            },
        },
    });
    // let testimonialSlides = document.querySelectorAll(".swiper-slide");
    // for (let i = 0; i < testimonialSlides.length; i++) {
    //     if (!(i % 2)) {
    //         testimonialSlides[i].classList.add('odd-height');
    //         console.log('hello');
    //     } else {
    //         testimonialSlides[i].classList.add('even-height');
    //     }
    // }
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 300 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)