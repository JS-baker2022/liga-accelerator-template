import Swiper from '../../vendor/swiper';

const sectionClassName = 'feedback';
const feedbackContainer = document.querySelector(`.${sectionClassName}`);

const initFeedbackSwiper = () => {
  if (feedbackContainer) {
    return new Swiper(`[data-slider-wrapper="${sectionClassName}"]`, {
      grabCursor: true,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 50,

      navigation: {
        prevEl: `[data-slider-prev-button="${sectionClassName}"]`,
        nextEl: `[data-slider-next-button="${sectionClassName}"]`,
      },
    });
  }

  return null;
};

export {initFeedbackSwiper};
