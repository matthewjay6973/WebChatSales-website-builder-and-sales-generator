// ===== WebChatSales JavaScript =====

// Navigation toggle for mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-btn");
  const navLinks = document.querySelector("#nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Example: simple chatbot demo logic
  const chatForm = document.querySelector("#chat-form");
  const chatInput = document.querySelector("#chat-input");
  const chatWindow = document.querySelector("#chat-window");

  if (chatForm && chatInput && chatWindow) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = chatInput.value.trim();
      if (!msg) return;

      // Add user message
      const userBubble = document.createElement("div");
      userBubble.className = "bubble user";
      userBubble.textContent = msg;
      chatWindow.appendChild(userBubble);

      // Fake bot reply (placeholder until backend/AI connects)
      const botBubble = document.createElement("div");
      botBubble.className = "bubble bot";
      botBubble.textContent = "🤖 Thanks for your message! WebChatSales AI will respond soon.";
      chatWindow.appendChild(botBubble);

      chatInput.value = "";
      chatWindow.scrollTop = chatWindow.scrollHeight;
    });
  }
});