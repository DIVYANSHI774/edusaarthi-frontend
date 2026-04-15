import React from "react";

function ChatWindow({ messages }) {
  return (
    <div className="chat-container">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;