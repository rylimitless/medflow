const messages = {
    Alice: [],
    Bob: [],
    Charlie: []
};

let currentUser = '';

function selectUser(username) {
    currentUser = username;
    const selectedUserDiv = document.getElementById('selectedUser');
    selectedUserDiv.innerHTML = `
        <span>${username}</span>
        <div class="icon-container">
            <i class="fas fa-phone" title="Call"></i>
            <i class="fas fa-video" title="Video Call"></i>
        </div>
    `;
    displayMessages(username);
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message && currentUser) {
        messages[currentUser].push(message);
        displayMessages(currentUser);
        messageInput.value = '';
    }
}

function displayMessages(username) {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = '';
    messages[username].forEach(message => {
        const messageBubble = document.createElement('div');
        messageBubble.className = 'chat-bubble';
        messageBubble.textContent = message;
        chatWindow.appendChild(messageBubble);
    });
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}