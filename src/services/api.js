import axios from "axios";

const API = axios.create({
  baseURL: "https://edusaarthi.onrender.com",
});


// 🔐 LOGIN (optional, still fine)
export const loginUser = (data) =>
  API.post("/auth/login", data);


// 📊 DASHBOARD (if exists in backend)
export const getDashboard = () =>
  API.get("/admin/dashboard");


// 📢 NOTICES =============================

export const getNotices = () =>
  API.get("/admin/notices");

export const addNotice = (data) =>
  API.post("/admin/add-notice", data);

export const deleteNotice = (id) =>
  API.delete(`/admin/delete-notice/${id}`);


// 📚 STUDY ===============================

export const getStudy = () =>
  API.get("/admin/study");

export const addStudy = (data) =>
  API.post("/admin/add-study", data);


// 📁 PDF UPLOAD ==========================

export const uploadPDF = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return API.post("/admin/upload-pdf", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};


// 💬 CHATBOT =============================

export const sendMessage = (message) =>
  API.post("/chat", { message });


// 🧠 OPTIONAL

export const chatBotAPI = {
  send: (message) => API.post("/chat", { message }),
};