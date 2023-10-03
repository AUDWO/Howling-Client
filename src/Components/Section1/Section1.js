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
import { useNavigate } from "react-router-dom";

const FontColor = styled.span`
  color: ${(props) => (props.color ? props.color : "black")};
`;

const Section1 = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer width={"340px"}>
      <section>
        <WebTitleWrap>
          <WebTitle>
            <FontColor color="#f7dd07">H</FontColor>
            <FontColor color="#f7dd07">O</FontColor>
            <FontColor color="#efa517">W</FontColor>
            <FontColor color="#ad480c">L</FontColor>
            <FontColor color="#742c00">I</FontColor>
            <FontColor color="#742c00">N</FontColor>
            <FontColor>G</FontColor>
          </WebTitle>
        </WebTitleWrap>
      </section>
      <SidebarMenuWrapper>
        <SidebarMenu
          onClick={() => {
            navigate("/userr");
          }}
        >
          <HomeIcon />
          <div>홈</div>
        </SidebarMenu>
        <SidebarMenu>
          <SearchIcon />
          <div>검색</div>
        </SidebarMenu>
        <SidebarMenu
          onClick={() => {
            navigate("/diary");
          }}
        >
          <DiaryIcon />
          <div>일기</div>
        </SidebarMenu>
        <SidebarMenu>
          <NewPostIcon />
          <div>만들기</div>
        </SidebarMenu>
        <SidebarMenu
          onClick={() => {
            navigate("/copykeepdiary");
          }}
        >
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
