<?php

//CORS
if (isset($_SERVER['HTTP_ORIGIN'])) {
		// Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
		// you want to allow, and if so:
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	header('Access-Control-Allow-Credentials: true');
		header('Access-Control-Max-Age: 86400');    // cache for 1 day
	}

	// Access-Control headers are received during OPTIONS requests
	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
			// may also be using PUT, PATCH, HEAD etc
			header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
			header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

		exit(0);
	}


	$botToken = "1139508413:AAGUXypuWl0vxBnLEVToVVI06VyndOsz4Qk";
	$website = "https://api.telegram.org/bot".$botToken;

// $chatId = "43732660"; //test
$chatId = "63658792"; //prod

//for get request from bot
// $content = file_get_contents("php://input");
// $update = json_decode($content, TRUE);
// $message = $update["message"];

// $chatId = $message["chat"]["id"];

if(isset($_POST['name']) && trim($_POST['name']) !== '' && isset($_POST['Phone']) && trim($_POST['Phone']) !== '') {
	$name = $_POST['name'];
	$phone = $_POST['Phone'];
	
	$answer = "Новая заявка с сайта!\n\n";
	$answer .= "Имя: <b>$name</b>\n";
	$answer .= "Телефон: <b>$phone</b>\n";
	$result = [
		'status' => 'success'
	];
	send_message($answer);
} else {
	$result = [
		'status' => 'error',
		'message' => 'No phone or name or they are empty'
	];
}
	echo json_encode($result);

// $chatId = $message["chat"]["id"];


// $user_name = $message["chat"]["first_name"].' '.$message["chat"]["last_name"];
// $user_nickname = $message["chat"]["username"];
// $date=date("Y-d-m G:i:s");


function send_message($message_text){
	file_get_contents( $GLOBALS["website"]."/sendmessage?chat_id=".$GLOBALS["chatId"]."&text=".urlencode($message_text)."&parse_mode=HTML&disable_web_page_preview=true&".http_build_query($GLOBALS["postfields"]));
}