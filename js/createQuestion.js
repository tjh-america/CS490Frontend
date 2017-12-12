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
  var forLoop=document.getElementById("for").checked;
  var ifStatement=document.getElementById("if").checked;
  var whileLoop=document.getElementById("while").checked;
  var numParams=document.getElementById('params').value;
  var difficulty = document.querySelector('input[name = "difficulty"]:checked').value;
  if (forLoop==true){
    forLoop=1;
  }
  else{forLoop=0;}
  if (ifStatement==true){
    ifStatement=1;
  }
  else{ifStatement=0;}
  if (whileLoop==true){
    whileLoop=1;
  }
  else{whileLoop=0;}
  questionData.push({question:
    questionText,
    functionName: functionName,
    difficulty: difficulty,
    forLoop: forLoop,
    whileLoop: whileLoop,
    ifStatement: ifStatement,
    numParams: numParams,
    testCases: testCases
     });
  var jsonData=JSON.stringify(questionData);
  console.log(jsonData);
  return jsonData;
}
function submitQuestion() {
  if (document.getElementById('question').value==""){
    document.getElementById('errors').innerHTML="Please Enter a Question!";
    return 0;
  }
  var table=document.getElementById('testCases');
  tr = table.getElementsByTagName("tr");
  if(tr.length<2) {
    document.getElementById('errors').innerHTML=("Please enter a test case first!");
    return 0;
  }
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
  if (document.getElementById("params").value==""){
    document.getElementById('errors').innerHTML="Please enter the number of parameters!";
    return 0;
  }
  if (document.getElementById("functionName").value==""){
    document.getElementById('errors').innerHTML="No Function name given!";
    return 0;
  }
  if (document.getElementById("testCall").value==""){
    if (document.getElementById('params').value>1){
    document.getElementById('errors').innerHTML="Please add a function call!";
    return 0;
  }
  }
  if (document.getElementById("testResult").value==""){
    document.getElementById('errors').innerHTML="Please add a function Result!";
    return 0;
  }
  var functionCall=document.getElementById("testCall").value;
  var functionResult=document.getElementById("testResult").value;
  var testCaseTable="<tr><td>"+functionCall+"</td><td>"+functionResult+"</td></tr>";
  document.getElementById("testCases").innerHTML+=testCaseTable;
  testCases.push({
      functionCall: functionCall,
      functionResult: functionResult

  });
  document.getElementById('testCall').value="";
  document.getElementById('testResult').value=""
  console.log(JSON.stringify(testCases));
}
