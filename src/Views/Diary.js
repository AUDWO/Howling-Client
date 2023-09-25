import React from "react";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import Section1 from "../Components/Section1/Section1";
import styled from "styled-components";
import DiaryPost from "../Components/Diary/DiaryPost";
import { DiaryIcon } from "../StyledComponents/HomeStyle/Section1/Icon";
import { DiaryWrapper } from "../StyledComponents/HomeStyle/Section3/ContentWrapper";

const Diary = () => {
  return (
    <HomeWraper>
      <Section1 />
      <Dd>
        <Div>
          <Db></Db>
          <Nav></Nav>
        </Div>

        <DiarysWrapper>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
          <DiaryPost>안녕</DiaryPost>
        </DiarysWrapper>
      </Dd>
    </HomeWraper>
  );
};

export default Diary;

const Div = styled.div``;

const Dd = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100px;
  background-color: blue;
  opacity: 0.7;
`;

const DiarysWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
  padding: 20px;
`;

const Db = styled.div`
  background-color: hotpink;
  height: 60px;
  overflow-y: scroll;
  opacity: 0.5;
`;
