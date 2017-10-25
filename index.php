<?php
include('login.php');
?>
<!DOCTYPE html>
<html>
<head>
<title>Login Form in PHP with Session</title>
</head>
<body>
<div id="main">
<h1>Tom, Jean, Rahul Test System Login</h1>
<div id="login">
<h2>Login</h2>
<form action="" method="post">
<label>Username :</label>
<input id="name" name="username" placeholder="username" type="text">
<label>Password :</label>
<input id="password" name="password" placeholder="**********" type="password">
<input name="submit" type="submit" value=" Login ">
<span><?php echo $error; ?></span>
</form>
</div>
</div>
</body>
</html>
