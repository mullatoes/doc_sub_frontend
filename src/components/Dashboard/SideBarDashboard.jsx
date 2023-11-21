import React from "react";

const CompanyCard = ({ companyName, documentText }) => {
  const clickMe = () => {
    console.log("You clicked me");
  };
  return (
    <div className="p-4 bg-white rounded">
      <span className="block mb-2 font-semibold">{companyName}</span>
      <p className="text-gray-500">{documentText}</p>
      <button
        onClick={clickMe}
        class="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Submit Document
      </button>
    </div>
  );
};

const SideBarDashboard = () => {
  const companies = [
    { name: "Uganda Revenue Authority", document: "Client No. 1" },
    { name: "Bank Of Uganda", document: "Client No. 2" },
    { name: "Parliament Pension Service", document: "Client No. 3" },
    { name: "Uganda Airways", document: "Client No. 4" },
    // Add more companies as needed
  ];
  return (
    <>
      <h2 className="m-4 text-2xl  font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Dashboard
      </h2>
      <section className="p-3">
        <div className="grid grid-cols-1 gap-4 shadow-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              companyName={company.name}
              documentText={company.document}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SideBarDashboard;
