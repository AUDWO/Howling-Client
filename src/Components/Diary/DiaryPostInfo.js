import React from "react";
import Profile from "../Profile";
import {
  DiaryPostInfoWrapper,
  DiaryPostDate,
  DiaryPostTitleWrapper,
  DiaryPostUserWrapper,
  UserProfileWrapper,
  UserNickname,
} from "../../StyledComponents/DiaryStyle/DiaryPost";

const DiaryPostInfo = ({ diaryInfo }) => {
  const dateObject = new Date(diaryInfo.createdAt);
  const year = dateObject.getUTCFullYear();
  const month = dateObject.getUTCMonth() + 1; // 월은 0부터 시작하므로 +1 해줍니다.
  const day = dateObject.getUTCDate();
  return (
    <DiaryPostInfoWrapper>
      <DiaryPostDate>{`${year}-${month}-${day}`}</DiaryPostDate>
      <DiaryPostTitleWrapper>{diaryInfo.title}</DiaryPostTitleWrapper>
      <DiaryPostUserWrapper>
        <UserProfileWrapper></UserProfileWrapper>
        <UserNickname>{diaryInfo.User.nickname}</UserNickname>
      </DiaryPostUserWrapper>
    </DiaryPostInfoWrapper>
  );
};

export default DiaryPostInfo;
