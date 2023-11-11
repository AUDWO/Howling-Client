import React, { useEffect, useState } from "react";
import DiaryAdvancedSetupComponent from "./DiaryAdvancedSetupComponent";
import ToggleSwitchButtonCp from "./ToggleSwitchButton";
import DiaryImgSelectComponent from "./DiaryImgSelectComponent";

import {
  DiaryAdvanceSetupWrapper,
  DiaryOptionImg,
  DiaryOptionPublic,
} from "../../StyledComponents/KeepDiaryStyle/DiaryOption";

import toggleValueAtom from "../../store/ToggleValueAtom";
import { useRecoilState } from "recoil";

const DiaryOptionComponent = () => {
  const [toggleImgValue, setToggleImgValue] = useRecoilState(
    toggleValueAtom("Img")
  );
  const [togglePublicValue, setTogglePublicValue] = useRecoilState(
    toggleValueAtom("public")
  );
  /*
  useEffect(() => {
    return () => {
      setToggleImgValue(false);
      toggleImgValue(false);
    };
  }, []);
*/
  return (
    <DiaryAdvanceSetupWrapper>
      <DiaryOptionImg>
        사진 업로드
        <ToggleSwitchButtonCp inputId={"toggleImg"} atomName={"Img"} />
      </DiaryOptionImg>
      {toggleImgValue && <DiaryImgSelectComponent />}
      <DiaryOptionPublic>
        공개
        <ToggleSwitchButtonCp inputId={"togglePublic"} atomName={"public"} />
      </DiaryOptionPublic>
      {togglePublicValue && <DiaryAdvancedSetupComponent />}
    </DiaryAdvanceSetupWrapper>
  );
};

export default DiaryOptionComponent;
