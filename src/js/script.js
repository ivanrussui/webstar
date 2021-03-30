// Иництализация WOW.js
new WOW().init();

$(document).ready(function () {

  // modal
  const modal = $('#modal');
  const close = $('#close');

  $('#button').on('click', function () {
    $('.overlay, #call').fadeIn('slow');
  });
  $('.call__close').on('click', function () {
    $('.overlay, #call, .modal_active').fadeOut(450);
  });

  close.on('click', function () {
    modal.removeClass('modal_active');
  });

  // arrow
  var btn = $('#arrow');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // слайдер Slick
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Валидация формы
  $('#brif-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: 'required',
      email: {
        email: true,
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Введите ваше имя',
        minlength: jQuery.validator.format('Введите минимум {0} символа'),
        maxlength: jQuery.validator.format('Введите максимум {0} символов'),
      },
      phone: 'Введите ваш номер телефона',
      email: {
        required: 'Введите вашу электронную почту',
        email: jQuery.validator.format('Введите корректный email'),
      },
    },
    errorClass: 'invalid',
  });
  $('#offer-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: 'required',
    },
    messages: {
      name: {
        required: 'Введите ваше имя',
        minlength: jQuery.validator.format('Введите минимум {0} символа'),
        maxlength: jQuery.validator.format('Введите максимум {0} символов'),
      },
      phone: 'Введите ваш номер телефона',
    },
    errorClass: 'invalid',
  });
  $('#call-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: 'required',
    },
    messages: {
      name: {
        required: 'Введите ваше имя',
        minlength: jQuery.validator.format('Введите минимум {0} символа'),
        maxlength: jQuery.validator.format('Введите максимум {0} символов'),
      },
      phone: 'Введите ваш номер телефона',
    },
    errorClass: 'invalid',
  });

	

  // Ajax
  $('form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');
      $('.overlay, #call').fadeOut();
      $('#modal').fadeIn(1000);
      $('#modal').fadeOut(3000);

      $('form').trigger('reset');
    });
    return false;
  });

  // Маска для телефона
  $('.phone').mask('+7(999)999-99-99');
});
