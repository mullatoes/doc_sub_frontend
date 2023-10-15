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
   
      <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
        <div className="mb-4">
          <img src={logoUrl} alt="Company Logo" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center">{companyName}</h3>
        </div>
        <div className="file-input mb-4">
          <input
            type="file"
            id="document"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="document" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer block text-center">
            Upload Document
          </label>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
            onClick={handleSubmitDocument}
          >
            Submit Document
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            onClick={handleViewDocuments}
          >
            View Documents
          </button>
        </div>
      </div>
    


  );
};

export default CompanyInfo;
