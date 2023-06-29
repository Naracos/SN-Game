function checkAnswers() {
    var userInput = document.querySelector('input[name="q1"]').value.toLowerCase(); // Récupère la valeur saisie par l'utilisateur et la convertit en minuscules

    if (userInput === "lycée professionnel de l'estuaire") {
        window.location.href = "../indices/indice2.html";
    } else {
        document.getElementById("result").innerHTML = "Mauvaise réponse. Recommencez.";
    }
}