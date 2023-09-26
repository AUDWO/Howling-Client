import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Section1 from "../Components/Section1/Section1";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import Section3 from "../Components/Section3/Section3";
import Profile from "../Components/Profile";
import {
  DiaryContentsWrapper,
  DiaryContent,
  DiaryDate,
  DiaryImg,
  DiaryTitle,
  DiaryWrapper,
  DiaryNav,
} from "../StyledComponents/DiaryStyle/Diary";

const MoreDiary = () => {
  const textareaRef = useRef(null);
  useEffect(() => {
    resize();
  }, []);

  function resize() {
    let textarea = textareaRef.current;

    textarea.style.height = "0px";

    let scrollHeight = textarea.scrollHeight;
    let style = window.getComputedStyle(textarea);
    let borderTop = parseInt(style.borderTop);
    let borderBottom = parseInt(style.borderBottom);

    textarea.style.height = scrollHeight + borderTop + borderBottom + "px";
  }

  window.addEventListener("resize", resize);

  return (
    <HomeWraper>
      <Section1 />
      <DiaryWrapper padding="60px 20px" width="50%" height="1500px">
        <DiaryNav height="60px" padding="15px 20px 5px 20px">
          <Profile />
          <DiaryDate fontSize="30px">2023.09.19</DiaryDate>
        </DiaryNav>
        <DiaryContentsWrapper height="2000px" padding="40px 20px">
          <DiaryTitle fontSize="40px" height="80px" />
          <DiaryImg></DiaryImg>
          <DiaryContent
            id="target-textarea"
            ref={textareaRef}
            onChange={resize}
            fontSize="20px"
            width="100%"
            padding="10px"
          />
        </DiaryContentsWrapper>
      </DiaryWrapper>
      <Section3 />
    </HomeWraper>
  );
};

export default MoreDiary;
