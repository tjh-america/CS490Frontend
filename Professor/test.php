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
		<hr><br>
		<div>
		<button id="submit" onclick="makeRequestData('createTest.php')">Create Test</button>
		<div id="errors"></div>
		<div id="testSuccess"></div>

	</div>

	<div id="searchBar">
		<br>

		Search Questions:<input type="text" id="search" onkeyup="searchQuestions()"><br><br>
		Show all Questions: <input name="questions" type="radio" id="2" onclick="searchByType(2)"><br><br>
		Search By Statements Used:<br>
		If Statement Questions<input name="questions" type="radio" id="3" onclick="searchByType(3)"><br>
		While Loop Questions<input name="questions" type="radio" id="4" onclick="searchByType(4)"><br>
		For Loop Questions<input name="questions" type="radio" id="5" onclick="searchByType(5)"><br><br>
		Search By Difficulty<br>
		Easy Questions<input name="questions" type="radio" id="6" onclick="searchByDifficulty('Easy')"><br>
		Medium Questions<input name="questions" type="radio" id="7" onclick="searchByDifficulty('Medium')"><br>
		Hard Questions<input name="questions" type="radio" id="8" onclick="searchByDifficulty('Hard')"><br><br>

	</div>


	<div id="questionBank"></div>
	<div id="testQuestions">
	<table border='1'><tr><th>Selected Questions:</th></tr><tr>
	</div><br>



		<script>



		</script>

	</body>

</html>
