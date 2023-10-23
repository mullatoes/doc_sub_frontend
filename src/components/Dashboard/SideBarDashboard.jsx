import React from "react";

const CompanyCard = ({ companyName, documentText }) => {
  return (
    <div className="p-4 bg-white rounded">
      <span className="block mb-2 font-semibold">{companyName}</span>
      <p className="text-gray-500">{documentText}</p>
    </div>
  );
};

const SideBarDashboard = () => {
  const companies = [
    { name: "Netflix", document: "Document One" },
    { name: "Google", document: "Document Two" },
    { name: "YouTube", document: "Document Three" },
    { name: "Discord", document: "Document Four" },
    { name: "Spotify", document: "Document Five" },
    { name: "Spotify", document: "Document Five" },
    { name: "Spotify", document: "Document Five" },
    // Add more companies as needed
  ];
  return (
    <>
      <h2 className="m-4 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Dashboard</h2>
      <section className="p-3">
        <div className="grid grid-cols-1 gap-4 shadow-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {companies.map((company, index) => (
            <CompanyCard key={index} companyName={company.name} documentText={company.document} />
          ))}
        </div>
      </section>
    </>

  );
};

export default SideBarDashboard;
