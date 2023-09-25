import React from "react";
import Section1 from "../Components/Section1/Section1";
import Section2 from "../Components/Section2/Section2";
import Section3 from "../Components/Section3/Section3";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";

const Home = () => {
  return (
    <HomeWraper>
      <Section1 />
      <Section2 />
      <Section3 />
    </HomeWraper>
  );
};

export default Home;
