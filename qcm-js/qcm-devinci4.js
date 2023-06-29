function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked').value;

	if (q1 == "b") {
		document.location.href="../qcm-html/QuestionTEXT-devinci2.html"; 
	} else {
		document.getElementById("result").innerHTML = "Mauvaise réponse. Recommencez.";
	}
}
