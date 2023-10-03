import React from "react";
import {
  MoreStoryContact,
  StoryContactIconWrapper,
  GoodIcon,
  StoryContactIconCountNumber,
  HearIcon,
  SmileIcon,
  SadIcon,
} from "../../StyledComponents/MoreStoryStyle/MoreStoryContactCpSt";

const MoreStoryContactCp = () => {
  return (
    <MoreStoryContact>
      <StoryContactIconWrapper>
        <GoodIcon />
        <StoryContactIconCountNumber>2</StoryContactIconCountNumber>
      </StoryContactIconWrapper>
      <StoryContactIconWrapper>
        <HearIcon />
        <StoryContactIconCountNumber>2</StoryContactIconCountNumber>
      </StoryContactIconWrapper>
      <StoryContactIconWrapper>
        <SmileIcon />
        <StoryContactIconCountNumber>2</StoryContactIconCountNumber>
      </StoryContactIconWrapper>
      <StoryContactIconWrapper>
        <SadIcon />
        <StoryContactIconCountNumber>2</StoryContactIconCountNumber>
      </StoryContactIconWrapper>
    </MoreStoryContact>
  );
};

export default MoreStoryContactCp;
