// не хера не работает чтобы при скроллинге активировалась анимация, без библиотеки wow.js
var block_show = false;

function scrollTracking(){
	if (block_show) {
		return false;
	}

	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.price__title').offset().top;
	var eh = $('.price__title').outerHeight();
	var dh = $(document).height();   

	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;

		// Код анимации
		$('.price__title div:eq(0)').show('fast', function(){
			$(this).next().show('fast', arguments.callee);
		});
	}
}

$(window).scroll(function(){
	scrollTracking();
});

$(document).ready(function(){ 
	scrollTracking();
});

