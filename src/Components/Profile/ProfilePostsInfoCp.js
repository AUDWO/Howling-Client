import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import toggleValueAtom from "../../store/ToggleValueAtom";

const ProfilePostsInfoCp = () => {
  const [postType, setPostType] = useRecoilState(toggleValueAtom("postType"));
  const [diaryType, setDiaryType] = useRecoilState(
    toggleValueAtom("diaryType")
  );

  useEffect(() => {
    setPostType(true);
  }, []);

  return (
    <PostsInfoWrapper>
      <CountWrapper>
        <CountTitle
          type={postType}
          onClick={() => {
            setPostType(true);
            setDiaryType(false);
          }}
        >
          게시물
        </CountTitle>
        <CountNumber marginL={"10"} paddingT={"10"}>
          0
        </CountNumber>
      </CountWrapper>
      <CountWrapper marginL={"50"}>
        <CountTitle
          type={diaryType}
          onClick={() => {
            setPostType(false);
            setDiaryType(true);
          }}
        >
          일기
        </CountTitle>
        <CountNumber marginL={"10"} paddingT={"10"}>
          0
        </CountNumber>
      </CountWrapper>
    </PostsInfoWrapper>
  );
};

export default ProfilePostsInfoCp;

let marginDirection = {
  marginL: "margin-left",
  marginR: "margin-right",
  marginB: "margin-bottom",
  marginT: "margin-top",
};

let paddingDirection = {
  paddingT: "padding-top",
  paddingL: "padding-left",
  paddingB: "padding-bottom",
  paddingR: "padding-right",
};

let paddingDynamic = (props) => {
  let paddingValue = ``;

  for (const key in props) {
    if (paddingDirection[key]) {
      paddingValue += `
      ${paddingDirection[key]} : ${props[key]}px
      `;
    }
  }

  return paddingValue;
};

let marginDynamic = (props) => {
  let marginValue = ``;

  for (const key in props) {
    if (marginDirection[key]) {
      marginValue += `
      ${marginDirection[key]} : ${props[key]}px
      `;
    }
  }

  return marginValue;
};

export const PostsInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 5%;
  border-top: 0.5px solid #dbdbdb;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${(props) => marginDynamic(props)};
`;

export const CountTitle = styled.div`
  height: 100%;
  padding-top: 10px;

  border-top: ${(props) => (props.type ? "1.5px solid black" : "")};
  font-size: 15px;
  cursor: pointer;
`;

export const CountNumber = styled.div`
  height: 100%;
  font-size: 15px;
  font-weight: 700;
  ${(props) => marginDynamic(props)};
  ${(props) => paddingDynamic(props)};
`;
