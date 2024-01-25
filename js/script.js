function runTypingEffect() {
  const text = "I am Muhammad Awais.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, typingDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, typingDelay * i);
  }
}

// Set Current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
console.log(currentYear);

document.addEventListener("DOMContentLoaded", runTypingEffect);
