<?php
include('session.php');
$json = file_get_contents('php://input');
$array =json_decode($json, true);
$return_arr=array();
$user=$_SESSION['login_user'];
foreach($array as $item){
  $row_array['questionID'] = $item['questionID'];
  $row_array['questionResponse'] = $item['questionResponse'];
  $row_array['username'] = $user;
  array_push($return_arr,$row_array);
}

$data=json_encode($return_arr);
$crl = curl_init();
  curl_setopt($crl, CURLOPT_URL, "https://web.njit.edu/~rh249/CS490/SubmitExam.php");
	curl_setopt($crl, CURLOPT_POST, 1);
  curl_setopt($crl, CURLOPT_POSTFIELDS, $data);
	curl_setopt($crl, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
  $c=curl_exec($crl);
  echo $c
?>
