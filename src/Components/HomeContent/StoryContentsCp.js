import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { Link } from "react-router-dom";

//Styled-Components
import {
  StoryWrapper,
  StoryContents,
  MakeStoryContent,
  StoryProfile,
  MakeStoryProfileImg,
  PlusIcon,
  StoryProfileName,
} from "../../StyledComponents/HomeContentStyle/StoryContentsCpSt";

//Component
import StoryContentCp from "./StoryContentCp";

//Atom
import ModalOpenAtom from "../../store/ModalOpenAtom";
import stateUpdateAtom from "../../store/stateUpdateAtom";

const StoryContentsCp = () => {
  const storyUpdate = useRecoilValue(stateUpdateAtom("story"));

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
    <StoryWrapper>
      <StoryContents>
        <MakeStoryContent
          onClick={() => {
            setStoryModalOpen(!storyModalOpen);
          }}
        >
          <StoryProfile>
            <MakeStoryProfileImg>
              <PlusIcon />
            </MakeStoryProfileImg>
            <StoryProfileName>Make story</StoryProfileName>
          </StoryProfile>
        </MakeStoryContent>
        {stories.map((story) => {
          return (
            <Link to={`/more-story/${story.id}`} key={story.id}>
              <StoryContentCp index={story.id} story={story} />
            </Link>
          );
        })}
      </StoryContents>
    </StoryWrapper>
  );
};

export default StoryContentsCp;
