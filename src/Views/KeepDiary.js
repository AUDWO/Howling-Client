import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Section1 from "../Components/Section1/Section1";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import Section3 from "../Components/Section3/Section3";
import Profile from "../Components/Profile";
import {
  DiaryContentsWrapper,
  DiaryContent,
  DiaryDate,
  DiaryImg,
  DiaryTitle,
  DiaryWrapper,
  DiaryNav,
} from "../StyledComponents/DiaryStyle/Diary";

import {
  LockIcon,
  LockOpenIcon,
  LockOpenPhotoIcon,
  LockPhotoIcon,
} from "../StyledComponents/DiaryStyle/DiaryIcon";

const KeepDiary = () => {
  const textareaRef = useRef(null);
  useEffect(() => {
    resize();
  }, []);

  function resize() {
    let textarea = textareaRef.current;

    textarea.style.height = "0px";

    let scrollHeight = textarea.scrollHeight;
    let style = window.getComputedStyle(textarea);
    let borderTop = parseInt(style.borderTop);
    let borderBottom = parseInt(style.borderBottom);

    textarea.style.height = scrollHeight + borderTop + borderBottom + "px";
  }

  window.addEventListener("resize", resize);

  return (
    <HomeWraper>
      <Section1 />
      <DiaryWrapper padding="60px 20px" width="300px" height="1500px">
        <DiaryNav height="60px" padding="15px 20px 5px 20px">
          <Profile />

          <DiaryDate fontSize="30px">2023.09.19</DiaryDate>
        </DiaryNav>

        <DiaryOption width="100%" height="200px">
          <PublicForm padding="20px">
            <PublicOption fontSize="20px">
              <label>
                <RadioButtom type="radio" name="public" />
                <LockOpenIcon />
                공개
              </label>
            </PublicOption>
            <PublicOption>
              <label>
                <RadioButtom type="radio" name="public" />
                <LockIcon />
                비공개
              </label>
            </PublicOption>
          </PublicForm>
          <PublicForm>
            <PublicOption>
              <label>
                <RadioButtom type="radio" name="public" />
                <LockOpenPhotoIcon />
                사진 선택
              </label>
            </PublicOption>
            <PublicOption>
              <label>
                <RadioButtom type="radio" name="public" />
                <LockPhotoIcon />
                선택 안함
              </label>
            </PublicOption>
          </PublicForm>
        </DiaryOption>
      </DiaryWrapper>
      <KeepDiaryContentsWrapper>
        <DiaryTitle
          fontSize="40px"
          height="80px"
          placeholder="제목을 입력해주세요."
        />
        <DiaryImg></DiaryImg>
        <DiaryContent
          id="target-textarea"
          ref={textareaRef}
          onChange={resize}
          fontSize="20px"
          width="100%"
          padding="10px"
        />
      </KeepDiaryContentsWrapper>
    </HomeWraper>
  );
};

export default KeepDiary;

const KeepDiaryContentsWrapper = styled(DiaryContentsWrapper)`
  flex-grow: 1;
  align-items: center;
  margin-top: 30px;
`;
const DiaryOption = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 20px;
`;

const PublicForm = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid black;
  border-bottom: 0.5px solid black;
  padding: 20px;
`;

const PublicOption = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight:600;
  font-family: font-family: 'Sunflower', sans-serif;

  `;

const RadioButtom = styled.input`
  width: 15px;
  height: 15px;
`;
