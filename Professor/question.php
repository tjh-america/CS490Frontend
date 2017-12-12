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
    <li><a href="grade.php">Grade Tests</a></li>
    <li><a href="logout.php">Logout</a></li>
  </ul>
  <h1>Create Question</h1>
  <hr><br>
  <div class="container">
    <textarea id="question" rows="10" cols="80" placeholder="Please type your question here, professor." value=""></textarea><br><br>
    Difficulty:<br>
    <input type="radio" name="difficulty" id="easy" value="Easy">Easy<br>
    <input type="radio" name="difficulty" id="medium" value="Medium" checked="checked">Medium<br>
    <input type="radio" name="difficulty" id="hard" value="Hard">Hard<br><br>
    Structures:<br>
    <input type="checkbox" id="if">If Statement<br>
    <input type="checkbox" id="for">For Loop<br>
    <input type="checkbox" id="while">While Loop<br><br>
    Number of Parameters:<br> <input type="number" value='0' min='0' id="params"><br><br>
    Function Name:<br> <input type="text" id="functionName" cols="20" placeholder="Function Name" value=""><br><br>
    Function Call:<br> <input type="text" id="testCall" placeholder="Function Call" value=""><br><br>
    Function Result:<br> <input type="text" id="testResult" placeholder="Function Result" value=""><br><br>
    <button id="testCase" onclick="addTestCase(testCases)">Add Test Case</button>
  </div>
</div>
    <br><br>
    <table id="testCases" border="1"><tr><th>Test Case</th><th>Expected Result</th></tr>
    </table>
    <br><br>
<button onclick="makeRequestData('createQuestion.php')" id="submit">Add Question</button><br><br>
<div id="errors"></div>

  </body>
</HTML>
