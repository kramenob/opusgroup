// Проверка отправляемых ботом сообщенией - https://api.telegram.org/botBOT_TOKEN/getUpdates

// Отправка тестового сообщения - https://api.telegram.org/botBOT_TOKEN/sendMessage?chat_id=-CHAT_ID&text=Send_Test

// ./key.js include next code: const BOT_TOKEN = 'BOT_TOKEN'; const CHAT_ID = 'CHAT_ID';

"use strict"



document.querySelector('#sender-button').onclick = function () { // Указание нажимаемой кнопки

    // Ссылка отправки сообщения в ТГ чат
    const url = 'https://api.telegram.org/bot'+BOT_TOKEN+'/sendMessage?chat_id=-'+CHAT_ID+'&parse_mode=Markdown&text=';
    
    // Извлечение введенных данных
    let first_name = document.querySelector('#first-name').value; // имя
    let last_name = document.querySelector('#last-name').value; // фамилия
    let phone = document.querySelector('#phone').value; // телефон
    let comment = document.querySelector('#comment').value; // коммент

    // Контейнер сообщение (табы отражаются и в сообщении)
    let message_container =
`*Новая заявка с сайта!* %0A%0A
*Имя:* ${first_name} ${last_name} %0A
*Телефон:* ${phone} %0A%0A
_Комментарий: ${comment}_`;

    let _req = document.querySelector('._req').value; // Проверка полей
    
    let xhttp = new XMLHttpRequest(); // Команда отправки

    // Проверка пустых/заполненых полей
    if ( _req === '' ) {
        alert('Пожалуйста, укажите ваше имя и номер телефона'); // Уведомление о не заполненых полях
    } else {
        xhttp.open("GET", url+message_container, true); // Подготовка данных к отпрвке
        xhttp.send(); // Отправка подготовленных данных

        alert('Спасибо за заявку. В ближайшее время мы с вами свяжемся!'); // Уведомление об успешной 

        $('#popup-open-close').trigger('click'); // Закрытие ПопАпа по отправке
    }

}