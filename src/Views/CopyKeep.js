import React, { useState } from "react";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import Section1 from "../Components/Section1/Section1";
import DiaryOptionComponent from "../Components/KeepDiary/DiaryOption";

import { RecoilRoot } from "recoil";

import {
  DiaryTextarea,
  DiaryContentText,
  PostDiaryButton,
  PostDiaryButtonForm,
  DiaryTextareaWrapper,
  DiaryOptionWrapper,
  KeepDiaryTitle,
  DeleteDiaryButton,
} from "../StyledComponents/KeepDiaryStyle/KeepDiary";

const CopyKeepDiary = () => {
  const [text, setText] = useState("");

  return (
    <HomeWraper>
      <RecoilRoot>
        <Section1 />
        <DiaryOptionWrapper>
          <KeepDiaryTitle placeholder="제목을 입력해주세요." />
          <DiaryOptionComponent />
        </DiaryOptionWrapper>
        <DiaryTextareaWrapper>
          <DiaryContentText>Content</DiaryContentText>
          <DiaryTextarea
            name="content"
            value={text}
            placeholder="당신의 이야기를 들려주세요."
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></DiaryTextarea>
          <PostDiaryButtonForm>
            <PostDiaryButton>일기쓰기</PostDiaryButton>
            <DeleteDiaryButton>삭제하기</DeleteDiaryButton>
          </PostDiaryButtonForm>
        </DiaryTextareaWrapper>
      </RecoilRoot>
    </HomeWraper>
  );
};

export default CopyKeepDiary;
