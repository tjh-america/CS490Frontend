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
   var txt = "<table border='1'><tr><th>Question Number</th><th>Question</th><th>Points</th></tr>"
   for (x in response) {
     var points=response[x].points;
     //var textarea = document.createElement('input');     Run
     //textarea.type = "textarea";
     var td1="<tr><td cols='10'>"+response[x].questionID+"</td>";
     var td2="<td>"+response[x].questionText+"</td><td>"+points+"</td></tr>"
     var answer="<tr><td colspan='2'><textarea rows='10' cols='80' name='questionResponse' id='"+x+"'></textarea></td></tr>";
     txt +=td1+td2+answer;
     //checkbox.name = "selectedQuestions";
     //checkbox.value = "unchecked";
     //checkbox.id = x;
       //txt += "<tr><td>"+checkbox.value+"</td><td>" + response[x].questionID + "</td><td>"+response[x].questionText+"</td></tr>";
   }
   txt += "</table>"
   document.getElementById("test").innerHTML = txt;
    //document.getElementById("json").innerHTML=response[0].questionText;
  } else {
    alert('There was a problem with the request.');
  }
}
}
function makeRequestData(url) {
httpRequestTest = new XMLHttpRequest();
var data = getResponses();
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
function getResponses(){
var response = JSON.parse(httpRequest.responseText);

var testData=[];
//var questionIDs=[];
//var questionID;
//testData.questionIDs=questionIDs;
for (var i=0; i<response.length; i++){
    testData.push({questionID:
      response[i].questionID,
      questionResponse: document.getElementById(i).value});

  }
  jsonData=JSON.stringify(testData);
  console.log(jsonData);
  return(jsonData);
}

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
