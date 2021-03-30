// Валидация формы
$(document).ready(function () {
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
      $('#modal').fadeOut(1000);


      $('form').trigger('reset');
    });
    return false;
  });
});

// Маска для телефона
$('.phone').mask('+7(999)999-99-99');
