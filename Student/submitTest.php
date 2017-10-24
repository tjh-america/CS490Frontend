<?php
$json = json_decode(file_get_contents('php://input'));
$data = json_encode($json);
$crl = curl_init();
  curl_setopt($crl, CURLOPT_URL, "https://web.njit.edu/~rh249/CS490/SubmitExam.php");
	curl_setopt($crl, CURLOPT_POST, 1);
  curl_setopt($crl, CURLOPT_POSTFIELDS, $data);
	curl_setopt($crl, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
  $c=curl_exec($crl);
  echo $c
?>
