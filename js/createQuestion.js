function makeRequestData(url) {
  var data = getQuestion();
  console.log(data);
  httpRequestTest = new XMLHttpRequest();

  if (!httpRequestTest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequestTest.onreadystatechange = submitQuestion;
    httpRequestTest.open('POST', url);
    httpRequestTest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequestTest.send(data);
}
function getQuestion(){
  var data=document.getElementById("question").value;
  var jsonData=JSON.stringify(data);
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
