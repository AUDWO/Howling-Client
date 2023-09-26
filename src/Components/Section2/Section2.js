import React, { useState } from "react";
import SectionContainer from "../../StyledComponents/HomeStyle/SectionContainer";
import UserPosts from "../../UserPosts";
import styled from "styled-components";
import Home from "../../Views/Home";
import HowlZoneSection from "./HowlZoneSection";

const Section2 = () => {
  return (
    <SectionContainer2 size="50">
      <PostContentsWrapper>
        <HowlZoneSection />
        <UserPosts />
      </PostContentsWrapper>
    </SectionContainer2>
  );
};

const SectionContainer2 = styled(SectionContainer)`
  align-items: center;
`;

const PostContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Section2;
