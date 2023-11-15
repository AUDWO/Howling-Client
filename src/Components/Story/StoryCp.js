import React from "react";
import { useNavigate } from "react-router-dom";

import ModalOpenAtom from "../../store/ModalOpenAtom";
import { useSetRecoilState } from "recoil";

import {
  StoryContentsDiv,
  StoryContentsWrapper,
} from "../../StyledComponents/Story/StoryCpStyle";

import StoryContentCp from "./StoryContentCp";
import MakeStoryContentCp from "./MakeStoryContentCp";

const StoryCp = () => {
  const navigate = useNavigate();
  const setModalOpen = useSetRecoilState(ModalOpenAtom("makeStory"));
  return (
    <StoryContentsDiv>
      <StoryContentsWrapper>
        <MakeStoryContentCp
          onClick={() => {
            setModalOpen((prev) => !prev);
          }}
        />
        <StoryContentCp
          onClick={() => {
            navigate("/morestore");
          }}
        />
      </StoryContentsWrapper>
    </StoryContentsDiv>
  );
};

export default StoryCp;
