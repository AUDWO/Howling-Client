import React, { useState } from "react";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import Section1 from "../Components/Section1/Section1";
import DiaryOptionComponent from "../Components/KeepDiary/DiaryOption";
import axios from "axios";
import { RecoilRoot, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import {
  DiaryTextarea,
  DiaryContentText,
  PostDiaryButton,
  PostDiaryButtonForm,
  DiaryTextareaWrapper,
  DiaryOptionWrapper,
  KeepDiaryTitle,
  DeleteDiaryButton,
} from "../StyledComponents/KeepDiaryStyle/KeepDiary";
import toggleValueAtom from "../store/ToggleValueAtom";
import imgUrlAtom from "../store/imgUrlAtom";

const MakeDiary = () => {
  const viewCheck = useRecoilValue(toggleValueAtom("diaryView"));
  const likeCheck = useRecoilValue(toggleValueAtom("diaryLike"));
  const commentCheck = useRecoilValue(toggleValueAtom("diaryComment"));
  const publicCheck = useRecoilValue(toggleValueAtom("public"));
  const imgUrlData = useRecoilValue(imgUrlAtom("diaryImg"));

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const formData = new FormData();
  formData.append("img", imgUrlData);

  const navigate = useNavigate();

  const handlePostDiary = async () => {
    try {
      const response = await axios.post("/post/diaryimg", formData);

      await axios.post("/post/diary", {
        url: response.data.url,
        viewCheck: viewCheck,
        likeCheck: likeCheck,
        commentCheck: commentCheck,
        publicCheck: publicCheck,
        content: content,
        title: title,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HomeWraper>
      <DiaryOptionWrapper>
        <KeepDiaryTitle
          placeholder="제목을 입력해주세요..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <DiaryOptionComponent />
      </DiaryOptionWrapper>
      <DiaryTextareaWrapper>
        <DiaryContentText>내용</DiaryContentText>
        <DiaryTextarea
          name="content"
          value={content}
          placeholder="당신의 이야기를 들려주세요."
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></DiaryTextarea>
        <PostDiaryButtonForm>
          <PostDiaryButton
            onClick={(e) => {
              e.preventDefault();
              handlePostDiary();
              setTimeout(() => {
                navigate("/dashboard/diary");
              }, 500);
            }}
          >
            일기쓰기
          </PostDiaryButton>
          <DeleteDiaryButton>삭제하기</DeleteDiaryButton>
        </PostDiaryButtonForm>
      </DiaryTextareaWrapper>
    </HomeWraper>
  );
};

export default MakeDiary;
