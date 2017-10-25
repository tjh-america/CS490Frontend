<?php
session_start();
$error='';
if (isset($_POST['submit'])) {
if (empty($_POST['username']) || empty($_POST['password'])) {
$error = "Username or Password is invalid";
}
else
{

$username=$_POST['username'];
$password=$_POST['password'];
$json = array('username' => $username, 'password' => $password);
$data = json_encode($json);
echo $data;
$crl = curl_init();
curl_setopt($crl, CURLOPT_URL, "https://web.njit.edu/~rh249/CS490/Login.php");
curl_setopt($crl, CURLOPT_POST, 1);
curl_setopt($crl, CURLOPT_POSTFIELDS, $data);
curl_setopt($crl, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
$c=(curl_exec($crl));
echo $c;
if ($c==1){
	$_SESSION['login_user']=$username;
	$crl = curl_init();
	curl_setopt($crl, CURLOPT_URL, "/Professor/session.php");
	curl_setopt($crl, CURLOPT_POST, 1);
	curl_setopt($crl, CURLOPT_POSTFIELDS, $_SESSION['login_user']);
	curl_setopt($crl, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
	header("location: Professor/index.php");


	}
	elseif ($c==0){
		$_SESSION['login_user']=$username;
		header("location: Student/index.php");

		}
		else{
			$_SESSION['login_user']=$username;
			header("location: index.php");
			echo "Invalid Login";
			}

}
}

?>
