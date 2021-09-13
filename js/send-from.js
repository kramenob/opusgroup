// https://api.telegram.org/botTOKEN/getUpdates

// https://api.telegram.org/botTOKEN/sendMessage?chat_id=-CHAT_ID&text=TEXT

document.querySelector('#button').onclick = function () {
    const token = '1666984823:AAGj0i_Z_IiYXqBvFgjfbHrb1unRbSTJhNE';
    const chat_id = '1001377908800';

    const url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-'+chat_id+'&text=';

    let message = document.querySelector('#message').value;
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", url+message, true);
    xhttp.send();
}