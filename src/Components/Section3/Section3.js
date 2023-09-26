import React from "react";
import SectionContainer from "../../StyledComponents/HomeStyle/SectionContainer";
import User from "../User";
import Trend from "./Trend";

const Section3 = () => {
  return (
    <SectionContainer size="25">
      <section>
        <User />
        <Trend />
      </section>
    </SectionContainer>
  );
};

export default Section3;
