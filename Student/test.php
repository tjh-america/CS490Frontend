<?php
include('session.php');
?>
<HTML>
  <head>
  <title>Student Take Test</title>
  <link rel="stylesheet" type="text/css" href="../css/style.css">
  <script type="text/javascript" src="../js/takeTest.js"></script>
  </head>
<body onload="makeRequest('getTest.php');">
  <ul>
  <li><a href="index.php">Home</a></li>
  <li><a class="active" href="test.php">Take Test</a></li>
  <li><a href="view.php">View Grades</a></li>
  <li><a href="logout.php">Logout</a></li>
</ul>
<br><hr><br>
  <div id="test"></div>
  <button onclick="makeRequestData('submitTest.php')">Submit Test</button>
  <script>

  </script>

</body>
</HTML>
