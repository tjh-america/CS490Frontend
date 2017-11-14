function releaseScores(url) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  //httpRequest.onreadystatechange = createTestBank;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send();
}
//function releaseScores() {
  //console.log(httpRequestTest.responseText);
  //document.getElementById('released').innerHTML=httpRequestTest.responseText;
//}
