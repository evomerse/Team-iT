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
        {
            question: "Quelle commande permet de lister les fichiers et dossiers d'un répertoire ?",
            options: ["pwd", "ls", "cd", "echo"],
            answer: "ls"
        },
        {
            question: "Quelle commande permet de créer un nouveau dossier ?",
            options: ["mkdir", "touch", "rm", "cp"],
            answer: "mkdir"
        },
        {
            question: "Quelle commande permet de supprimer un fichier ?",
            options: ["rm", "mv", "rmdir", "ls"],
            answer: "rm"
        },
        {
            question: "Quelle commande permet de rechercher un mot spécifique dans un fichier ?",
            options: ["grep", "find", "locate", "echo"],
            answer: "grep"
        },
        {
            question: "Quelle commande permet de changer de répertoire ?",
            options: ["cd", "ls", "pwd", "mkdir"],
            answer: "cd"
        },
        {
            question: "Quelle commande permet d'ajouter un utilisateur sous Linux ?",
            options: ["adduser", "usermod", "passwd", "groupadd"],
            answer: "adduser"
        },
        {
            question: "Quelle commande permet d'éteindre proprement un système Linux ?",
            options: ["shutdown /i", "shutdown -h now", "stop now", "off"],
            answer: "shutdown -h now"
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
        {
            question: "Quelle commande permet de changer les droits d'un fichier ?",
            options: ["chmod", "chown", "chgrp", "ls -l"],
            answer: "chmod"
        },
        {
            question: "Quel fichier contient les informations de montage des systèmes de fichiers ?",
            options: ["/var/mount", "/mnt/fstab", "/etc/mount", "/etc/fstab"],
            answer: "/etc/fstab"
        },
        {
            question: "Quelle commande permet d'afficher l'espace disque utilisé sur les partitions ?",
            options: ["du", "df", "lsblk", "fdisk"],
            answer: "df"
        },
        {
            question: "Quel service est utilisé pour gérer les journaux système sous Linux ?",
            options: ["syslog", "crontab", "systemctl", "mount"],
            answer: "syslog"
        },
        {
            question: "Quelle commande permet de programmer une tâche récurrente sous Linux ?",
            options: ["nohup", "at", "systemctl", "crontab"],
            answer: "crontab"
        },
        {
            question: "Quelle commande permet de voir les dernières lignes d'un fichier journal en temps réel ?",
            options: ["cat", "less", "tail -f", "cat"],
            answer: "tail -f"
        },
        {
            question: "Comment ajouter un nouvel utilisateur sous Linux ?",
            options: ["newuser", "useradd", "adduser", "createuser"],
            answer: "useradd"
        },
        {
            question: "Quel fichier définit les mots de passe des utilisateurs sous Linux ?",
            options: ["/etc/shadow", "/etc/passwd", "/home/.passwd", "/var/log/auth.log"],
            answer: "/etc/shadow"
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
        {
            question: "Quelle commande permet de voir les tentatives de connexion échouées ?",
            options: ["dmesg", "faillog", "journalctl", "netstat"],
            answer: "faillog"
        },
        {
            question: "Quel fichier contient les règles du pare-feu iptables ?",
            options: ["/etc/iptables/rules.v4", "/etc/firewall.conf", "/var/log/iptables.log", "/usr/bin/iptables"],
            answer: "/etc/iptables/rules.v4"
        },
        {
            question: "Quelle commande permet de voir les connexions réseau actives ?",
            options: ["top", "chmod", "netstat -tunapl", "ps aux"],
            answer: "netstat -tunapl"
        },
        {
            question: "Quel fichier contient les mots de passe hashés des utilisateurs ?",
            options: ["/etc/passwd", "/etc/shadow", "/var/log/auth.log", "/home/user/.password"],
            answer: "/etc/shadow"
        },
        {
            question: "Quelle commande permet de bloquer un utilisateur ?",
            options: ["passwd -l nom_utilisateur", "userdel nom_utilisateur", "usermod -L nom_utilisateur", "disable-user nom_utilisateur"],
            answer: "usermod -L nom_utilisateur"
        },
        {
            question: "Quel est le but de la commande'sudo'?",
            options: ["Changer les droits d'un fichier", "Modifier les mots de passe des utilisateurs", "Vérifier les journaux système", "Exécuter une commande avec des privilèges élevés"],
            answer: "Exécuter une commande avec des privilèges élevés"
        },
        {
            question: "Quelle commande permet de vérifier les permissions d'un fichier ?",
            options: ["ls -l", "chmod", "whoami", "pwd"],
            answer: "ls -l"
        },
        {
            question: "Quel outil est utilisé pour scanner les vulnérabilités sur un serveur Linux ?",
            options: ["top", "Lynis", "journalctl", "grep"],
            answer: "Lynis"
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
        <div class="question-container mb-3">
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

// Define the function for Terminal page redirection
function redirectToPage() {
    window.location.href = "/Terminal/index.html";
}

// Define the function for cours
function redirectToCours() {
    window.location.href = "/Cours/cours.html";
}
