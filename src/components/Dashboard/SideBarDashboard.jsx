import React from "react";

const SideBarDashboard = () => {
  return (
    <div className="flex flex-col py-12 px-10">
      <h2>Dashboard</h2>
      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5">
          <span>Company 1</span>
          <li className="text-gray-500">Document One</li>
        </div>
        <div className="w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5">
          <span>Company 2</span>
          <li className="text-gray-500">Document One</li>
        </div>
      </div>

      <div className="flex space-x-8 p-10">
        <h2>More Companies</h2>
      </div>

      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5">
          <span>Another Company</span>
          <li className="text-gray-500 mt-4">Sample documents</li>
        </div>
        <div className="w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5">
          <span>Another Company</span>
          <li className="text-gray-500 mt-4">Sample Documents</li>
        </div>
      </div>
    </div>
  );
};

export default SideBarDashboard;
