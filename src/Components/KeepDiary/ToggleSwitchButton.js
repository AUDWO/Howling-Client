import React from "react";
import {
  ToggleSwitch,
  ToggleSwitchWrapper,
  Checkbox,
  ToggleButton,
} from "../../StyledComponents/KeepDiaryStyle/ToggleSwitchButton";

import toggleValueAtom from "../../store/ToggleValueAtom";
import { useRecoilState } from "recoil";

const ToggleSwitchButtonComponent = ({ inputId, atomName }) => {
  const [toggleValue, setToggleValue] = useRecoilState(
    toggleValueAtom(atomName)
  );

  return (
    <ToggleSwitchWrapper>
      <Checkbox
        id={inputId}
        type="checkbox"
        hidden
        value={toggleValue}
        onChange={() => setToggleValue(!toggleValue)}
      />
      <ToggleSwitch htmlFor={inputId}>
        <ToggleButton></ToggleButton>
      </ToggleSwitch>
    </ToggleSwitchWrapper>
  );
};

export default ToggleSwitchButtonComponent;
