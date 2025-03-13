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
  };

  function appendMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("chatbot-message", sender);
    message.textContent = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function getCommandFromText(text) {
    for (const cmd in responses) {
      if (text.includes(cmd)) {
        return cmd;
      }
    }
    return null;
  }

  async function searchLinuxCommand(query) {
    try {
      const response = await fetch(`https://cheat.sh/${query}?style=plain`);
      const data = await response.text();

      if (data && data.length > 0) {
        return data;
      } else {
        return "Je ne connais pas cette commande, mais vous pouvez consulter la documentation Linux en ligne.";
      }
    } catch (error) {
      return "Impossible d'effectuer une recherche pour le moment.";
    }
  }

  sendButton.addEventListener("click", async function () {
    const userMessage = inputField.value.trim().toLowerCase();
    if (!userMessage) return;
    appendMessage("👤 " + userMessage, "user");
    inputField.value = "";

    setTimeout(async () => {
      let botResponse;
      const detectedCommand = getCommandFromText(userMessage);
      if (detectedCommand) {
        botResponse = responses[detectedCommand];
      } else {
        botResponse = await searchLinuxCommand(userMessage);
      }
      appendMessage("🤖 " + botResponse, "bot");
    }, 500);
  });

  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendButton.click();
  });

  clearButton.addEventListener("click", function () {
    messagesContainer.innerHTML = "";
  });

  closeChat.addEventListener("click", function () {
    chatbotContainer.style.display = "none";
  });

  appendMessage("🤖 Bonjour ! Posez-moi une question sur Linux.", "bot");
});
