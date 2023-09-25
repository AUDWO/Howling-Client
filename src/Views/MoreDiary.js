import React from "react";
import styled from "styled-components";
import Section1 from "../Components/Section1/Section1";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import Section3 from "../Components/Section3/Section3";
import Profile from "../Components/Profile";
import {
  MoreDiaryContent,
  MoreDiaryContentsWrapper,
  MoreDiaryDate,
  MoreDiaryImg,
  MoreDiaryTitle,
  MoreDiaryWrapper,
  MoreDiaryNav,
} from "../StyledComponents/DiaryStyle/MoreDiary";

const MoreDiary = () => {
  return (
    <HomeWraper>
      <Section1 />
      <MoreDiaryWrapper>
        <MoreDiaryNav>
          <Profile />
          <MoreDiaryDate>2023.09.19</MoreDiaryDate>
        </MoreDiaryNav>
        <MoreDiaryContentsWrapper>
          <MoreDiaryTitle />
          <MoreDiaryImg></MoreDiaryImg>
          <MoreDiaryContent type="textarea" />
        </MoreDiaryContentsWrapper>
      </MoreDiaryWrapper>
      <Section3 />
    </HomeWraper>
  );
};

export default MoreDiary;
