import React from "react";

function UploadButton() {
  const handleUpload = () => {
    alert("PDF / File upload API connect karo backend se 📁");
  };

  return (
    <button className="btn-primary" onClick={handleUpload}>
      Upload File
    </button>
  );
}

export default UploadButton;