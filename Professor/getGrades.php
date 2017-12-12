<?php
include(session.php);
$user=$_SESSION['login_user'];
echo $user;
$data = json_decode(file_get_contents('php://input'));
$json = json_encode($data);
$crl = curl_init();
  curl_setopt($crl, CURLOPT_URL, "https://web.njit.edu/~rh249/CS490/GetGradesNew.php");
	curl_setopt($crl, CURLOPT_POST, 1);
  curl_setopt($crl, CURLOPT_POSTFIELDS, $user);
	curl_setopt($crl, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
  $c=json_decode(curl_exec($crl));
	echo json_encode($c);
?>
