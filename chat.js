document.getElementById('sendButton').addEventListener('click', function() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();

    if (message) {
        const chatBox = document.getElementById('chatBox');

        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;

        // Append the new message to the chat box
        chatBox.appendChild(messageElement);

        // Clear the input field
        input.value = '';

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

// Optional: Add enter key support for sending messages
document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default newline behavior
        document.getElementById('sendButton').click();
    }
});
