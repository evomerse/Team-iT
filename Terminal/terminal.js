document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    const inputField = document.getElementById('input');
    
    let questionAnswered = false;

    // Fonction pour afficher du texte dans le terminal
    function showOutput(text) {
        const div = document.createElement('div');
        div.classList.add('line');
        div.textContent = text;
        outputDiv.appendChild(div);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    // Gérer la commande de l'utilisateur
    function handleCommand(command) {
        if (command.toLowerCase() === 'sudo su' || command.toLowerCase() === 'sudo -i') {
            showOutput('Correct ! Vous êtes maintenant en mode super utilisateur.');
            questionAnswered = true;
            showOutput('Passons à la prochaine étape...');
        } else {
            showOutput('Commande incorrecte. Essayez encore.');
        }
    }

    // Début de la session, poser la première question
    showOutput('Bienvenue dans la simulation du terminal Linux.');
    showOutput('Question 1: Quelle est la commande pour passer en mode super utilisateur (sudoer) ?');

    // Écouter l'entrée de l'utilisateur
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = inputField.value.trim();
            showOutput(`$ ${command}`);
            handleCommand(command);
            inputField.value = ''; // Effacer l'input après la commande
        }
    });
});
