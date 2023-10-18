import React from "react";
import {
  Option,
  ToggleAbleButtonWrapper,
  AbleButtonTitle,
} from "../../StyledComponents/KeepDiaryStyle/DiaryAdvancedSetupComponent";

import ToggleAbleSwitchComponent from "./ToggleAbleSwitchComponent";

const DiaryAdvancedSetupCp = () => {
  return (
    <Option>
      <ToggleAbleButtonWrapper>
        <AbleButtonTitle>좋아요 수 기능 해제</AbleButtonTitle>
        <ToggleAbleSwitchComponent
          inputId={"likeCount"}
          atomName={"diaryLike"}
        />
      </ToggleAbleButtonWrapper>
      <ToggleAbleButtonWrapper>
        <AbleButtonTitle>조회수 기능 해제</AbleButtonTitle>
        <ToggleAbleSwitchComponent inputId={"hits"} atomName={"diaryView"} />
      </ToggleAbleButtonWrapper>
      <ToggleAbleButtonWrapper>
        <AbleButtonTitle>댓글 기능 해제</AbleButtonTitle>
        <ToggleAbleSwitchComponent
          inputId={"Comments"}
          atomName={"diartComment"}
        />
      </ToggleAbleButtonWrapper>
    </Option>
  );
};

export default DiaryAdvancedSetupCp;
