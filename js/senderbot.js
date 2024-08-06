// Проверка отправляемых ботом сообщенией - https://api.telegram.org/botBOT_TOKEN/getUpdates

// Отправка тестового сообщения - https://api.telegram.org/botBOT_TOKEN/sendMessage?chat_id=-CHAT_ID&text=Send_Test

// ./key.js include next code: const BOT_TOKEN = 'BOT_TOKEN'; const CHAT_ID = 'CHAT_ID';

"use strict"

document.addEventListener("DOMContentLoaded", async function() {
	try {
		const response = await fetch('/.netlify/functions/env');
		const data = await response.json();
		const chat = data.TELEGRAM_CHAT_ID;
		console.log('My Variable:', chat);
		// Use myVariable as needed
	} catch (error) {
		console.error('Error fetching environment variable:', error);
	}
});

document.querySelector('#sender-button').onclick = function () { // Указание нажимаемой кнопки

    // Ссылка отправки сообщения в ТГ чат
    const url = 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage?chat_id=-' + TELEGRAM_CHAT_ID + '&parse_mode=Markdown&text=';

	console.log(TELEGRAM_CHAT_ID);
	

    // Извлечение введенных данных
    let area = document.querySelector('#size-area-number').value; // площадь

    let type;
    
    if ($('#newbuild').is(':checked')){

        type = 'Новостройка';
    
    } else if ($('#secondarywr').is(':checked')){

        type = 'Вторичка с перепланировкой';
    
    } else if ($('#secondarywor').is(':checked')){

        type = 'Вторичка без перепланировки';
    
    };    

    let type_container = 
` %0A%0A
*Тип недвижимости:* ${type} %0A
*Площадь:*  ${area} м²%0A%0A

`;



    // Извлечение введенных данных
    let first_name = document.querySelector('#first-name').value; // имя
    let last_name = document.querySelector('#last-name').value; // фамилия
    let phone = document.querySelector('#phone').value.slice(1); // телефон
    let comment = document.querySelector('#comment').value; // коммент


    // Контейнер сообщение (табы отражаются и в сообщении)
    let message_container =
`
*НОВАЯ ЗАЯВКА С САЙТА!* %0A%0A

*Имя:* ${first_name} ${last_name} %0A
*Телефон:* ${'%2B' + phone}

`;

    let commentAdd = `_Комментарий: ${comment}_`;
    if (comment === '') {
        commentAdd = ``;
    };

    let _name = document.querySelector('._name').value; // Проверка полей

    let xhttp = new XMLHttpRequest(); // Команда отправки

    // Проверка пустых/заполненых полей
    if ( _name === '' ) {
        alert('Пожалуйста, введите ваше имя'); // Уведомление о не заполненых полях
        return false;
    } if( phone === '' ) {
        alert('Пожалуйста, введите ваш номер телефона'); // Уведомление о не заполненых полях
        return false;
    } if( phone.length != 17 ) {
        alert('Пожалуйста, проверьте правильность введенного номера'); // Уведомление о не заполненых полях
        return false;
    } else {
        xhttp.open("GET", url+message_container+type_container+commentAdd, true); // Подготовка данных к отпрвке
        xhttp.send(); // Отправка подготовленных данных

        alert('Спасибо за заявку. В ближайшее время мы с вами свяжемся!'); // Уведомление об успешной 

        $('#popup-open-close').trigger('click'); // Закрытие ПопАпа по отправке
    }


    
};