import React, { useState, useEffect } from "react";
import {
  getNotices,
  getStudy,
  addNotice,
  addStudy,
  uploadPDF
} from "../../services/api";
import Hero from "../Hero"; // ✅ ADD HERO

const AdminDashboard = ({ setPage }) => {
  const [activePage, setActivePage] = useState("dashboard");

  const [notices, setNotices] = useState([]);
  const [study, setStudy] = useState([]);

  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");

  const [studyTitle, setStudyTitle] = useState("");
  const [studySubject, setStudySubject] = useState("");
  const [studyContent, setStudyContent] = useState("");

  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const n = await getNotices();
      const s = await getStudy();

      setNotices(n.data || []);
      setStudy(s.data || []);
    } catch {
      console.log("Error fetching data");
    }
  };

  const handleAddNotice = async () => {
    if (!noticeTitle || !noticeContent) return alert("Fill all fields");

    await addNotice({
      title: noticeTitle,
      content: noticeContent
    });

    alert("Notice Added ✅");
    setNoticeTitle("");
    setNoticeContent("");
    fetchData();
  };

  const handleAddStudy = async () => {
    if (!studyTitle || !studyContent) return alert("Fill all fields");

    await addStudy({
      title: studyTitle,
      subject: studySubject,
      content: studyContent
    });

    alert("Study Added ✅");
    setStudyTitle("");
    setStudySubject("");
    setStudyContent("");
    fetchData();
  };

  const handleUpload = async () => {
    if (!file) return alert("Select file");

    await uploadPDF(file);
    alert("Uploaded ✅");
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>EduSaarthi</h2>

        <button onClick={() => setActivePage("dashboard")}>Dashboard</button>
        <button onClick={() => setActivePage("notices")}>Notices</button>
        <button onClick={() => setActivePage("study")}>Study</button>
        <button onClick={() => setActivePage("upload")}>Upload</button>

        <button onClick={() => setPage("chat")}>Chatbot</button>
      </div>

      {/* MAIN */}
      <div className="dashboard-main">

        {/* DASHBOARD */}
        {activePage === "dashboard" && (
          <>
            <Hero /> {/* ✅ HERO ADDED */}

            <div className="dashboard-cards">
              <div className="card">Notices: {notices.length}</div>
              <div className="card">Study: {study.length}</div>
              <div className="card">Uploads: {study.length}</div>
              <div className="card">Users: 50</div>
            </div>
          </>
        )}

        {/* NOTICES */}
        {activePage === "notices" && (
          <>
            <h2>Add Notice</h2>

            <input value={noticeTitle} placeholder="Title"
              onChange={(e) => setNoticeTitle(e.target.value)} />

            <input value={noticeContent} placeholder="Content"
              onChange={(e) => setNoticeContent(e.target.value)} />

            <button onClick={handleAddNotice}>Add Notice</button>

            {notices.map((n, i) => (
              <div key={i} className="card">
                <b>{n.title}</b>
                <p>{n.content}</p>
              </div>
            ))}
          </>
        )}

        {/* STUDY */}
        {activePage === "study" && (
          <>
            <h2>Add Study</h2>

            <input value={studyTitle} placeholder="Title"
              onChange={(e) => setStudyTitle(e.target.value)} />

            <input value={studySubject} placeholder="Subject"
              onChange={(e) => setStudySubject(e.target.value)} />

            <input value={studyContent} placeholder="Content"
              onChange={(e) => setStudyContent(e.target.value)} />

            <button onClick={handleAddStudy}>Add Study</button>

            {study.map((s, i) => (
              <div key={i} className="card">
                <b>{s.title}</b>
                <p>{s.content}</p>
              </div>
            ))}
          </>
        )}

        {/* UPLOAD */}
        {activePage === "upload" && (
          <>
            <h2>Upload PDF</h2>

            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
          </>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;