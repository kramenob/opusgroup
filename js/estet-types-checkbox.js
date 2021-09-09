$(window).keyup(function(e){

	var target = $('.checkbox-green input:focus');

	if (e.keyCode == 9 && $(target).length){

		$(target).parent().addClass('focused');

	}

});

 

$('.checkbox-green input').focusout(function(){

	$(this).parent().removeClass('focused');

});