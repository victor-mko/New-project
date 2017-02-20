$(document).ready(() => {
  $('#menu').on('click', 'a', function (event) {
        // отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
        // забираем идентификатор бока с атрибута href
    let id = $(this).attr('href'),
        // узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
        // анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $(window).scroll((e) => {
    let header = $('#header-box'),
      servises = $('#services'),
      portfolio = $('#portfolio'),
      about = $('#about'),
      teem = $('#teem'),
      contact = $('#contact'),
      nav_servises = $('#nav-services'),
      nav_portfolio = $('#nav-portfolio'),
      nav_about = $('#nav-about'),
      nav_teem = $('#nav-teem'),
      nav_contact = $('#nav-contact'),
      nav_elevent = $('nav ul li');
        // console.log(header.offset().top)
    if (header.offset().top > 100) {
      header.addClass('after-scroll');
    }
    if (header.offset().top > servises.offset().top - 10 && header.offset().top < portfolio.offset().top) {
      nav_elevent.removeClass('active-section');
      nav_servises.addClass('active-section');
    }
    if (header.offset().top > portfolio.offset().top - 10 && header.offset().top < about.offset().top) {
      nav_elevent.removeClass('active-section');
      nav_portfolio.addClass('active-section');
    }
    if (header.offset().top > about.offset().top - 10 && header.offset().top < teem.offset().top) {
      nav_elevent.removeClass('active-section');
      nav_about.addClass('active-section');
    }
    if (header.offset().top > teem.offset().top - 10 && header.offset().top < contact.offset().top) {
      nav_elevent.removeClass('active-section');
      nav_teem.addClass('active-section');
    }
    if (header.offset().top > contact.offset().top - 10 && header.offset().top < $('footer').offset().top) {
      nav_elevent.removeClass('active-section');
      nav_contact.addClass('active-section');
    }
    if (header.offset().top < 50) {
      header.removeClass('after-scroll');
    }
    if (header.offset().top < servises.offset().top) {
      nav_elevent.removeClass('active-section');
    }
  });
});
