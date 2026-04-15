import React from "react";

function DashboardPage() {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <div className="grid">
        <div className="card">👨‍🎓 Students: 120</div>
        <div className="card">📚 Files Uploaded: 45</div>
        <div className="card">💬 Chats Today: 300</div>
        <div className="card">📊 AI Usage: Active</div>
      </div>
    </div>
  );
}

export default DashboardPage;