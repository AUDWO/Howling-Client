import React from "react";
import { Outlet } from "react-router-dom";
import Section1, { SideBarWapper } from "./Components/Section1/Section1";
import HomeWraper from "./StyledComponents/HomeStyle/HomeWrapper";

const DashboardWrapper = () => {
  return (
    <HomeWraper>
      <Section1 />
      <Outlet />
    </HomeWraper>
  );
};

export default DashboardWrapper;
