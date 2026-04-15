import React, { useState } from "react";
import { sendMessage } from "../services/api";

const ChatPage = () => {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    const res = await sendMessage(msg);

    setChat([...chat,
      { type: "user", text: msg },
      { type: "bot", text: res.data.reply }
    ]);

    setMsg("");
  };

  return (
    <div className="chat-layout">

      <div className="chat-header">EduSaarthi AI</div>

      <div className="chat-container">
        {chat.map((c, i) => (
          <div key={i} className={c.type}>
            {c.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="btn-primary" onClick={handleSend}>
          Send
        </button>
      </div>

    </div>
  );
};

export default ChatPage;