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
   var txt = "<table border='1'><tr><th>Question Number</th><th>Question</th></tr>"
   var pointsPossible=0;
   var pointsAchieved=0;
   for (x in response) {
     var questionID=response[x].examQuestionID;
     var studentAnswer=response[x].questionresponse;
     studentAnswer=studentAnswer.replace(/(\n)+/g, '<br />');
     var studentScore=response[x].pointsAwarded;
     var questionPoints=response[x].points;
     var questionText=response[x].questionText;
     var comments=response[x].comments;
     var td1="<tr><td>"+questionID+"</td>";
     var td2="<td>"+questionText+"</td></tr>"
     var studentResponse="<tr><td colspan='3'>Your Response:<br>"+studentAnswer+"</td></tr>";
     var scoreRow="<tr><td colspan='2'>Student's Score on Question "+questionID+": "+studentScore+" out of "+questionPoints+" Update Score:<br> <input type='number' name='points' value='"+studentScore+"'+ min='0' max='"+questionPoints+"' </td></tr>";
     var commentText="<tr><td colspan='2'>Enter Comments for Question "+questionID+" below: </td></tr>";
     var commentRow="<tr><td colspan='2'><textarea name='comment' rows='5' cols='80'>"+comments+"</textarea></td></tr>";
     txt +=td1+td2+studentResponse+scoreRow+commentText+commentRow;
     pointsAchieved+=parseInt(studentScore);
     pointsPossible+=parseInt(questionPoints);
     //checkbox.name = "selectedQuestions";
     //checkbox.value = "unchecked";
     //checkbox.id = x;
       //txt += "<tr><td>"+checkbox.value+"</td><td>" + response[x].questionID + "</td><td>"+response[x].questionText+"</td></tr>";
      // document.getElementsByTagName('textarea').id="comment"+x;
       //document.getElementsByTagName('numbeber').id="studentScore"+x;
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
