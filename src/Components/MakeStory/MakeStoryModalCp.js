import React, { useState, useRef } from "react";
import MakeStoryImgCp from "./MakeStoryImgCp";
import MakeStoryContentCp from "./MakeStoryContentCp";
import {
  MakeStoryWrapper,
  MakeStoryModal,
} from "../../StyledComponents/MakeStoryStyle/MakeStoryModalCpStyle";
const MakeStoryModalCp = () => {
  const [makeStoryModalOpen, setMakeStoryModalOpen] = useState(true);

  const storyModalBackground = useRef();
  return (
    <MakeStoryModal
      ref={storyModalBackground}
      onClick={(e) => {
        if (e.target === storyModalBackground.current) {
          setMakeStoryModalOpen(false);
        }
      }}
    >
      <MakeStoryWrapper>
        <MakeStoryImgCp />
        <MakeStoryContentCp />
      </MakeStoryWrapper>
    </MakeStoryModal>
  );
};

export default MakeStoryModalCp;
