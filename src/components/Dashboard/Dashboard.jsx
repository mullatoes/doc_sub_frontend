import React from "react";
import CompanyInfo from "../Company/CompanyInfo";


const Dashboard = () => {
  const companies = [
    {
      name: "URA",
      logo: "https://play-lh.googleusercontent.com/q8Qr453G_lABl2jVsGpCPxxSWvAukJLorTofg1NqMckEkF61pqmt3877QKMbsr4nJs2S",
    },
    {
      name: "Bank Of Uganda",
      logo: "https://pbs.twimg.com/profile_images/816542296384696320/A0Q3OTgM_400x400.jpg",
    },
    {
      name: "NSSF",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKZESi2jGBKNgZtFBPIgZN3OJLiwpYWszhe1LMtaag=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "POU",
      logo: "https://pbs.twimg.com/profile_images/1706576411681591296/MT95aRPm_400x400.jpg",
    },
  ];

  return (
    <div className="dashboard">
      {companies.map((company) => (
        <CompanyInfo
          key={company.name}
          companyName={company.name}
          logoUrl={company.logo}
        />
      ))}
    </div>
  );
};

export default Dashboard;
