$(document).ready(function () {
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

});
