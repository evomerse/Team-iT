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
    function showOutput(text, isAnswerCorrect = null) {
        const div = document.createElement('div');
        div.classList.add('line');
        
        // Si la réponse est correcte ou incorrecte, on applique une couleur
        if (isAnswerCorrect === true) {
            div.style.color = 'green'; // Réponse correcte en vert
        } else if (isAnswerCorrect === false) {
            div.style.color = 'red'; // Réponse incorrecte en rouge
        }

        div.innerHTML = text;
        outputDiv.appendChild(div);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    // Fonction pour afficher la question actuelle
    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            showOutput('<br>'); // Ajoute un saut de ligne avant chaque question
            showOutput(questions[currentQuestionIndex].question); // Affiche la question
        } else {
            showOutput("Félicitations, vous avez terminé !");
        }
    }

    // Gérer la commande de l'utilisateur
    function handleCommand(command) {
        const currentQuestion = questions[currentQuestionIndex];

        // Vérifier si la commande correspond à la réponse attendue
        if (currentQuestion.answer.includes(command.toLowerCase())) {
            showOutput('Correct ! Vous avez bien répondu.', true); // Réponse correcte
            currentQuestionIndex++; // Passer à la question suivante
            questionAnswered = true;
            setTimeout(() => {
                if (currentQuestionIndex < questions.length) {
                    showOutput('<br>'); // Ajouter un saut de ligne avant la prochaine question
                    showQuestion(); // Afficher la prochaine question
                }
            }, 1000); // Afficher la prochaine question après 1 seconde
        } else {
            showOutput('Commande incorrecte. Essayez encore.', false); // Réponse incorrecte
        }
    }

    // Début de la session, poser la première question
    showOutput('Bienvenue dans la simulation du terminal Linux.');
    showOutput('<br>');
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