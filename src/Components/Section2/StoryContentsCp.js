import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import ModalOpenAtom from "../../store/ModalOpenAtom";
import axios from "axios";
import { Link } from "react-router-dom";
import StoryContentCp from "./StoryContentCp";
import stateUpdateAtom from "../../store/stateUpdateAtom";

const StoryContentsCp = () => {
  const storyUpdate = useRecoilValue(stateUpdateAtom("story"));
  console.log(storyUpdate);
  console.log("kakakkakakakakkakkakakkakak");
  const [storyModalOpen, setStoryModalOpen] = useRecoilState(
    ModalOpenAtom("makeStoryModal")
  );

  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStoryies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8005/page/renderStory"
        );

        setStories([...response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStoryies();
    setStoryModalOpen(false);
  }, [storyUpdate]);

  return (
    <Ss>
      <StoryContentsWrapper>
        <MakeStoryContent
          onClick={() => {
            setStoryModalOpen(!storyModalOpen);
          }}
        >
          <StoryProfile>
            <MakeStoryProfileImg>
              <PlusIcon />
            </MakeStoryProfileImg>
            <StoryProfileName>Howling</StoryProfileName>
          </StoryProfile>
        </MakeStoryContent>
        {stories.map((story) => {
          return (
            <Link to={`/morestory/${story.id}`} key={story.id}>
              <StoryContentCp index={story.id} story={story} />
            </Link>
          );
        })}
      </StoryContentsWrapper>
    </Ss>
  );
};

export default StoryContentsCp;

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

const PlusIcon = styled(AiOutlinePlus)`
  color: white;
  font-size: 30px;
`;
