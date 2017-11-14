<?php
include('session.php');
?>
<html>
	<head>
		<title>Create a Test</title>
		<link rel="stylesheet" type="text/css" href="../css/style.css">
		<script type="text/javascript" src="../js/createExamProfessor.js"></script>
	</head>
	<body onload="makeRequest('getQuestions.php');">
		<ul>
	  <li><a href="index.php">Home</a></li>
	  <li><a href="question.php">Create Question</a></li>
	  <li><a class="active" href="test.php">Create Test</a></li>
     <li><a href="grade.php">Grade Tests</a></li>
		<li><a href="logout.php">Logout</a></li>
	</ul>
		<h1>Create Test</h1>
		<div>
		<button id="submit" onclick="makeRequestData('createTest.php')">Create Test</button>
		<div id="errors"></div>
		<div id="testSuccess"></div>

	</div>

	<div id="searchBar">Search Questions:<input type="text" id="search" onkeyup="searchQuestions()"><br>
		If Statement Questions<input type="radio" id="3" onclick="searchByType(3)"><br>
		While Loop Questions<input type="radio" id="4" onclick="searchByType(4)"><br>
		For Loop Questions<input type="radio" id="5" onclick="searchByType(5)"><br>
	</div>


	<div id="questionBank"></div>
	<div id="testQuestions">
	<table border='1'><tr><th>Selected Questions:</th></tr><tr>
	</div><br>



		<script>



		</script>

	</body>

</html>
