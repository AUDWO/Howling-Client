import React from "react";
import DiaryPostImg from "./DiaryPostImg";
import DiaryPostInfo from "./DiaryPostInfo";
import { DiaryPostWrapper } from "../../StyledComponents/DiaryStyle/DiaryPost";
import Profile from "../Profile";
const DiaryPost = () => {
  return (
    <DiaryPostWrapper>
      <DiaryPostImg />
      <DiaryPostInfo />
    </DiaryPostWrapper>
  );
};

export default DiaryPost;
