const text = "What's on my mind 24/7?";
  const typingTextElement = document.getElementById('typing-text');

  function typeText() {
    let index = 0;
    const intervalId = setInterval(() => {
      typingTextElement.textContent = text.slice(0, index) + '|';
      index++;

      if (index > text.length) {
        clearInterval(intervalId);
        // Remove the blinking cursor after typing is complete
        typingTextElement.textContent = text;
      }
    }, 100); // Adjust the interval as needed
  }

  // Trigger the typing effect
  typeText();