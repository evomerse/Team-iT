document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    const inputField = document.getElementById('input');
    
    let currentQuestionIndex = 0; // Suivre l'indice de la question courante
    let questionAnswered = false; // Variable pour savoir si la question a été répondue correctement

    // Liste des questions et des réponses
    const questions = [
        {
            question: "Quelle est la commande pour passer en mode super utilisateur (sudo) ?",
            answer: ["sudo su", "sudo -i"]
        },
        {
            question: "Quelle commande permet de lister les fichiers dans un répertoire ?",
            answer: ["ls"]
        },
        {
            question: "Quelle commande permet de vérifier l'espace disque disponible ?",
            answer: ["df"]
        },
        {
            question: "Quelle commande permet de changer de répertoire dans le terminal ?",
            answer: ["cd"]
        },
        {
            question: "Quelle commande permet de visualiser le contenu d'un fichier texte ?",
            answer: ["cat"]
        }
    ];

    // Fonction pour afficher du texte dans le terminal
    function showOutput(text) {
        const div = document.createElement('div');
        div.classList.add('line');
        div.textContent = text;
        outputDiv.appendChild(div);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    // Fonction pour afficher la question actuelle
    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            showOutput(questions[currentQuestionIndex].question);
        } else {
            showOutput("Félicitations, vous avez terminé !");
        }
    }

    // Gérer la commande de l'utilisateur
    function handleCommand(command) {
        const currentQuestion = questions[currentQuestionIndex];

        // Vérifier si la commande correspond à la réponse attendue
        if (currentQuestion.answer.includes(command.toLowerCase())) {
            showOutput('Correct ! Vous avez répondu correctement.');
            currentQuestionIndex++; // Passer à la question suivante
            questionAnswered = true;
            setTimeout(() => {
                if (currentQuestionIndex < questions.length) {
                    showQuestion(); // Afficher la prochaine question
                }
            }, 1000); // Afficher la prochaine question après 1 seconde
        } else {
            showOutput('Commande incorrecte. Essayez encore.');
        }
    }

    // Début de la session, poser la première question
    showOutput('Bienvenue dans la simulation du terminal Linux.');
    showQuestion(); // Affiche la première question

    // Écouter l'entrée de l'utilisateur
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = inputField.value.trim();
            showOutput(`$ ${command}`);
            handleCommand(command); // Gérer la commande de l'utilisateur
            inputField.value = ''; // Effacer l'input après la commande
        }
    });
});