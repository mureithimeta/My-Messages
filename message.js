const messages = [
    { sender: 'John', content: 'Hey, what\'s up?', time: '3:14 PM' },
    { sender: 'Jane', content: 'Can you pick up some milk on your way home?', time: '2:30 PM' },
    { sender: 'Bob', content: 'Are you free for lunch tomorrow?', time: '11:45 AM' }
  ];
  
  const messageList = document.querySelector('#message-list ul');
  
  // Function to display the messages on the page
  function displayMessages() {
    // Clear the existing messages from the list
    messageList.innerHTML = '';
  
    // Loop through the messages and create a new list item for each one
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
  
      const li = document.createElement('li');
      li.className = 'message-item';
  
      const sender = document.createElement('div');
      sender.className = 'message-sender';
      sender.textContent = message.sender;
  
      const content = document.createElement('div');
      content.className = 'message-content';
      content.textContent = message.content;
  
      const time = document.createElement('div');
      time.className = 'message-time';
      time.textContent = message.time;
  
      li.appendChild(sender);
      li.appendChild(content);
      li.appendChild(time);
  
      messageList.appendChild(li);
    }
  }
  
  // Call the displayMessages function to initially populate the message list
  displayMessages();
  