import React from "react";
import { useState } from "react";

const CompanyInfo = ({ companyName, logoUrl }) => {
  const baseUrl = "http://localhost:9000/";
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmitDocument = () => {
    if (selectedFile) {
      const formData = new FormData();

      formData.append("file", selectedFile);
      fetch(baseUrl + "upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("File uploaded successfully");
          } else {
            console.error("File upload failed");
          }
        })
        .catch((error) => {
          console.error("File upload failed:", error);
        });

      console.log("Selected file:", selectedFile);
    } else {
      console.log("No file selected.");
    }
  };

  const handleViewDocuments = () => {};

  return (
    <div className="company-info">
      <img src={logoUrl} alt="Company Logo" height={20} width={20} />
      <h3>{companyName}</h3>
      <div className="file-input">
        <input
          type="file"
          id="document"
          accept=".pdf, .doc, .docx"
          onChange={handleFileChange}
        />
        {/* <label htmlFor="document">Submit a Document</label> */}
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSubmitDocument}>
          Submit Document
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleViewDocuments}>
          View Documents
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
