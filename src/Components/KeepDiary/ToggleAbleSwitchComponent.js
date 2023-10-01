import React from "react";

import {
  AbleCheckbox,
  ToggleAbleButton,
  ToggleAbleSwitch,
} from "../../StyledComponents/KeepDiaryStyle/ToggleAbleSwitchButton";

const ToggleAbleSwitchComponent = ({ inputId }) => {
  return (
    <>
      <AbleCheckbox id={inputId} type="checkbox" hidden />
      <ToggleAbleSwitch htmlFor={inputId}>
        <ToggleAbleButton></ToggleAbleButton>
      </ToggleAbleSwitch>
    </>
  );
};

export default ToggleAbleSwitchComponent;
