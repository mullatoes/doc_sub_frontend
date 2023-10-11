import React from "react";

const CompanyInfo = ({ companyName, logoUrl }) => {
  const handleSubmitDocument = () => {};

  const handleViewDocuments = () => {};

  return (
    <div className="company-info">
      <img src={logoUrl} alt="Company Logo" height={200} width={200} />
      <h1>{companyName}</h1>
      <button onClick={handleSubmitDocument}>Submit Document</button>
      <button onClick={handleViewDocuments}>View Submitted Documents</button>
    </div>
  );
};

export default CompanyInfo;
