import React from "react";
import SectionContainer from "../../StyledComponents/HomeStyle/SectionContainer";
import UserPosts from "../../UserPosts";
import styled from "styled-components";
import HowlZoneSection from "./HowlZoneSection";
import PostContentsWrapper from "../../StyledComponents/HomeStyle/Section2/PostContentsWrapper";
import { AiOutlinePlus } from "react-icons/ai";

const Section2 = () => {
  return (
    <SectionContainer2 flex="0 0 740px;">
      <PostContentsWrapper>
        <Ss>
          <StoryContentsWrapper>
            <MakeStoryContent>
              <StoryProfile>
                <MakeStoryProfileImg>
                  <PlusIcon />
                </MakeStoryProfileImg>
                <StoryProfileName>Howling</StoryProfileName>
              </StoryProfile>
            </MakeStoryContent>
            <StoryContent>
              <StoryProfile>
                <StoryProfileImg></StoryProfileImg>
                <StoryProfileName>myeongjae_7053..</StoryProfileName>
              </StoryProfile>
            </StoryContent>
            <StoryContent>
              <StoryProfile>
                <StoryProfileImg></StoryProfileImg>
                <StoryProfileName>kmjstjdwd3</StoryProfileName>
              </StoryProfile>
            </StoryContent>
            <StoryContent>d</StoryContent>
            <StoryContent>s</StoryContent>
            <StoryContent>s</StoryContent>
            <StoryContent>s</StoryContent>
            <StoryContent>s</StoryContent>
            <StoryContent>s</StoryContent>
            <StoryContent>s</StoryContent>
          </StoryContentsWrapper>
        </Ss>
        <UserPosts />
      </PostContentsWrapper>
    </SectionContainer2>
  );
};

const SectionContainer2 = styled(SectionContainer)`
  align-items: center;
  flex: ${(props) => props.flex};
  padding: 60px 20px 60px 20px;
`;

export default Section2;

//<HowlZoneSection />

const Ss = styled.div`
  width: 750px;
  height: 200px;
  display: flex;
  margin-bottom: 60px;
  margin-bottom: 60px;
`;

const StoryContentsWrapper = styled.div`
  display: flex;
  width: 750px;
  height: 230px;
  padding: 15px 5px 15px 5px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: transparent;
  }
  position: relative;
  border: 1px solid black;
`;

const StoryContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 130px;
  height: 180px;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02); /* 확대하는 변환을 적용 */
    border: 3px solid black;
  }
`;

const StoryProfile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const StoryProfileImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
  margin-bottom: 7px;
`;

const MakeStoryProfileImg = styled(StoryProfileImg)`
  & :hover {
    color: #f7dd07;
  }
`;

const StoryProfileName = styled.div`
  background-color: black;
  color: #fae66a;
  border-radius: 10px;
  font-size: 12px;
  font-family: "Gothic A1", sans-serif;
  padding: 5px 7px 5px 7px;
  text-align: center;
`;

const MakeStoryContent = styled(StoryContent)`
  background-color: #f7dd07;
`;

const LeftArrowButton = styled.div`
  width: 20px;
  height: 40px;
  position: absolute;
`;

const RightArrowButton = styled.div`
  width: 20px;
  height: 40px;
  position: absolute;
`;

const PlusIcon = styled(AiOutlinePlus)`
  color: white;
  font-size: 30px;
`;
