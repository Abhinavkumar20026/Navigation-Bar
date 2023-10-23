const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Event listener for sending messages
sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        // Add user's message to the chat
        appendMessage('user', userMessage);

        // Simulate a bot response (replace with real bot logic)
        setTimeout(() => {
            const botResponse = 'This is a simulated bot response.';
            appendMessage('bot', botResponse);
        }, 1000);

        userInput.value = ''; // Clear the input field
    }
});

// Function to append messages to the chatbox
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `${sender}-message`);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}