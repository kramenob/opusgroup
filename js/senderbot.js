// Проверка отправляемых ботом сообщенией - https://api.telegram.org/botBOT_TOKEN/getUpdates

// Отправка тестового сообщения - https://api.telegram.org/botBOT_TOKEN/sendMessage?chat_id=-CHAT_ID&text=Send_Test

// ./key.js include next code: const BOT_TOKEN = 'BOT_TOKEN'; const CHAT_ID = 'CHAT_ID';

"use strict"

document.querySelector('#button').onclick = function () { // #button = id вашей кнопки отправки

    const url = 'https://api.telegram.org/bot'+BOT_TOKEN+'/sendMessage?chat_id=-'+CHAT_ID+'&text=';

    let message = document.querySelector('#message').value; // #message = id input'а из которого необходимо извлечь текст
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", url+message, true);
    xhttp.send();
}
