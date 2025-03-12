document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "chatbot";
    chatbotContainer.innerHTML = `
      <div id="chatbot-header">💬 Chatbot Linux <span id="close-chat">✖</span></div>
      <div id="chatbot-messages"></div>
      <input type="text" id="chatbot-input" placeholder="Posez votre question..." />
      <button id="chatbot-send">Envoyer</button>
    `;
    document.body.appendChild(chatbotContainer);
  
    const messagesContainer = document.getElementById("chatbot-messages");
    const inputField = document.getElementById("chatbot-input");
    const sendButton = document.getElementById("chatbot-send");
    const closeChat = document.getElementById("close-chat");
  
    const responses = {
      "bonjour": "Bonjour ! Comment puis-je vous aider sur Linux ?",
      "commande ls": "La commande 'ls' liste les fichiers et dossiers dans un répertoire.",
      "commande cd": "La commande 'cd' permet de changer de répertoire.",
      "installation linux": "Vous pouvez installer Linux en téléchargeant une distribution comme Ubuntu depuis son site officiel et en suivant le guide d'installation."
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
        const botResponse = responses[userMessage] || "Désolé, je ne connais pas cette commande. Essayez autre chose !";
        appendMessage("🤖 " + botResponse, "bot");
        saveMessages();
      }, 500);
    });
  
    inputField.addEventListener("keypress", function (e) {
      if (e.key === "Enter") sendButton.click();
    });
  
    closeChat.addEventListener("click", function () {
      chatbotContainer.style.display = "none";
    });
  
    loadMessages(); // Charge les messages sauvegardés après un changement de page
  });
  
  