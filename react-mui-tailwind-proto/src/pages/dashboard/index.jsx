import React from "react";
import SideNavbar from "../../layouts/SideNavbar";

const Dashboard = () => {

  return <>
    <div className="flex h-full">
      <SideNavbar />
      <div className="flex-1">
        <h1>This is Dashboard page</h1>
      </div>
    </div>

  </>;
};

export default Dashboard;