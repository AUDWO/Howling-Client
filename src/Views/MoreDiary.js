import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section1 from "../Components/Section1/Section1";
import Section3 from "../Components/Section3/Section3";
import {
  DiaryContentsWrapper,
  DiaryContent,
  DiaryDate,
  DiaryImg,
  DiaryWrapper,
  DiaryNav,
} from "../StyledComponents/DiaryStyle/Diary";

import axios from "axios";
import { useParams } from "react-router-dom";

const MoreDiary = () => {
  const { diaryId } = useParams();

  const [diary, setDiary] = useState(null);

  useEffect(() => {
    const fetchDiaryData = async () => {
      try {
        const response = await axios.get(
          `/page/render-only-diaryinfo/${diaryId}`
        );
        setDiary({ ...response.data[0] });
      } catch (error) {}
    };

    fetchDiaryData();
  }, []);
  if (diary) {
    console.log("1111199999");
    console.log(diary);
    console.log("1111199999");
  }

  if (diary) {
    return (
      <Wrapper>
        <HomeWrapper2>
          <Section1 />
          <DiaryWrapper width="50%">
            <MoreDiaryTitle>{diary.title}</MoreDiaryTitle>
            <DiaryNav>
              <MoreProfileWrapper>
                <MoreProfileImg />
                <MoreProfileName>{diary.User.nickname}</MoreProfileName>
              </MoreProfileWrapper>
              <DiaryDate>2023.09.19</DiaryDate>
            </DiaryNav>
            <DiaryContentsWrapper padding="40px 20px">
              <DiaryImgWrapper>
                <DiaryImg src={diary.img} />
              </DiaryImgWrapper>
              <DiaryContent>{diary.content}</DiaryContent>
            </DiaryContentsWrapper>
          </DiaryWrapper>
          <Section3 />
        </HomeWrapper2>
      </Wrapper>
    );
  }
};

export default MoreDiary;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HomeWrapper2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const MoreDiaryTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 50px;
`;

export const MoreProfileWrapper = styled.div`
  display: flex;
`;

export const MoreProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
`;

export const MoreProfileName = styled.div`
  font-size: 15px;
  margin-left: 10px;
`;

export const DiaryImgWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
