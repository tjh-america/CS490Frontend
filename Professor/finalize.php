<?php
include(session.php);
$user=$_SESSION['login_user'];
echo $user;
$json = json_decode(file_get_contents('php://input'));
$data = json_encode($json);
echo $data;

$crl = curl_init();
  curl_setopt($crl, CURLOPT_URL, "https://web.njit.edu/~rh249/CS490/UpdateGrades.php");
	curl_setopt($crl, CURLOPT_POST, 1);
  curl_setopt($crl, CURLOPT_POSTFIELDS, $data);
	curl_setopt($crl, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
  $c=curl_exec($crl);
	//echo $c;
?>
