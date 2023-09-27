import React from "react";
import SectionContainer from "../../StyledComponents/HomeStyle/SectionContainer";
import WebTitle from "../../StyledComponents/LoginStyle/WebTitle";
import WebTitleWrap from "../../StyledComponents/LoginStyle/WebTitleWrap";
import {
  WolfIcon,
  HomeIcon,
  DiaryIcon,
  SearchIcon,
  NewPostIcon,
  MoreIcon,
  KeepDiary,
} from "../../StyledComponents/HomeStyle/Section1/Icon";
import SidebarMenuWrapper from "../../StyledComponents/HomeStyle/Section1/SidebarMenuWrapper";
import SidebarMenu from "../../StyledComponents/HomeStyle/Section1/SidebarMenu";
import styled from "styled-components";

const FontColor = styled.span`
  color: ${(props) => (props.color ? props.color : "black")};
`;

const Section1 = () => {
  return (
    <SectionContainer flex="1">
      <section>
        <WebTitleWrap>
          <WebTitle>
            <FontColor color="#f7dd07">H</FontColor>
            <FontColor color="#f7dd07">o</FontColor>
            <FontColor color="#efa517">w</FontColor>
            <FontColor color="#efa517">l</FontColor>
            <FontColor color="#ad480c">i</FontColor>
            <FontColor color="#742c00">n</FontColor>
            <FontColor>g</FontColor>
          </WebTitle>
        </WebTitleWrap>
      </section>
      <SidebarMenuWrapper>
        <SidebarMenu>
          <HomeIcon />
          <div>홈</div>
        </SidebarMenu>
        <SidebarMenu>
          <SearchIcon />
          <div>검색</div>
        </SidebarMenu>
        <SidebarMenu>
          <DiaryIcon />
          <div>일기</div>
        </SidebarMenu>
        <SidebarMenu>
          <NewPostIcon />
          <div>만들기</div>
        </SidebarMenu>
        <SidebarMenu>
          <KeepDiary />
          <div>새 일기쓰기</div>
        </SidebarMenu>
        <SidebarMenu>
          <div>프로필</div>
        </SidebarMenu>
        <SidebarMenu>
          <MoreIcon />
          <div>더 보기</div>
        </SidebarMenu>
      </SidebarMenuWrapper>
    </SectionContainer>
  );
};

export default Section1;

//<WolfIcon />
