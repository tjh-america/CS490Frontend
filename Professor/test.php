<?php
include('session.php');
?>
<html>
	<head>
		<title>Create a Test</title>
		<link rel="stylesheet" type="text/css" href="../css/style.css">
		<script type="text/javascript" src="../js/createExam.js"></script>
	</head>
	<body onload="makeRequest('getQuestions.php');">
		<ul>
	  <li><a href="index.php">Home</a></li>
	  <li><a href="question.php">Create Question</a></li>
	  <li><a class="active" href="test.php">Create Test</a></li>
		<li><a href="logout.php">Logout</a></li>
	</ul>
		<h1>Create Test</h1>
		<div>
		<button id="submit" onclick="makeRequestData('createTest.php')">Create Test</button>
	</div>
		<div id="questionBank"></div>
		<div id="testQuestions">
		<table border='1'><tr><th>Selected Questions:</th></tr><tr>
		</div><br>
		<div id="testSuccess"></div>
		<div id="hello"></div>
		<script>



		</script>

	</body>

</html>