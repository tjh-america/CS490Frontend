function makeRequestData(url) {
httpRequestTest = new XMLHttpRequest();
var release = 1;
console.log("line 49");
if (!httpRequestTest) {
  alert('Giving up :( Cannot create an XMLHTTP instance');
  return false;
}
httpRequestTest.onreadystatechange = releaseScores;
  httpRequestTest.open('POST', url);
  httpRequestTest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequestTest.send(release);
}
function releaseScores() {
  console.log(httpRequestTest.responseText);
  document.getElementById('released').innerHTML=httpRequestTest.responseText;
}
