<?php

// Источник - https://blog.maxgraph.ru/kak-otpravlyat-zayavku-s-sajta-v-telegram/
// Владелец бота - Марк Роас / ruisdaeless@yahoo.com

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$token = "1666984823:AAGj0i_Z_IiYXqBvFgjfbHrb1unRbSTJhNE"; // Токен 
$chat_id = "-1001377908800"; // МОЙ
$arr = array(
  'Имя: ' => $firstname,
  'Фамилия: ' => $lastname,
  'Телефон: ' => $phone,
  'Сообщение:' => $message,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>