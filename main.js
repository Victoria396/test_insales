const mainSwiper = new Swiper(".mainSlider", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 4000,
  },

  breakpoints: {
    540: {
      spaceBetween: 32,
    },
  },
});

if (document.documentElement.clientWidth <= 992) {
  const advantagesSwiper = new Swiper(".advantages__container", {
    slidesPerView: 2,
    spaceBetween: 12,
  });

  [...document.querySelectorAll(".footer__menu h3")].forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.classList.toggle("active");
    });
  });
}

const goodsSwiper = new Swiper(".goods__swiper", {
  navigation: {
    nextEl: ".goods__swiper .swiper-button-next",
    prevEl: ".goods__swiper .swiper-button-prev",
  },

  breakpoints: {
    1426: {
      slidesPerView: 4,
      spaceBetween: 24,
    },

    1201: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    360: {
      slidesPerView: "auto",
      spaceBetween: 12,
    },
  },
});
