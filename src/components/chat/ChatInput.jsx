import React, { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="chat-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask something..."
      />
      <button className="btn-primary" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;