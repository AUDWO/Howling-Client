import React from "react";
import {
  Option,
  ToggleAbleButtonWrapper,
  LikeCountAbleButtonTitle,
  HitsAbleButtonTitle,
  CommentsAbleButtonTtile,
} from "../../StyledComponents/KeepDiaryStyle/DiaryAdvancedSetupComponent";

import ToggleAbleSwitchComponent from "../KeepDiary/ToggleAbleSwitchComponent";

const PostAdvancedSetupCp = () => {
  return (
    <Option>
      <ToggleAbleButtonWrapper>
        <LikeCountAbleButtonTitle>좋아요 수 기능 해제</LikeCountAbleButtonTitle>
        <ToggleAbleSwitchComponent inputId={"likeCount"} />
      </ToggleAbleButtonWrapper>
      <ToggleAbleButtonWrapper>
        <CommentsAbleButtonTtile>댓글 기능 해제</CommentsAbleButtonTtile>
        <ToggleAbleSwitchComponent inputId={"Comments"} />
      </ToggleAbleButtonWrapper>
      <ToggleAbleButtonWrapper>
        <HitsAbleButtonTitle> 본문 내용 작성하기 </HitsAbleButtonTitle>
        <ToggleAbleSwitchComponent inputId={"hits"} />
      </ToggleAbleButtonWrapper>
    </Option>
  );
};

export default PostAdvancedSetupCp;
