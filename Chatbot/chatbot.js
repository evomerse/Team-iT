document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.createElement("div");
  chatbotContainer.id = "chatbot";
  chatbotContainer.innerHTML = `
    <div id="chatbot-header">💬 Chatbot Linux <span id="close-chat">✖</span></div>
    <div id="chatbot-messages"></div>
    <input type="text" id="chatbot-input" placeholder="Posez votre question..." />
    <button id="chatbot-send">Envoyer</button>
    <button id="clear-chat">Effacer</button>
  `;
  document.body.appendChild(chatbotContainer);

  const chatIcon = document.createElement("div");
  chatIcon.id = "chatbot-icon";
  chatIcon.innerHTML = "💬";
  chatIcon.style.position = "fixed";
  chatIcon.style.bottom = "20px";
  chatIcon.style.right = "20px";
  chatIcon.style.background = "#ff7f40";
  chatIcon.style.color = "white";
  chatIcon.style.padding = "10px";
  chatIcon.style.borderRadius = "50%";
  chatIcon.style.cursor = "pointer";
  chatIcon.style.display = "none";
  document.body.appendChild(chatIcon);

  const messagesContainer = document.getElementById("chatbot-messages");
  const inputField = document.getElementById("chatbot-input");
  const sendButton = document.getElementById("chatbot-send");
  const clearButton = document.getElementById("clear-chat");
  const closeChat = document.getElementById("close-chat");


  const responses = {
    "ls": "'ls' liste les fichiers et dossiers dans un répertoire.",
    "cd": "'cd' permet de changer de répertoire.",
    "pwd": "'pwd' affiche le chemin du répertoire courant.",
    "mkdir": "'mkdir NOM' crée un nouveau dossier.",
    "rm": "'rm NOM' supprime un fichier, utilisez '-r' pour un dossier.",
    "cp": "'cp fichier destination' copie un fichier.",
    "mv": "'mv fichier destination' déplace un fichier.",
    "chmod": "'chmod 777 fichier' modifie les permissions.",
    "chown": "'chown user:group fichier' change le propriétaire.",
    "ps": "'ps' affiche les processus en cours.",
    "kill": "'kill PID' termine un processus.",
    "top": "'top' surveille les processus en temps réel.",
    "apt": "'apt' est utilisé pour gérer les paquets sous Debian/Ubuntu.",
    "man": "'man commande' affiche le manuel d'une commande.",
    "echo": "'echo' affiche un message ou une variable.",
    "cat": "'cat fichier' affiche le contenu d'un fichier.",
    "grep": "'grep' permet de rechercher un texte dans un fichier.",
    "df": "'df' affiche l'espace disque utilisé et disponible.",
    "du": "'du' affiche la taille des fichiers et répertoires.",
    "tar": "'tar' archive ou extrait des fichiers.",
    "gzip": "'gzip' compresse un fichier.",
    "gunzip": "'gunzip' décompresse un fichier compressé avec gzip.",
    "chmod": "'chmod' modifie les permissions d'un fichier.",
    "chgrp": "'chgrp' change le groupe d'un fichier.",
    "ln": "'ln' crée des liens symboliques.",
    "find": "'find' recherche des fichiers et dossiers.",
    "locate": "'locate' recherche rapidement des fichiers en utilisant une base de données.",
    "which": "'which' localise un programme dans le chemin.",
    "hostname": "'hostname' affiche ou modifie le nom de l'hôte.",
    "uptime": "'uptime' affiche depuis combien de temps le système fonctionne.",
    "w": "'w' montre qui est connecté et ce qu'ils font.",
    "who": "'who' affiche les utilisateurs actuellement connectés.",
    "whoami": "'whoami' affiche l'utilisateur actuel.",
    "id": "'id' affiche l'ID de l'utilisateur et du groupe.",
    "last": "'last' affiche les derniers utilisateurs connectés.",
    "shutdown": "'shutdown' éteint ou redémarre l'ordinateur.",
    "reboot": "'reboot' redémarre le système.",
    "service": "'service' permet de contrôler les services système.",
    "systemctl": "'systemctl' permet de gérer les services et le système.",
    "journalctl": "'journalctl' permet d'afficher les logs du système.",
    "iptables": "'iptables' permet de configurer le pare-feu Linux.",
    "curl": "'curl' permet de télécharger des fichiers depuis une URL.",
    "wget": "'wget' permet de télécharger des fichiers depuis une URL.",
    "ping": "'ping' teste la connectivité réseau.",
    "traceroute": "'traceroute' trace le chemin d'un paquet réseau.",
    "ifconfig": "'ifconfig' configure ou affiche les interfaces réseau.",
    "ip": "'ip' est une commande pour la gestion des interfaces réseau.",
    "netstat": "'netstat' affiche les connexions réseau et les statistiques.",
    "ss": "'ss' est une alternative plus rapide à netstat pour les connexions réseau.",
    "route": "'route' affiche ou configure les tables de routage.",
    "nmcli": "'nmcli' permet de configurer les réseaux en ligne de commande.",
    "sed": "'sed' permet de faire des substitutions de texte dans un fichier.",
    "awk": "'awk' est un langage de programmation pour le traitement de texte.",
    "sort": "'sort' trie les lignes d'un fichier.",
    "uniq": "'uniq' filtre les lignes dupliquées dans un fichier.",
    "cut": "'cut' extrait des sections d'un fichier.",
    "tee": "'tee' lit depuis l'entrée standard et écrit dans un ou plusieurs fichiers.",
    "diff": "'diff' compare deux fichiers ligne par ligne.",
    "cmp": "'cmp' compare deux fichiers octet par octet.",
    "patch": "'patch' applique des changements à des fichiers.",
    "xargs": "'xargs' construit et exécute des commandes à partir de l'entrée standard.",
    "sed": "'sed' édite un flux de texte.",
    "echo": "'echo' affiche une ligne de texte.",
    "bc": "'bc' est une calculatrice de précision arbitraire.",
    "passwd": "'passwd' change le mot de passe de l'utilisateur.",
    "adduser": "'adduser' permet d'ajouter un nouvel utilisateur.",
    "userdel": "'userdel' supprime un utilisateur.",
    "groupadd": "'groupadd' permet d'ajouter un groupe.",
    "groupdel": "'groupdel' supprime un groupe.",
    "chage": "'chage' modifie les informations de mot de passe d'un utilisateur.",
    "usermod": "'usermod' modifie les informations d'un utilisateur.",
    "groupmod": "'groupmod' modifie les informations d'un groupe.",
    "mount": "'mount' permet de monter un système de fichiers.",
    "umount": "'umount' démonte un système de fichiers.",
    "fsck": "'fsck' vérifie et répare un système de fichiers.",
    "dd": "'dd' copie et convertit des fichiers.",
    "fdisk": "'fdisk' permet de partitionner un disque.",
    "mkfs": "'mkfs' permet de créer un système de fichiers sur une partition.",
    "fsfreeze": "'fsfreeze' gèle un système de fichiers pour des sauvegardes.",
    "tune2fs": "'tune2fs' permet de configurer un système de fichiers ext2/ext3/ext4.",
    "smartctl": "'smartctl' permet de surveiller l'état des disques durs.",
    "lsof": "'lsof' liste les fichiers ouverts par les processus.",
    "strace": "'strace' trace les appels système et les signaux.",
    "htop": "'htop' est un visualiseur interactif des processus système.",
    "atop": "'atop' est un outil de surveillance des performances système.",
    "iotop": "'iotop' affiche l'utilisation d'IO des processus.",
    "ncdu": "'ncdu' permet de visualiser l'utilisation de l'espace disque.",
    "tree": "'tree' affiche l'arborescence d'un répertoire.",
    "alias": "'alias' permet de créer des raccourcis pour des commandes.",
    "unalias": "'unalias' permet de supprimer un alias.",
    "history": "'history' affiche l'historique des commandes exécutées.",
    "bash": "'bash' est un interpréteur de commandes.",
    "zsh": "'zsh' est un autre interpréteur de commandes.",
    "sh": "'sh' est un interpréteur de commandes standard.",
    "exit": "'exit' ferme le terminal ou termine un script.",
    "clear": "'clear' nettoie l'écran du terminal.",
    "reset": "'reset' réinitialise le terminal.",
    "alias": "'alias' crée des raccourcis pour les commandes.",
    "unalias": "'unalias' supprime un alias de commande.",
    "env": "'env' affiche les variables d'environnement.",
    "export": "'export' définit des variables d'environnement.",
    "set": "'set' affiche ou modifie les variables shell.",
    "unset": "'unset' supprime une variable d'environnement.",
    "help": "Pour m'utiliser mettez simplement le nom d'une commande (Exemple : ls) et je vous expliquerai à quoi cette commande sert"
  };

  function appendMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("chatbot-message", sender);
    message.textContent = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function saveMessages() {
    localStorage.setItem("chatbotMessages", messagesContainer.innerHTML);
  }

  function loadMessages() {
    const savedMessages = localStorage.getItem("chatbotMessages");
    
    if (!savedMessages) {
        appendMessage("🤖 Bonjour ! Bienvenue sur ChatBot Linux. N'hésite pas à venir vers moi si tu as une question sur des commandes que tu ne connais pas 😉", "bot");
    } else {
        messagesContainer.innerHTML = savedMessages;
    }
  }

  function findCommand(userMessage) {
    for (let command in responses) {
      if (userMessage.includes(command)) {
        return responses[command]; // Retourne la réponse associée à la commande
      }
    }
    return "Je ne connais pas cette commande, essayez de faire une recherche sur internet pour en savoir plus :)";
  }

  sendButton.addEventListener("click", function () {
    const userMessage = inputField.value.trim().toLowerCase();
    if (!userMessage) return;

    appendMessage("👤 " + userMessage, "user");
    inputField.value = "";

    setTimeout(() => {
      const botResponse = findCommand(userMessage); // Recherche la commande
      appendMessage("🤖 " + botResponse, "bot");
      saveMessages();
    }, 500);
  });

  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendButton.click();
  });

  clearButton.addEventListener("click", function () {
    messagesContainer.innerHTML = "";
    localStorage.removeItem("chatbotMessages");
  });

  closeChat.addEventListener("click", function () {
    chatbotContainer.style.display = "none";
    chatIcon.style.display = "block";
  });

  chatIcon.addEventListener("click", function () {
    chatbotContainer.style.display = "block";
    chatIcon.style.display = "none";
  });

  loadMessages();
});
