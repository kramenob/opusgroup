<?php

$name = $_POST['firstname'];
$name = $_POST['lastname'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$token = "1666984823:AAGj0i_Z_IiYXqBvFgjfbHrb1unRbSTJhNE"; // МОЙ
$chat_id = "-1001377908800"; // МОЙ
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Сообщение:' => $message
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