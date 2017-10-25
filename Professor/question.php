<?php
include('session.php');
?>
<HTML>
  <head>
    <title>Create Question Page</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <script type="text/javascript" src="../js/createQuestion.js"></script>
  </head>
  <body>
    <ul>
    <li><a href="index.php">Home</a></li>
    <li><a class="active" href="question.php">Create Question</a></li>
    <li><a href="test.php">Create Test</a></li>
    <li><a href="logout.php">Logout</a></li>
  </ul>
  <br><h1>Create Question</h1>
    <textarea id="question" rows="10" cols="80">Please type your question here, professor.</textarea><br><br>
<button onclick="makeRequestData('createQuestion.php')" id="submit">Submit</button>
    <script>

    </script>
  </body>
</HTML>
