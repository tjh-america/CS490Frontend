<?php
include('session.php');
?>
<html>
	<head>
		<title>Create a Test</title>
		<link rel="stylesheet" type="text/css" href="../css/style.css">
		<script type="text/javascript" src="../js/viewScores.js"></script>
	</head>
  <body onload="makeRequest('viewGrades.php')">
    <ul>
    <li><a href="index.php">Home</a></li>
    <li><a href="test.php">Take Test</a></li>
    <li><a class="active" href="view.php">View Grades</a></li>
		<li><a href="logout.php">Logout</a></li>
  </ul>
	<br><hr><br>
	<div id="test"></div>
  </body>
  <html>
