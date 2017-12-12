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
     var td2="<td><b>Question:</b> "+questionText+"</td></tr>"
     var studentResponse="<tr><td colspan='3'>Student's Response:<br>"+studentAnswer+"</td></tr>";
     var scoreRow="<tr><td colspan='2'>Student's Score on Question "+questionID+": "+studentScore+" out of "+questionPoints+"<br> Update Score:<br> <input type='number' name='points' value='"+studentScore+"'+ min='0' max='"+questionPoints+"' </td></tr>";
     var commentText="<tr><td>Enter Comments for Question "+questionID+" below: </td><td>Auto Grader Comments:</td></tr>";
     var commentRow="<tr><td colspan='1'><textarea name='comment' rows='5' cols='80'></textarea></td>";
     var graderCommentRow="<td>"+testCaseComments+graderComments+"</td></tr>"
     txt +=td1+td2+studentResponse+scoreRow+commentText+commentRow+graderCommentRow;
     pointsAchieved+=parseInt(studentScore);
     pointsPossible+=parseInt(questionPoints);

   }
   txt += "</table><br>Total Score: "+pointsAchieved+" out of "+pointsPossible;
   document.getElementById("test").innerHTML = txt;
    //document.getElementById("json").innerHTML=response[0].questionText;
  } else {
    alert('There was a problem with the request.');
  }
}
console.log(response);
return JSON.stringify(response);
}

function getComments(){
  var response = JSON.parse(httpRequest.responseText);



//var questionIDs=[];
//var questionID;
//testData.questionIDs=questionIDs;
for (var i=0; i<response.length; i++){
    testData.push({
      gradedQuestionID: response[i].gradedQuestionID,
      questionID: response[i].questionID,
      comments: document.getElementsByName("comment")[i].value,
    points: document.getElementsByName("points")[i].value});

  }
  jsonData=JSON.stringify(testData);
  //console.log(jsonData);
  return(jsonData);
}
function makeRequestData(url) {
httpRequestTest = new XMLHttpRequest();
var data = getComments();
console.log("line 49");
if (!httpRequestTest) {
  alert('Giving up :( Cannot create an XMLHTTP instance');
  return false;
}
//httpRequestTest.onreadystatechange = releaseScores;
  httpRequestTest.open('POST', url);
  httpRequestTest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequestTest.send(data);
  document.getElementById('released').innerHTML=httpRequest.responseText;
}
function releaseScores(url) {
  var data =getComments();
  console.log(data);
  httpRequestFinalize = new XMLHttpRequest();

  if (!httpRequestFinalize) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  //httpRequest.onreadystatechange = createTestBank;
    httpRequestFinalize.open('POST', url);
    httpRequestFinalize.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequestFinalize.send(data);
    document.getElementById('released').innerHTML=httpRequestFinalize.responseText;
}
