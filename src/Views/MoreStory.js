import React from "react";
import Section1 from "../Components/Section1/Section1";
import styled from "styled-components";

import MoreStoryContentCp from "../Components/MoreStory/MoreStoryContentCp";
import MoreStoryCommentCp from "../Components/MoreStory/MoreStoryCommentCp";

const MoreStory = () => {
  return (
    <Wrapper>
      <HomeWrapper2>
        <Section1 />
        <MoreStoryContentCp></MoreStoryContentCp>
      </HomeWrapper2>
      <MoreStoryCommentCp />
    </Wrapper>
  );
};

export default MoreStory;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HomeWrapper2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const MoreStoryProfileWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
`;

export const MoreStoryImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MoreStoryContact = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;
