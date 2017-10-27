// Copy button
document.getElementsByClassName("primary")[0].onclick = function(e) {
    var text = document.getElementsByClassName('signature')[0];
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    //add to clipboard.
    document.execCommand('copy');
};

// Inizitalice signature
document.getElementsByTagName('td')[2].innerText = document.getElementById('name').placeholder
document.getElementsByTagName('td')[3].innerText = document.getElementById('title').placeholder
document.getElementsByTagName('td')[4].innerText = document.getElementById('phone').placeholder
document.getElementsByTagName('a')[1].href = document.getElementById('email').placeholder
document.getElementsByTagName('a')[1].innerText = "mailto:" + document.getElementById('email').placeholder

// Set signature with key press
var timerHandle = false; // global!
function setTimerName(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffName,500); // delay is in milliseconds
}
function sendItOffName() {
    what = document.getElementById("name").value;
    document.getElementsByTagName('td')[2].innerText = what
}

function setTimerTitle(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffTitle,500); // delay is in milliseconds
}
function sendItOffTitle() {
    what = document.getElementById("title").value;
    document.getElementsByTagName('td')[3].innerText = what
}

function setTimerPhone(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffPhone,500); // delay is in milliseconds
}
function sendItOffPhone() {
    what = document.getElementById("phone").value;
    document.getElementsByTagName('td')[4].innerText = what
}

function setTimerEmail(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffEmail,500); // delay is in milliseconds
}
function sendItOffEmail() {
    what = document.getElementById("email").value;
    document.getElementsByTagName('a')[1].innerText = what
    document.getElementsByTagName('a')[1].href = "mailto:" + what
}
