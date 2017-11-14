<?php
$submittedQuestionID=-1;
$testCases=-1;
$testPassed=-1;
$return_arr = array();
$crl = curl_init();
  curl_setopt($crl, CURLOPT_URL, "https://web.njit.edu/~rh249/CS490/GetResponses.php");
	curl_setopt($crl, CURLOPT_POST, 1);
  curl_setopt($crl, CURLOPT_POSTFIELDS, $data);
	curl_setopt($crl, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
  $c=json_decode(curl_exec($crl));
	echo json_encode($c);
//echo $submittedQuestionID;
//echo $testCases;
//echo $testPassed;


?>
