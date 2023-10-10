import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import MakePostDragDownImgCp from "./MakePostDragDownImgCp";
import PostAdvancedSetupCp from "./PostAdvancedSetupCp";
import { useRecoilValue, useSetRecoilState } from "recoil";
import postImgAtom from "../../store/PostImgAtom";
import ModalOpenAtom from "../../store/ModalOpenAtom";

const MakePostModalCp = () => {
  const setMakePostModalOpen = useSetRecoilState(
    ModalOpenAtom("makePostModal")
  );

  const imgUrl = useRecoilValue(postImgAtom);
  const postModalBackground = useRef();
  const [textCheck, setTextCheck] = useState(true);
  const [text, setText] = useState(null);
  const [title, setTitle] = useState(null);
  const [likeCountControl, setLikeCountControl] = useState(true);
  const [commentControl, setCommentControl] = useState(true);
  const [contentControl, setContentControl] = useState(true);

  const formData = new FormData();
  formData.append("img", imgUrl);

  const postImgUpload = async (e) => {
    e.preventDefault();

    if (imgUrl && formData) {
      const response = await axios.post(
        "http://localhost:8005/post/img",
        formData
      );

      await axios.post("http://localhost:8005/post", {
        url: response.data.url,
        content: text,
        title: title,
        likeCountControl: likeCountControl,
        commentControl: commentControl,
        contentControl: contentControl,
        likeCount: 0,
        commentCount: 0,
      });
    }
  };

  return (
    <MakePostModal
      ref={postModalBackground}
      onClick={(e) => {
        if (e.target === postModalBackground.current) {
          setMakePostModalOpen(false);
        }
      }}
    >
      <MakePostWrapper>
        <MakePostProfileWrapper>
          <MakePostProfileImg></MakePostProfileImg>
          <MakePostNickname>myeongjae_7053</MakePostNickname>
        </MakePostProfileWrapper>
        <MakePostDragDownImgCp />
        <div>
          <MakePostTitle
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        {textCheck && (
          <MakePostContentWrapper>
            <MakePostContent
              placeholder="내용을 입력하세요!"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </MakePostContentWrapper>
        )}
        <MakePostOptionWrapper>
          <PostAdvancedSetupCp />
        </MakePostOptionWrapper>
        <MakePostFormWrapper
          onSubmit={(e) => {
            postImgUpload(e);
          }}
        >
          <MakePostButton type="submit">게시하기</MakePostButton>
          <MakePostCancelButton>삭제하기</MakePostCancelButton>
        </MakePostFormWrapper>
        <div>
          <EmptySpace></EmptySpace>
        </div>
      </MakePostWrapper>
    </MakePostModal>
  );
};

export default MakePostModalCp;

//---옵션

export const MakePostOptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 250px;
  margin-top: 60px;
`;

//----

export const EmptySpace = styled.div`
  width: 200px;
  height: 100px;
`;

export const MakePostTitle = styled.input`
  width: 100%;
  height: 50px;
  padding: 5px 10px 5px 10px;
  border: none;
  border-top: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
  font-size: 18px;
`;

//-----
const MakePostModal = styled.div`
  position: fixed;
  z-index: 17;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const MakePostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  width: 500px;
  height: 100%;
  overflow-y: auto;
  background-color: white;
  border-radius: 10px;
  opacity: 1;
`;

export const MakePostImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const MakePostImgSelectWrapper = styled.div``;

export const MakePostImgFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
`;

export const MakePostImgSelectButton = styled.label`
  font-size: 15px;
  font-weight: 600;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
  padding-right: 15px;
  color: black;
  border-radius: 10px;
  border: 1px solid black;
  &:hover {
    background-color: #f1f4f7;
  }
  cursor: pointer;
`;

export const MakePostImgInput = styled.input``;

export const MakePostImg = styled.img``;

export const MakePostContentWrapper = styled.div`
  border-bottom: 1px solid #bbbbbb;
  width: 100%;
  height: auto;
`;

export const MakePostProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const MakePostProfileImg = styled.img`
  background-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

export const MakePostNickname = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const MakePostContent = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  line-height: 1.3;
  padding: 15px 10px 10px 10px;
  font-size: 18px;
  outline: none;
  resize: none;
`;

export const MakePostFormWrapper = styled.form`
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  background-color: #f8f9fa;
  padding: 10px 20px 10px 20px;
  font-size: 15px;
  border-radius: 7px;
`;

export const MakePostButton = styled(Button)`
  color: black;
`;

export const MakePostCancelButton = styled(Button)`
  color: #ed203d;
`;
