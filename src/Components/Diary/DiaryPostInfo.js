import React from "react";
import Profile from "../Profile";
import {
  DiaryPostInfoWrapper,
  DiaryPostDate,
  DiaryPostTitleWrapper,
  DiaryPostUserWrapper,
} from "../../StyledComponents/DiaryStyle/DiaryPost";

const DiaryPostInfo = () => {
  return (
    <DiaryPostInfoWrapper>
      <DiaryPostDate>2023.09.19</DiaryPostDate>
      <DiaryPostTitleWrapper>llblvptle clbp kcpwl</DiaryPostTitleWrapper>
      <DiaryPostUserWrapper>
        <Profile />
      </DiaryPostUserWrapper>
    </DiaryPostInfoWrapper>
  );
};

export default DiaryPostInfo;
