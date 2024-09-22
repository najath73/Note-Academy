import React from 'react';

function ChatMessage({ message, sender }) {
  return (
    <div className={`flex ${sender ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`p-3 rounded-lg max-w-xs text-white ${
          sender ? 'bg-purple-600' : 'bg-gray-700'
        }`}
      >
        {message}
      </div>
    </div>
  );
}

function ChatWindow() {
  const messages = [
    { id: 1, text: 'Hey, how are you?', sender: false },
    { id: 2, text: 'I am good, thanks! What about you?', sender: true },
    { id: 3, text: 'I am doing great too!', sender: false },
  ];

  return (
    <div className="flex-1 flex flex-col justify-between bg-gray-900 p-4 rounded-lg">
      {/* Messages */}
      <div className="overflow-y-auto h-96 space-y-2">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg.text} sender={msg.sender} />
        ))}
      </div>

      {/* Input Message */}
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-lg bg-gray-700 text-white outline-none"
        />
        <button className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}

function MessagingPage() {
  const conversations = [
    { id: 1, name: 'Teacher1', lastMessage: 'Hello!', isActive: true },
    { id: 2, name: 'Student2', lastMessage: 'See you tomorrow!' },
    { id: 3, name: 'Teacher3', lastMessage: 'Great job!' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar des Conversations */}
      <div className="w-1/3 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold">Conversations</h2>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`p-3 rounded-lg cursor-pointer ${
              conversation.isActive ? 'bg-gray-700' : 'bg-gray-900'
            }`}
          >
            <h3 className="font-bold">{conversation.name}</h3>
            <p className="text-gray-400">{conversation.lastMessage}</p>
          </div>
        ))}
      </div>

      {/* Fenêtre de Chat */}
      <div className="flex-1 flex flex-col p-4">
        <ChatWindow />
      </div>
    </div>
  );
}

export default MessagingPage;
