<?php
include('session.php');
?>
<html>
<head>
  <title>Professor Homepage</title>
  <link rel="stylesheet" type="text/css" href="../css/style.css">
  <script type="text/javascript" src="../js/releaseScores.js"></script>
</head>
<body>
  <ul>
  <li><a class="active" href="index.php">Home</a></li>
  <li><a href="question.php">Create Question</a></li>
  <li><a href="test.php">Create Test</a></li>
  <li><a href="grade.php">Grade Tests</a></li>
  <li><a href="logout.php">Logout</a></li>
</ul>
<h1>Welcome Professor!</h1>
<hr><br>
From this site, you can create a question, create a test, and submit tets to be automatically graded. If you don't like the scores the autograder has assigned, you will still be able to change the grades and add comments.
<br><br>
<button id="releaseScores" onclick="releaseScores('releaseScores.php')">Release Scores</button>
<div id="released"></div>
</body>
</html>
