import React from "react";

import {
  AbleCheckbox,
  ToggleAbleButton,
  ToggleAbleSwitch,
} from "../../StyledComponents/KeepDiaryStyle/ToggleAbleSwitchButton";
import toggleValueAtom from "../../store/ToggleValueAtom";
import { useRecoilState } from "recoil";

const ToggleAbleSwitchComponent = ({ inputId, atomName }) => {
  const [toggleValue, setToggleValue] = useRecoilState(
    toggleValueAtom(`${atomName}`)
  );

  console.log(toggleValue);

  return (
    <>
      <AbleCheckbox
        id={inputId}
        type="checkbox"
        hidden
        checked={toggleValue}
        onChange={() => setToggleValue(!toggleValue)}
      />
      <ToggleAbleSwitch htmlFor={inputId}>
        <ToggleAbleButton></ToggleAbleButton>
      </ToggleAbleSwitch>
    </>
  );
};

export default ToggleAbleSwitchComponent;
