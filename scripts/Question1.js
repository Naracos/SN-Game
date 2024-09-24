function sendData(data) {
    var XHR = new XMLHttpRequest();
    var LaReponse = document.getElementById('Reponse').getElementsByName('p')[0].innerHTML;
XHR.send(LaReponse); }