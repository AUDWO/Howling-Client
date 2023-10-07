import React from "react";
import {
  MakeStoryImg,
  MakeStoryImgFormWrapper,
  MakeStoryImgInput,
  MakeStoryImgWrapper,
  MakeStoryImgSelectWrapper,
  MakeStoryImgSelectButton,
} from "../../StyledComponents/MakeStoryStyle/MakeStoryImgStyle";

const MakeStoryImgCp = () => {
  return (
    <MakeStoryImgWrapper>
      <MakeStoryImgSelectWrapper>
        <MakeStoryImgFormWrapper>
          <MakeStoryImgSelectButton htmlFor="storyImg">
            사진 선택하기
          </MakeStoryImgSelectButton>
          <MakeStoryImgInput
            id="storyImg"
            type="file"
            accept="image/*"
            hidden
          />
        </MakeStoryImgFormWrapper>
      </MakeStoryImgSelectWrapper>
      <MakeStoryImg />
    </MakeStoryImgWrapper>
  );
};

export default MakeStoryImgCp;
