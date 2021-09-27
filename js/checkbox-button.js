"use strict"

$('#popup-open-close').click(function(){
	if ($('.calc-input').is(':checked')){ // если тип недвижимости выбран
        
	} else { // если тип недвижимости не выбран
        alert('Для отправки заявки, пожалуйста, укажите тип вашей недвижимости и ее площадь');
        return false;
	}
});