import React, { useState } from "react";
import { loginUser } from "../services/api";

const LoginPage = ({ setPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser({
        username,
        password
      });

      const role = res.data.role;

      // 🔥 YAHAN LIKHNA HAI
      if (role === "admin" || role === "teacher") {
        setPage("admin");
      } else {
        setPage("chat");
      }

    } catch (err) {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;