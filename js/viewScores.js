var testData=[];
function makeRequest(url) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = createTestBank;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send();

}
function createTestBank() {
  var response;
if (httpRequest.readyState === XMLHttpRequest.DONE) {
  if (httpRequest.status === 200) {
    response = JSON.parse(httpRequest.responseText);
   var txt = "<table border='1'>"
   var pointsPossible=0;
   var pointsAchieved=0;
   for (x in response) {
     var studentScore=response[x].pointsAwarded;
     var questionPoints=response[x].points;
     var pointsLost = questionPoints - studentScore;
     var deductionsAccountedFor = 0;
     var deductions=response[x].deductions;
     var testCases=response[x].testCases;
     for (y in deductions) {
       var graderComments="";
       if (deductions[y]=="no") {
         graderComments="All Test Cases Correct. No deductions!";
       }
      else if (deductions[y]=="for"){
        var deduction = Math.floor(studentScore/.80 -  studentScore);
        deductionsAccountedFor += deduction;
        graderComments=graderComments+"<br>Deducted points for not using for loop. Points lost: " +deduction+"<br>";
      }
      else if (deductions[y]=="while"){
        var deduction = Math.floor(studentScore/.80 -  studentScore);
        deductionsAccountedFor += deduction;
        graderComments=graderComments+"<br>Deducted points for not using while loop."+deduction+"<br>";
      }
      else if (deductions[y]=="if"){
        var deduction = Math.floor(studentScore/.80 -  studentScore);
        deductionsAccountedFor += deduction;
        graderComments=graderComments+"<br>Deducted points for not using if statement."+deduction+"<br>";
      }
      else {
        var testCaseDeduction = pointsLost - deductionsAccountedFor;
        graderComments=graderComments+"<br>Deducted points for failing test case. Number of test cases failed: "+deductions[y]+"<br>Points Lost for failing Test Cases: "+testCaseDeduction;
      }
     }
     var testCaseComments="";
     for (z in testCases){
       var testCase=testCases[z].testCase;
       var expectedResult=testCases[z].expectedResult;
       var actualResult=testCases[z].actualResult;
       testCaseComments=testCaseComments+"Function Call: "+testCase+"<br>Expected Result: "+expectedResult+"<br>Your Result: "+actualResult+"<br>";
     }

     var questionID=response[x].examQuestionID;
     var studentAnswer=response[x].questionresponse;
     studentAnswer=studentAnswer.replace(/(\n)+/g, '<br />');
     var questionText=response[x].questionText;
     var comments=response[x].comments;
     var td1="<tr><td><b>Question #"+questionID+"</b></td>";
     var td2="<td><b>Question: </b>"+questionText+"</td></tr>"
     var studentResponse="<tr><td colspan='3'>Your Response:<br>"+studentAnswer+"</td></tr>";
     var scoreRow="<tr><td colspan='2'>Your Score on Question "+questionID+": "+studentScore+" out of "+questionPoints+"</td></tr>";
     var commentText="<tr><td>Professorq for Question "+questionID+" below: </td><td>Auto Grader Comments:</td></tr>";
     var commentRow="<tr><td colspan='1'>"+comments+"</td>";
     var graderCommentRow="<td>"+testCaseComments+graderComments+"</td></tr>"
     txt +=td1+td2+studentResponse+scoreRow+commentText+commentRow+graderCommentRow;
     pointsAchieved+=parseInt(studentScore);
     pointsPossible+=parseInt(questionPoints);

   }
   txt += "</table><br>Total Score: "+pointsAchieved+" out of "+pointsPossible;
   document.getElementById("test").innerHTML = txt;
}}
}
