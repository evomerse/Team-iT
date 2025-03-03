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
        {
            question: "Quel symbole est utilisé pour commenter une ligne dans un script Bash ?",
            options: ["/* */", "--", "//", "#"],
            answer: "#"
        },
        {
            question: "Quelle ligne est souvent placée en haut d'un script Bash pour spécifier l'interpréteur ?",
            options: ["#!/bin/bash", "#!/usr/bin/python", "#!/bin/sh", "#!/usr/bin/env"],
            answer: "#!/bin/bash"
        },
        {
            question: "Quelle commande permet de donner les droits d'exécution à un script ?",
            options: ["execute script.sh", "chmod +x script.sh", "start script.sh", "allow script.sh"],
            answer: "chmod +x script.sh"
        },
        {
            question: "Quelle commande est utilisée pour afficher un message dans un script Bash ?",
            options: ["print('Bonjour')", "display 'Bonjour'", "msg 'Bonjour'", "echo 'Bonjour'"],
            answer: "echo 'Bonjour'"
        },
        {
            question: "Quelle commande permet de stocker la sortie d'une commande dans une variable ?",
            options: ["var=$(commande)", "var=commande", "var:[commande]", "var <- commande"],
            answer: "var=$(commande)"
        },
        {
            question: "Quel mot-clé est utilisé pour créer une boucle dans un script Bash ?",
            options: ["for", "loop", "repeat", "foreach"],
            answer: "for"
        },
        {
            question: "Quelle commande permet d'attendre quelques secondes avant d'exécuter la suite du script ?",
            options: ["wait 5", "pause 5", "sleep 5", "delay 5"],
            answer: "sleep 5"
        },
        {
            question: "Quel fichier est exécuté automatiquement au démarrage d’un shell Bash ?",
            options: ["~/.profile", "~/.bashrc", "~/.bash_profile", "/etc/bashrc"],
            answer: "~/.bashrc"
        },
    ],
        // Formation 6: Gestion des utilisateurs et permissions
        6: [{
            question: "Quelle commande permet de créer un nouvel utilisateur sous Linux ?",
            options: ["adduser", "newuser", "useradd -d", "createuser"],
            answer: "adduser"
        },
        {
            question: "Comment ajouter un utilisateur à un groupe existant ?",
            options: ["groupadd user group", "usermod -aG group user", "addgroup user group", "modgroup -a user group"],
            answer: "usermod -aG group user"
        },
        {
            question: "Quelle commande permet de modifier le mot de passe d'un utilisateur ?",
            options: ["passwd user", "chpasswd user", "setpass user", "modpass user"],
            answer: "passwd user"
        },
        {
            question: "Quelle commande permet de voir la liste des utilisateurs enregistrés sur un système Linux ?",
            options: ["cat /etc/passwd", "ls -user", "list-users", "whoami"],
            answer: "cat /etc/passwd"
        },
        {
            question: "Quelle est la différence entre les permissions 'r', 'w', et 'x' sous Linux ?",
            options: ["Lire, écrire, exécuter", "Rouge, blanc, xénon", "Root, web, xorg", "Rien, windows, x11"],
            answer: "Lire, écrire, exécuter"
        },
        {
            question: "Comment supprimer un utilisateur et son répertoire personnel ?",
            options: ["deluser --remove-home", "rm -rf /home/user", "userdel -r", "delete user"],
            answer: "userdel -r"
        },
        {
            question: "Quelle commande permet de voir les permissions d’un fichier ou d’un dossier ?",
            options: ["ls -l", "permissions -show", "fileinfo", "permcheck"],
            answer: "ls -l"
        },
        {
            question: "Que signifie la permission '755' sur un fichier ?",
            options: ["Le propriétaire a tous les droits, les autres peuvent lire et exécuter", "Seul root peut lire", "Aucune permission", "Écriture seule pour tous"],
            answer: "Le propriétaire a tous les droits, les autres peuvent lire et exécuter"
        },
        {
            question: "Comment changer le propriétaire d'un fichier sous Linux ?",
            options: ["chown newuser fichier", "change-owner fichier", "setuser fichier", "filemod -owner"],
            answer: "chown newuser fichier"
        },
        {
            question: "Quelle commande permet de changer le groupe propriétaire d'un fichier ?",
            options: ["chgrp", "modgroup", "setgroup", "groupmod"],
            answer: "chgrp"
        }
    ],


    7: [{
            question: "Quelle commande permet d’installer un paquet sous Debian/Ubuntu ?",
            options: ["yum install package", "dnf install package", "apt install package", "rpm -i package"],
            answer: "apt install package"
        },
        {
            question: "Quelle est l’équivalent d’`apt` pour les distributions basées sur Red Hat ?",
            options: ["dnf", "yum", "rpm", "pacman"],
            answer: "dnf"
        },
        {
            question: "Comment mettre à jour la liste des paquets disponibles sous Ubuntu ?",
            options: ["apt update", "pkg upgrade", "yum refresh", "dnf sync"],
            answer: "apt update"
        },
        {
            question: "Quelle commande permet de voir si un paquet est installé ?",
            options: ["dpkg -l package", "pkgcheck package", "check-pkg package", "apt search package"],
            answer: "dpkg -l package"
        },
        {
            question: "Comment désinstaller un paquet avec `apt` sous Debian ?",
            options: ["apt remove package", "apt delete package", "apt uninstall package", "apt purge package"],
            answer: "apt remove package"
        }
    ],

 
    8: [{
            question: "Quelle commande permet de voir les processus en cours d’exécution ?",
            options: ["ps aux", "ls process", "proc -list", "jobs -all"],
            answer: "ps aux"
        },
        {
            question: "Comment tuer un processus en utilisant son identifiant (PID) ?",
            options: ["stop pid", "terminate pid", "kill pid", "remove pid"],
            answer: "kill pid"
        },
        {
            question: "Quelle commande affiche les processus les plus gourmands en ressources ?",
            options: ["top", "uptime", "free -m", "jobs -l"],
            answer: "top"
        },
        {
            question: "Comment démarrer un service sous Linux avec `systemctl` ?",
            options: ["systemctl start service", "service start systemctl", "run servicectl start", "init.d start service"],
            answer: "systemctl start service"
        },
        {
            question: "Quelle commande permet d'afficher les journaux d'un service `systemd` ?",
            options: ["journalctl -u service", "logctl service", "showlogs service", "syslog service"],
            answer: "journalctl -u service"
        }
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
