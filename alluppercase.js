function changeToUppercaseAndDisplay() {
var sentence = document.getElementById('sentence').value.trim();
alert(sentence.toUpperCase());
var output = '<p>ENCODING: ' + encode(sentence) + '</p>';
document.getElementById('outputDiv').innerHTML = output;
function encode(aSentence) {
	aSentence.toUpperCase();
	alert(sentence.toUpperCase());
	return aSentence.replace(toUpperCase);
}
}

