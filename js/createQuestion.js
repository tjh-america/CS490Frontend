var testCases=[];
function makeRequestData(url) {
  var data = getQuestion();
  testCases=JSON.stringify(testCases);
  //console.log(data);
  httpRequestTest = new XMLHttpRequest();

  if (!httpRequestTest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequestTest.onreadystatechange = submitQuestion;
    httpRequestTest.open('POST', url);
    httpRequestTest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequestTest.send(data, testCases);
}
function getQuestion(){
  var questionText=document.getElementById("question").value;
  var functionName=document.getElementById("functionName").value;
  var questionData=[];
  questionData.push({question:
    questionText,
    functionName: functionName,
    testCases: testCases });
  var jsonData=JSON.stringify(questionData);
  console.log(jsonData);
  return jsonData;
}
function submitQuestion() {
if (httpRequestTest.readyState === XMLHttpRequest.DONE) {
  if (httpRequestTest.status === 200) {
    var submittedQuestion = httpRequestTest.responseText;
    var div=document.createElement("div");
    var text = document.createTextNode(submittedQuestion);
    div.appendChild(text);
    document.body.appendChild(div);
    //document.getElementById("testSuccess").innerHTML=createdTest;
  } else {
    alert('There was a problem with the request.');
  }
}
}
function addTestCase(testCases) {
  var functionCall=document.getElementById("testCall").value;
  var functionResult=document.getElementById("testResult").value;
  var testCaseTable="<tr><td>"+functionCall+"</td><td>"+functionResult+"</td></tr>";
  document.getElementById("testCases").innerHTML+=testCaseTable;
  testCases.push({
      functionCall: functionCall,
      functionResult: functionResult

  });
  console.log(JSON.stringify(testCases));
}
