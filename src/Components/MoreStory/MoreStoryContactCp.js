import React, { useState } from "react";
import {
  MoreStoryContact,
  StoryContactIconWrapper,
  GoodIcon,
  StoryContactIconCountNumber,
  HearIcon,
  SmileIcon,
  SadIcon,
} from "../../StyledComponents/MoreStoryStyle/MoreStoryContactCpSt";

const MoreStoryContactCp = ({ storyInfo }) => {
  const [likeCount, setLikeCount] = useState(storyInfo.likeCount);
  const [hearCount, setHearCount] = useState(storyInfo.loveCount);
  const [smileCount, setSmileCount] = useState(storyInfo.smileCount);
  const [sadCount, setSadCount] = useState(storyInfo.sadCount);
  const [clicked, setClikced] = useState("");
  const [nextClick, setNextClick] = useState("");

  const handleContactFilterType = (type) => {
    if (nextClick === type) {
      return;
    }
    if (nextClick !== type && nextClick !== "") {
      if (nextClick === "like") {
        setLikeCount(likeCount - 1);
      }
      if (nextClick === "hear") {
        setHearCount(hearCount - 1);
      }
      if (nextClick === "smile") {
        setSmileCount(smileCount - 1);
      }
      if (nextClick === "sad") {
        setSadCount(sadCount - 1);
      }
      setClikced(nextClick);
    }
    setNextClick(type);
    if (type === "like") {
      setLikeCount(likeCount + 1);
    }
    if (type === "hear") {
      setHearCount(hearCount + 1);
    }
    if (type === "smile") {
      setSmileCount(smileCount + 1);
    }
    if (type === "sad") {
      setSadCount(sadCount + 1);
    }
  };

  console.log(nextClick);

  return (
    <MoreStoryContact>
      <StoryContactIconWrapper
        onClick={() => handleContactFilterType("like")}
        nextClick={nextClick}
        backC={"#3182f6"}
      >
        <GoodIcon />
        <StoryContactIconCountNumber nextClick={nextClick} backC={"#a64eff"}>
          {likeCount}
        </StoryContactIconCountNumber>
      </StoryContactIconWrapper>
      <StoryContactIconWrapper
        onClick={() => handleContactFilterType("hear")}
        nextClick={nextClick}
        backC={"#ed203d"}
      >
        <HearIcon />
        <StoryContactIconCountNumber nextClick={nextClick} backC={"#a64eff"}>
          {hearCount}
        </StoryContactIconCountNumber>
      </StoryContactIconWrapper>
      <StoryContactIconWrapper
        onClick={() => handleContactFilterType("smile")}
        nextClick={nextClick}
        backC={"#f7dd07"}
      >
        <SmileIcon />
        <StoryContactIconCountNumber nextClick={nextClick} backC={"#a64eff"}>
          {smileCount}
        </StoryContactIconCountNumber>
      </StoryContactIconWrapper>
      <StoryContactIconWrapper
        onClick={() => handleContactFilterType("sad")}
        nextClick={nextClick}
        backC={"#a64eff"}
      >
        <SadIcon />
        <StoryContactIconCountNumber nextClick={nextClick} backC={"#a64eff"}>
          {sadCount}
        </StoryContactIconCountNumber>
      </StoryContactIconWrapper>
    </MoreStoryContact>
  );
};

export default MoreStoryContactCp;
