import React from "react";
import CompanyInfo from "./CompanyInfo";

const Dashboard = () => {
  const companyName = "Google Inc.";
  const logoUrl =
    "https://media.wired.co.uk/photos/606d9a3ba876dd2203a639aa/1:1/w_2000,h_2000,c_limit/wired-uk-google-watching.jpg";

  return (
    <div className="dashboard">
      <CompanyInfo companyName={companyName} logoUrl={logoUrl} />
      <CompanyInfo companyName={companyName} logoUrl={logoUrl} />
      <CompanyInfo companyName={companyName} logoUrl={logoUrl} />
      <CompanyInfo companyName={companyName} logoUrl={logoUrl} />
      <CompanyInfo companyName={companyName} logoUrl={logoUrl} />
    </div>
  );
};

export default Dashboard;
