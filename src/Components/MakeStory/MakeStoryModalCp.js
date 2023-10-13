import React, { useRef } from "react";
import MakeStoryImgCp from "./MakeStoryImgCp";
import MakeStoryContentCp from "./MakeStoryContentCp";
import ModalOpenAtom from "../../store/ModalOpenAtom";
import {
  MakeStoryWrapper,
  MakeStoryModal,
} from "../../StyledComponents/MakeStoryStyle/MakeStoryModalCpStyle";
import { useSetRecoilState } from "recoil";
const MakeStoryModalCp = () => {
  const setMakeStoryModalOpen = useSetRecoilState(
    ModalOpenAtom("makeStoryModal")
  );

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
