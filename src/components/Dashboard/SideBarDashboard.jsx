import React, { useState } from "react";

const CompanyCard = ({ companyName, documentNumber, onDocumentSubmit }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => {
      onDocumentSubmit();
      return prevCount + 1;
    });
  };

  let bgColorClass = "";

  // Determine background color class based on click count
  if (clickCount === 1) {
    bgColorClass = "bg-red-500";
  } else if (clickCount === 2) {
    bgColorClass = "bg-gray-700";
  } else if (clickCount === 3) {
    bgColorClass = "bg-blue-500";
  } else if (clickCount === 4) {
    bgColorClass = "bg-green-500";
  }

  return (
    <div className={`p-4 rounded ${bgColorClass}`}>
      <span className="block mb-2 font-semibold">{companyName}</span>
      <p className="text-gray-500">{`Client No. ${documentNumber}`}</p>
      <p className="text-gray-500">{`Submitted Documents: ${clickCount}`}</p>
      <button
        onClick={handleClick}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Submit
      </button>
    </div>
  );
};

const SideBarDashboard = () => {
  const [totalDocuments, setTotalDocuments] = useState(0);

  const companies = [
    { name: "Uganda Revenue Authority", document: 1 },
    { name: "Bank Of Uganda", document: 2 },
    { name: "Parliament Pension Service", document: 3 },
    { name: "Uganda Airways", document: 4 },
    // Add more companies as needed
  ];

  const handleDocumentSubmit = () => {
    setTotalDocuments((prevTotal) => prevTotal + 1);
  };

  return (
    <>
      <h2 className="m-4 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Dashboard
      </h2>
      <section className="p-3">
        <div className="grid grid-cols-1 gap-4 shadow-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              companyName={company.name}
              documentNumber={company.document}
              onDocumentSubmit={handleDocumentSubmit}
            />
          ))}
        </div>
      </section>
      <p className="text-4xl font-bold mt-8 text-center">{`Submitted Documents: ${totalDocuments} ✔️`}</p>
    </>
  );
};

export default SideBarDashboard;
