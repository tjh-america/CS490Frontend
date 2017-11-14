<?php
include('session.php');
?>
<html>
<head>
  <title>Professor Homepage</title>
  <link rel="stylesheet" type="text/css" href="../css/style.css">
  <script type="text/javascript" src="../js/professorViewGrades.js"></script>
</head>

<body>
<body onload="makeRequest('getGrades.php')">
  <ul>
  <li><a href="index.php">Home</a></li>
  <li><a href="question.php">Create Question</a></li>
  <li><a href="test.php">Create Test</a></li>
  <li><a class="active" href="grade.php">Grade Tests</a></li>
  <li><a href="logout.php">Logout</a></li>
</ul>
<h1>Welcome Professor!</h1>
<br><hr><br>
When you are ready, you can release scores, or create questions and tests by clicking the links above.
<br><br>
<button id="releaseScores" onclick="makeRequestData('finalize.php')">Finalize Grades</button>
<div id="released"></div>
<div id="test"></div>
</body>
</html>
