import React, { useState } from "react";
import DiaryAdvancedSetupComponent from "./DiaryAdvancedSetupComponent";
import ToggleSwitchButtonComponent from "./ToggleSwitchButton";
import DiaryImgSelectComponent from "./DiaryImgSelectComponent";

import {
  DiaryAdvanceSetupWrapper,
  DiaryOptionImg,
  DiaryOptionPublic,
} from "../../StyledComponents/KeepDiaryStyle/DiaryOption";

import toggleValueAtom from "../../store/ToggleValueAtom";
import { useRecoilValue } from "recoil";

const DiaryOptionComponent = () => {
  const toggleImgValue = useRecoilValue(toggleValueAtom("Img"));
  const togglePublicValue = useRecoilValue(toggleValueAtom("Public"));

  return (
    <DiaryAdvanceSetupWrapper>
      <DiaryOptionImg>
        사진 업로드
        <ToggleSwitchButtonComponent inputId={"toggleImg"} atomName={"Img"} />
      </DiaryOptionImg>
      {toggleImgValue && <DiaryImgSelectComponent />}
      <DiaryOptionPublic>
        공개
        <ToggleSwitchButtonComponent
          inputId={"togglePublic"}
          atomName={"Public"}
        />
      </DiaryOptionPublic>
      {togglePublicValue && <DiaryAdvancedSetupComponent />}
    </DiaryAdvanceSetupWrapper>
  );
};

export default DiaryOptionComponent;
