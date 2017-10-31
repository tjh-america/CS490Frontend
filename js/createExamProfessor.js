var points=[];
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
var id;
function createTestBank() {
if (httpRequest.readyState === XMLHttpRequest.DONE) {
  if (httpRequest.status === 200) {
    var response = JSON.parse(httpRequest.responseText);
   var txt = "<table border='1'><tr><th>Select Question</th><th>Question ID</th><th>Question</th><th>Points</th></tr>";
   for (x in response) {
     var checkbox = document.createElement('input');
     checkbox.type = "checkbox";
     var chk="<tr><td><input type='checkbox' onclick='checkTestBank()' name='questionCheck' id='"+x+"' /></td>";
     var td1="<td>"+response[x].questionID+"</td>";
     var td2="<td>"+response[x].questionText+"</td>"
     id=response[x].questionID;
     var td3="<td id='points"+x+"'><input type='number' size='2' min='1' max='100' id='"+id+"'></td><tr>"
     txt +=chk+td1+td2+td3;
     //checkbox.name = "selectedQuestions";
     //checkbox.value = "unchecked";
     //checkbox.id = x;
       //txt += "<tr><td>"+checkbox.value+"</td><td>" + response[x].questionID + "</td><td>"+response[x].questionText+"</td></tr>";
   }
   txt += "</table>"
   document.getElementById("questionBank").innerHTML = txt;
    //document.getElementById("json").innerHTML=response[0].questionText;
  } else {
    alert('There was a problem with the request.');
  }
}
}
function getPoints(id){
  points[id]=document.getElementById(id).value;
  console.log(points[id]);
  return points[id];
}
function checkTestBank(){
var response = JSON.parse(httpRequest.responseText);
var checkBoxes=document.getElementsByName('questionCheck');
var txt ="<table border='1'><tr><th>Selected Questions:</th></tr><tr>";
var questionID=[];
var points=[];
var num=20;

var testData=[];
//var questionIDs=[];
//var questionID;
//testData.questionIDs=questionIDs;
for (var i=0; i<checkBoxes.length; i++){
  if (checkBoxes[i].checked){
    var td1="<td>"+response[i].questionText+"</td></tr>";
    testData.push({
        questionID: response[i].questionID,
        points: getPoints(response[i].questionID)

    });
    //testData.push({questionID: response[i].questionID,
      //points: num});


    txt+=td1;

  }

}
txt+="</table>"
document.getElementById("testQuestions").innerHTML=txt;
var jsonData=JSON.stringify(testData);
console.log(jsonData);
return jsonData;
}
function makeRequestData(url) {
var data = checkTestBank();
console.log(data);
httpRequestTest = new XMLHttpRequest();

if (!httpRequestTest) {
  alert('Giving up :( Cannot create an XMLHTTP instance');
  return false;
}
httpRequestTest.onreadystatechange = createTest;
  httpRequestTest.open('POST', url);
  httpRequestTest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequestTest.send(data);
}
function createTest() {
if (httpRequestTest.readyState === XMLHttpRequest.DONE) {
if (httpRequestTest.status === 200) {
  var createdTest = httpRequestTest.responseText;
  var div=document.createElement("div");
  var text = document.createTextNode(createdTest);
  div.appendChild(text);
  document.body.appendChild(div);
  //document.getElementById("testSuccess").innerHTML=createdTest;
} else {
  alert('There was a problem with the request.');
}
}
}
