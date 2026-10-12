const answers = [
    "Azure App Service on pilvipalvelu verkkosovellusten ylläpitoon.",
    "Azure Functions suorittaa koodia tapahtumien perusteella ilman oman palvelimen hallintaa.",
    "Azure SQL Database on pilvipohjainen relaatiotietokanta.",
    "Azure Kubernetes Service on hallittu palvelu konttisovellusten ajamiseen.",
    "Azure Monitor kerää ja analysoi sovellusten ja Azure-resurssien suorituskykytietoja."
];

const button = document.getElementById("showAnswers");

button.addEventListener("click", function () {
    const questions = document.querySelectorAll("body > p");

    questions.forEach(function (question, index) {
        const answer = document.createElement("p");
        answer.textContent = "Vastaus: " + answers[index];
        question.appendChild(answer);
    });

    button.disabled = true;
});