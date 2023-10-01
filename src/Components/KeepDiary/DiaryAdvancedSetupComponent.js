import React from "react";
import {
  Ooption,
  ToggleAbleButtonWrapper,
  LikeCountAbleButtonTitle,
  HitsAbleButtonTitle,
  CommentsAbleButtonTtile,
} from "../../StyledComponents/KeepDiaryStyle/DiaryAdvancedSetupComponent";

import ToggleAbleSwitchComponent from "./ToggleAbleSwitchComponent";

const DiaryAdvancedSetupComponent = () => {
  return (
    <Ooption>
      <ToggleAbleButtonWrapper>
        <LikeCountAbleButtonTitle>좋아요 수 기능</LikeCountAbleButtonTitle>
        <ToggleAbleSwitchComponent inputId={"likeCount"} />
      </ToggleAbleButtonWrapper>
      <ToggleAbleButtonWrapper>
        <HitsAbleButtonTitle>조회수 기능</HitsAbleButtonTitle>
        <ToggleAbleSwitchComponent inputId={"hits"} />
      </ToggleAbleButtonWrapper>
      <ToggleAbleButtonWrapper>
        <CommentsAbleButtonTtile>댓글 기능</CommentsAbleButtonTtile>
        <ToggleAbleSwitchComponent inputId={"Comments"} />
      </ToggleAbleButtonWrapper>
    </Ooption>
  );
};

export default DiaryAdvancedSetupComponent;
