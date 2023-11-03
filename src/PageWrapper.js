import React from "react";
import { Outlet } from "react-router-dom";
import HomeWraper from "./StyledComponents/HomeStyle/HomeWrapper";

const PageWrapper = () => {
  return <Outlet />;
};

export default PageWrapper;
