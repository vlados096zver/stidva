$(document).ready(function() {

  $(document).on('click', '.btn--popup', function() {
    $('.popup--request').addClass('popup--active');
  })

  $(document).on('click', '.popup__close', function() {
    $('.popup--request').removeClass('popup--active');
  })

  $(document).on('mousedown', function(e) {
    if ($('.popup--request').is(e.target) && $('.popup__inner').has(e.target).length === 0) {
      $('.popup--request').removeClass('popup--active');
    }
  })

  let heightBlock = $('.page-inner__item--block').outerHeight(true);
  if (window.innerWidth > 1023) {
    $('.page-inner__holder').css("min-height", heightBlock);
  }

  $(document).on('click', '.main-header__link', function() {
    let target = $(this).attr('href');
    let pos = target.indexOf('#');
    if (pos !== -1) {
      target = target.substring(pos);
      let coordsScroll = $(target).offset().top - $('.main-header').outerHeight()
      $('html, body').animate({
        scrollTop: coordsScroll
      }, 800);
      return false;
    }
  })

  var swiperAbout = new Swiper(".services__slider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    slidesPerView: 1
  }).on('slideChange', function(e) {
    addZero('.swiper-pagination-current');
    addZero('.swiper-pagination-total');
  });

  function addZero(elem) {
    let value = $(elem).text();
    if (value < 10) {
      value = '00' + value;
    }
    return $(elem).text(value);
  }

  addZero('.swiper-pagination-current');
  addZero('.swiper-pagination-total');

  $(document).on('click', '.services__btn', function() {
    swiperAbout.slideNext();
  })

  $('.mobile-wrap').on('click', function() {
    $('.line-burger').toggleClass('line-active');
    $('.main-header__list').slideToggle(200);
  });

  $('.main-header__link').on('click', function() {
    if ($(window).width() <= 960) {
      $('.line-burger').removeClass('line-active');
      $('.main-header__list').slideUp(200);
    }
  })

  $(window).resize(function() {
    if (window.innerWidth > 960) {
      $('.main-header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
    if (window.innerWidth < 1024) {
      $('.page-inner__holder').css("min-height", "initial");
    } else {
      $('.page-inner__holder').css("min-height", heightBlock);
    }
  })

})