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
  <li><a href="logout.php">Logout</a></li>
</ul>
<h1>Welcome Professor!</h1>
<br><hr><br>
When you are ready, you can release scores, or create questions and tests by clicking the links above.
<br><br>
<button id="releaseScores" onclick="makeRequestData('releaseScores.php')">Release Scores</button>
<div id="released"></div>
</body>
</html>
