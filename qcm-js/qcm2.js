function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked').value;

	if (q1 == "b") {
		document.location.href="Question3.html"; 
	} else {
		document.getElementById("result").innerHTML = "Mauvaise réponse. La bonne réponse est : La Conduction.";
	}
}
