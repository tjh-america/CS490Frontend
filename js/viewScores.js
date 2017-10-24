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
if (httpRequest.readyState === XMLHttpRequest.DONE) {
  if (httpRequest.status === 200) {
    var response = JSON.parse(httpRequest.responseText);
   var txt = "<table border='1'><tr><th>Question Number</th><th>Question</th></tr>"
   var pointsPossible=0;
   var pointsAchieved=0;
   for (x in response) {
     var questionID=response[x].examQuestionID;
     var studentAnswer=response[x].questionresponse;
     var studentScore=response[x].pointsAwarded;
     var questionPoints=response[x].points;
     var questionText=response[x].questionText;
     var td1="<tr><td>"+questionID+"</td>";
     var td2="<td>"+questionText+"</td></tr>"
     var studentResponse="<tr><td colspan='3'>Your Response:<br>"+studentAnswer+"</td></tr>";
     var scoreRow="<tr><td colspan='2'>Your Score on Question "+questionID+": "+studentScore+" out of "+questionPoints+"</td></tr>"
     txt +=td1+td2+studentResponse+scoreRow;
     pointsAchieved+=parseInt(studentScore);
     pointsPossible+=parseInt(questionPoints);
     //checkbox.name = "selectedQuestions";
     //checkbox.value = "unchecked";
     //checkbox.id = x;
       //txt += "<tr><td>"+checkbox.value+"</td><td>" + response[x].questionID + "</td><td>"+response[x].questionText+"</td></tr>";
   }
   txt += "</table><br>Total Score: "+pointsAchieved+" out of "+pointsPossible;
   document.getElementById("test").innerHTML = txt;
    //document.getElementById("json").innerHTML=response[0].questionText;
  } else {
    alert('There was a problem with the request.');
  }
}
}
function makeRequestData(url) {
httpRequestTest = new XMLHttpRequest();
var data = JSON.parse(httpRequestTest.responseText);
console.log("line 49");
if (!httpRequestTest) {
  alert('Giving up :( Cannot create an XMLHTTP instance');
  return false;
}
httpRequestTest.onreadystatechange = submitTest;
  httpRequestTest.open('POST', url);
  httpRequestTest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequestTest.send(data);
}
//function getResponses(){
//var response = JSON.parse(httpRequest.responseText);

//var testData=[];
//var questionIDs=[];
//var questionID;
//testData.questionIDs=questionIDs;
//for (var i=0; i<response.length; i++){
  //  testData.push({questionID:
    //  response[i].questionID,
      //questionResponse: document.getElementById(i).value});

  //}
  //jsonData=JSON.stringify(testData);
  //console.log(jsonData);
  //return(jsonData);
//}

function submitTest() {
if (httpRequestTest.readyState === XMLHttpRequest.DONE) {
if (httpRequestTest.status === 200) {
  var submittedTest = httpRequestTest.responseText;
  var div=document.createElement("div");
  var text = document.createTextNode(submittedTest);
  div.appendChild(text);
  document.body.appendChild(div);
  //document.getElementById("testSuccess").innerHTML=createdTest;
} else {
  alert('There was a problem with the request.');
}
}
}
