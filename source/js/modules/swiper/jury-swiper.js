import Swiper from '../../vendor/swiper';

const sectionClassName = 'jury';
const juryContainer = document.querySelector(`.${sectionClassName}`);

const initJurySlider = () => {
  if (juryContainer) {
    return new Swiper(`[data-slider-wrapper="${sectionClassName}"]`, {
      grabCursor: true,
      loop: true,
      speed: 600,

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 162,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 107,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      navigation: {
        prevEl: `[data-slider-prev-button="${sectionClassName}"]`,
        nextEl: `[data-slider-next-button="${sectionClassName}"]`,
      },
    });
  }

  return null;
};

export {initJurySlider};
