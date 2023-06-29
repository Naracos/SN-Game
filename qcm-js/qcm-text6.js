function checkAnswers() {
    var userInput = document.querySelector('input[name="q1"]').value.toLowerCase(); // Récupère la valeur saisie par l'utilisateur et la convertit en minuscules

    if (userInput === "3,1415926535") {
        window.location.href = "../indices/indice3.html";
    } if (userInput === "3.1415926535") {
        window.location.href = "../indices/indice3.html";
    } 
    else {
        document.getElementById("result").innerHTML = "Mauvaise réponse. Recommencez.";
    }
}