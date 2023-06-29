function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked').value;

	if (q1 == "a") {
		document.location.href="../qcm-html/QuestionTEXT-devinci1.html"; 
	} if (q1 == "b") {
		document.location.href="../qcm-html/Question-devinci3.html"; 
	} if (q1 == "c") {
        document.location.href="../qcm-html/Question-devinci5.html"
    }

}

function textAnswers() {
	var userInput = document.querySelector('input[name="q2"]').value.toLowerCase(); // Récupère la valeur saisie par l'utilisateur et la convertit en minuscules

    if (userInput === "amboise") {
        window.location.href = "../salles.html";
    } else {
        document.getElementById("result").window.location.href = "../salles/salle-louisXIV.html";
    }
	
	
}


