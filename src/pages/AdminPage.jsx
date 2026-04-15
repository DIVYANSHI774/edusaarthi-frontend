import React, { useState } from "react";

function AdminPage() {
  const [data, setData] = useState({
    subject: "",
    file: null
  });

  const handleUpload = () => {
    alert("Backend API connect: file + subject upload");
  };

  return (
    <div className="admin">
      <h2>Admin Panel</h2>

      <div className="card">
        <input
          placeholder="Subject Name"
          onChange={(e) => setData({ ...data, subject: e.target.value })}
        />

        <input
          type="file"
          onChange={(e) => setData({ ...data, file: e.target.files[0] })}
        />

        <button className="btn-primary" onClick={handleUpload}>
          Upload Study Material
        </button>
      </div>
    </div>
  );
}

export default AdminPage;