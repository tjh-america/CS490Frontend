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
   var txt = "<table id='questions' border='1'><tr><th>Select Question</th><th>Question ID</th><th>Question</th><th>If Statement?</th><th>While Loop?</th><th>For Loop?</th><th>Points</th></tr>";
   for (x in response) {
     var forLoop=response[x].forLoop;
     var whileLoop=response[x].whileLoop;
     var ifStatement=response[x].ifStatement;
     if (forLoop==1){
       forLoop="Yes";
     }
     else{forLoop="No"}
     if (whileLoop==1){
       whileLoop="Yes";
     }
     else{whileLoop="No"}
     if (ifStatement==1){
       ifStatement="Yes";
     }
     else{ifStatement="No"}
     var checkbox = document.createElement('input');
     checkbox.type = "checkbox";
     var chk="<tr><td><input type='checkbox' onclick='checkTestBank()' name='questionCheck' id='"+x+"' /></td>";
     var td1="<td>"+response[x].questionID+"</td>";
     var td2="<td>"+response[x].questionText+"</td>"
     id=response[x].questionID;
     var td6="<td id='points"+x+"'><input type='number' size='2' min='0' max='100' value='0' id='"+id+"'></td></tr>"
     var td3="<td>"+ifStatement+"</td>";
     var td4="<td>"+whileLoop+"</td>";
     var td5="<td>"+forLoop+"</td>";
     txt +=chk+td1+td2+td3+td4+td5+td6;
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
function searchQuestions() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("questions");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function searchByType(x){
  if (document.getElementById(x).checked==true){
    var input="Yes";
  }
  else {
  input ="";
}
table = document.getElementById("questions");
tr = table.getElementsByTagName("tr");
for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[x];
  if (td) {
    if (td.innerHTML.indexOf(input)>-1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
if (x==3){
  searchByType(4);
  searchByType(5);
  }
  else if(x==4){
    searchByType(3);
    searchByType(5);
  }
  else if(x==5){
    searchByType(3);
    searchByType(5);
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
var txt ="<table border='1'><tr><th>Selected Questions:</th><th>Points</tr><tr>";
var questionID=[];
var points=[];
var num=20;

var testData=[];
//var questionIDs=[];
//var questionID;
//testData.questionIDs=questionIDs;
for (var i=0; i<checkBoxes.length; i++){
  if (checkBoxes[i].checked){
    var table = document.getElementById("questions");
    var tr = table.getElementsByTagName("tr");
    console.log(tr);
    var td = tr[i+1].getElementsByTagName("td")[6].innerHTML;
    console.log(td);
    if (getPoints(i+168)<1){
      document.getElementById('errors').innerHTML="Please add one or more points!";
      return 0;
    }
    else {
    var td1="<td>"+response[i].questionText+"</td><td>"+getPoints(response[i].questionID)+"</td></tr>";
    testData.push({
        questionID: response[i].questionID,
        points: getPoints(response[i].questionID)
      });
    document.getElementById("errors").innerHTML="";
    //testData.push({questionID: response[i].questionID,
      //points: num});


    txt+=td1;

  }
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
  var table=document.getElementById('testQuestions');
  tr = table.getElementsByTagName("tr");
  console.log(tr);
  if(2>=tr.length) {
    document.getElementById("errors").innerHTML="Please select at least two questions!";
    return 0;
  }
if (httpRequestTest.readyState === XMLHttpRequest.DONE) {
if (httpRequestTest.status === 200) {
  var createdTest = httpRequestTest.responseText;
  var div=document.createElement("div");
  var text = document.createTextNode(createdTest);
  div.appendChild(text);
  document.body.appendChild(div);
  document.getElementById("testSuccess").innerHTML=httpRequestTest.response;
} else {
  alert('There was a problem with the request.');
}
}
}
