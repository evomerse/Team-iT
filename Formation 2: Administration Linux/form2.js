        /*JavaScript intégré*/
        const questions = {
            1: [{
                    question: "Quelle commande affiche le contenu d'un fichier ?",
                    options: ["ls", "cat", "cd", "mv"],
                    answer: "cat"
                },
                {
                    question: "Quelle commande permet de changer les permissions d'un fichier ?",
                    options: ["chmod", "chown", "ls", "pwd"],
                    answer: "chmod"
                },
                {
                    question: "Quelle commande affiche le chemin actuel ?",
                    options: ["pwd", "ls", "cd", "echo"],
                    answer: "pwd"
                },
            ],
            2: [{
                    question: "Quel fichier contient les utilisateurs sous Linux ?",
                    options: ["/etc/passwd", "/etc/shadow", "/var/log", "/etc/hosts"],
                    answer: "/etc/passwd"
                },
                {
                    question: "Quel outil permet de superviser les processus en temps réel ?",
                    options: ["top", "ps", "kill", "df"],
                    answer: "top"
                },
            ],
            3: [{
                    question: "Quelle commande est utilisée pour changer les permissions ?",
                    options: ["chmod", "ps", "top", "sudo"],
                    answer: "chmod"
                },
                {
                    question: "Quel est le rôle de SELinux ?",
                    options: ["Sécuriser les processus", "Gérer les fichiers", "Afficher les utilisateurs", "Changer les permissions"],
                    answer: "Sécuriser les processus"
                },
            ],
            4: [{
                    question: "Quel langage est couramment utilisé pour les scripts Linux ?",
                    options: ["Python", "Java", "Bash", "C++"],
                    answer: "Bash"
                },
                {
                    question: "Quelle commande exécute un script Bash ?",
                    options: ["bash script.sh", "run script.sh", "execute script.sh", "start script.sh"],
                    answer: "bash script.sh"
                },
            ]
        };
        
        function startQuiz(formationId) {
            const homePage = document.getElementById('homePage');
            const quizPage = document.getElementById('quizPage');
            const questionsContainer = document.getElementById('questionsContainer');
            const resultContainer = document.getElementById('resultContainer');
            const quizQuestions = questions[formationId] || [];
        
            homePage.style.display = 'none';
            quizPage.style.display = 'block';
            resultContainer.innerHTML = '';
        
            questionsContainer.innerHTML = quizQuestions.map((q, index) => `
                <div class="mb-3">
                    <label class="form-label">${index + 1}. ${q.question}</label>
                    ${q.options.map(option => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q${index}" value="${option}">
                            <label class="form-check-label">${option}</label>
                        </div>
                    `).join('')}
                </div>
            `).join('');
        
            document.getElementById('quizForm').onsubmit = function(e) {
                e.preventDefault();
                let score = 0;
                let results = '';
                quizQuestions.forEach((q, index) => {
                    const selected = document.querySelector(`input[name="q${index}"]:checked`);
                    const answer = selected ? selected.value : null;
                    if (answer === q.answer) {
                        score++;
                    } else {
                        results += `<p>Question ${index + 1}: Mauvaise réponse. La bonne réponse est <strong>${q.answer}</strong>.</p>`;
                    }
                });
        
                resultContainer.innerHTML = `
                    <h4>Résultat : ${score} / ${quizQuestions.length}</h4>
                    ${results}
                `;
            };
        }