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
      "bonjour": "Bonjour ! Comment puis-je vous aider sur Linux ?",
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
      "grep": "'grep mot fichier' recherche un mot dans un fichier.",
      "find": "'find / -name fichier' recherche un fichier.",
      "tar": "'tar -cvf archive.tar fichiers' crée une archive.",
      "ssh": "'ssh user@host' se connecte à une machine distante.",
      "scp": "'scp fichier user@host:/destination' transfère un fichier.",
      "ping": "'ping adresse' teste la connexion avec un hôte.",
      "df": "'df -h' affiche l'espace disque disponible.",
      "du": "'du -sh fichier' affiche la taille d'un fichier/dossier.",
      "top": "'top' surveille les processus en temps réel.",
      "installation linux": "Téléchargez une distribution (Ubuntu, Debian, etc.) et suivez le guide d'installation.",
      "mise a jour linux": "Utilisez 'sudo apt update && sudo apt upgrade' sur Debian/Ubuntu.",
      "help":"Si vous ne comprenez pas une commande tapez la simplement ici"
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
      if (savedMessages) {
        messagesContainer.innerHTML = savedMessages;
      }
    }

    sendButton.addEventListener("click", function () {
      const userMessage = inputField.value.trim().toLowerCase();
      if (!userMessage) return;

      appendMessage("👤 " + userMessage, "user");
      inputField.value = "";

      setTimeout(() => {
        const botResponse = responses[userMessage] || "Je ne connais pas cette commande, essayez 'man' suivi du nom d'une commande pour en savoir plus.";
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
