import React from "react";
import SectionContainer from "../../StyledComponents/HomeStyle/SectionContainer";
import User from "../User";
import Trend from "./Trend";

const Section3 = () => {
  return (
    <SectionContainer width={"340px"}>
      <section>
        <User />
        <Trend />
      </section>
    </SectionContainer>
  );
};

export default Section3;
