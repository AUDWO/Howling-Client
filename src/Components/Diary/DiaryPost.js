import React from "react";
import DiaryPostImg from "./DiaryPostImg";
import DiaryPostInfo from "./DiaryPostInfo";
import { DiaryPostWrapper } from "../../StyledComponents/DiaryStyle/DiaryPost";
const DiaryPost = ({ diary }) => {
  return (
    <DiaryPostWrapper>
      <DiaryPostImg diaryImg={diary.img} />
      <DiaryPostInfo diaryInfo={diary} />
    </DiaryPostWrapper>
  );
};

export default DiaryPost;
