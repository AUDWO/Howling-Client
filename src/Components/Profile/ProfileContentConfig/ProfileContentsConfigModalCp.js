import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ModalOpenAtom from "../../../store/ModalOpenAtom";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import PostContentConfigOption from "./PostContentConfigOption";
import DiaryContentConfigOption from "./DiaryContentConfigOption";
import contentInfoAtom from "../../../store/contentInfo/diaryContentInfoAtom";
import axios from "axios";
import toggleValueAtom from "../../../store/ToggleValueAtom";
import stateUpdateAtom from "../../../store/stateUpdateAtom";

const ProfileContentConfigModalCp = () => {
  const profileContentConfigModalBackground = useRef();
  const setContentConfigModalOpen = useSetRecoilState(
    ModalOpenAtom("profileContentConfigModal")
  );

  const [contentChange, setContentChange] = useRecoilState(
    stateUpdateAtom("contentsChange")
  );

  const [diaryInfoOpen, setDiaryInfoOpen] = useState(false);
  const [postInfoOpen, setPostInfoOpen] = useState(false);

  const contentInfo = useRecoilValue(contentInfoAtom);

  useEffect(() => {
    if (contentInfo.type === "diary") {
      setDiaryInfoOpen(true);
    }

    if (contentInfo.type === "post") {
      setPostInfoOpen(true);
    }
  }, []);

  const handleDelete = async () => {
    if (diaryInfoOpen) {
      const response = await axios.delete(`/delete/diary/${contentInfo.id}`);
    }

    if (postInfoOpen) {
      const response = await axios.delete(`/delete/post/${contentInfo.id}`);
      setContentConfigModalOpen(false);
    }
    setContentConfigModalOpen(false);
    setContentChange(!contentChange);
  };

  if (diaryInfoOpen || postInfoOpen) {
    return (
      <ProfileConfigModalWrapper
        ref={profileContentConfigModalBackground}
        onClick={(e) => {
          if (e.target === profileContentConfigModalBackground.current) {
            setContentConfigModalOpen(false);
          }
        }}
      >
        <ProfileConfigWrapper>
          <ProfileConfigListItem>
            <ConfigTitleWrapper>
              <ConfigTitle>
                {diaryInfoOpen && "일기 정보 변경"}
                {postInfoOpen && "게시물 정보 변경"}
              </ConfigTitle>
            </ConfigTitleWrapper>
            {diaryInfoOpen && (
              <DiaryContentConfigOption contentInfo={contentInfo} />
            )}
            {postInfoOpen && (
              <PostContentConfigOption contentInfo={contentInfo} />
            )}
          </ProfileConfigListItem>
          <ProfileConfigListItem>
            <ConfigTitleWrapper>
              <ConfigTitle
                color={"red"}
                onClick={() => {
                  handleDelete();
                }}
              >
                {diaryInfoOpen && "일기 삭제"}
                {postInfoOpen && "게시물 삭제"}
              </ConfigTitle>
            </ConfigTitleWrapper>
          </ProfileConfigListItem>
          <ProfileConfigListItem>
            <ConfigTitleWrapper
              onClick={() => {
                setContentConfigModalOpen(false);
              }}
            >
              <ConfigTitle>닫기</ConfigTitle>
            </ConfigTitleWrapper>
          </ProfileConfigListItem>
        </ProfileConfigWrapper>
      </ProfileConfigModalWrapper>
    );
  }
};

export default ProfileContentConfigModalCp;

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

export const ProfileConfigModalWrapper = styled.div`
    position:fixed;
    z-index: 17;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  `;

export const ProfileConfigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 20;
  width: 500px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  opacity: 1;
`;

export const ProfileConfigListItem = styled.div`
  width: 100%;
  height: auto;
  border: 0.5px solid gray;
  color: gray;
  align-items: center;
  padding: 10px;
`;

export const ConfigTitle = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => (props.color ? props.color : "")};
  height: 40px;
`;

export const ConfigTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const OpenIcon = styled(MdOutlineKeyboardArrowDown)`
  font-size: 30px;
  cursor: pointer;
`;

export const CloseIcon = styled(MdOutlineKeyboardArrowUp)`
  font-size: 30px;
  cursor: pointer;
`;
