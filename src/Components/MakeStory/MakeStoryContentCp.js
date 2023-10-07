import React from "react";
import {
  MakeStoryContent,
  MakeStoryContentWrapper,
  MakeStoryProfileImg,
  MakeStoryProfileWrapper,
  MakeStoryNickname,
  MakeStoryFormWrapper,
  MakeStoryCancelButton,
  MakeStoryButton,
} from "../../StyledComponents/MakeStoryStyle/MakeStoryContentStyle";

const MakeStoryContentCp = () => {
  return (
    <MakeStoryContentWrapper>
      <MakeStoryProfileWrapper>
        <MakeStoryProfileImg></MakeStoryProfileImg>
        <MakeStoryNickname>myeongjae_7053</MakeStoryNickname>
      </MakeStoryProfileWrapper>
      <MakeStoryContent placeholder="내용을 입력하세요!" />
      <MakeStoryFormWrapper>
        <MakeStoryButton>게시하기</MakeStoryButton>
        <MakeStoryCancelButton>삭제하기</MakeStoryCancelButton>
      </MakeStoryFormWrapper>
    </MakeStoryContentWrapper>
  );
};

export default MakeStoryContentCp;
