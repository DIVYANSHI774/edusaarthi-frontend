import React, { useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import ChatPage from "./pages/ChatPage";

function App() {
  const [page, setPage] = useState("splash");

  return (
    <>
      {page === "splash" && <SplashScreen setPage={setPage} />}
      {page === "login" && <LoginPage setPage={setPage} />}

      {/* 🔥 IMPORTANT */}
      {page === "admin" && <AdminDashboard setPage={setPage} />}

      {page === "chat" && <ChatPage setPage={setPage} />}
    </>
  );
}

export default App;