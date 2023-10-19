import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileInfoCp from "./ProfileInfoCp";
import ProfilePostsInfoCp from "./ProfilePostsInfoCp";
import NoPostContentCp from "./NoPostContentCp";
import { useRecoilValue } from "recoil";
import toggleValueAtom from "../../store/ToggleValueAtom";
import axios from "axios";

const ProfileCp = () => {
  const postContentOpen = useRecoilValue(toggleValueAtom("postType"));
  const diaryContentOpen = useRecoilValue(toggleValueAtom("diaryType"));

  const [contents, setContents] = useState([]);

  useEffect(() => {
    const handleType = () => {
      if (postContentOpen) {
        return "posts";
      }
      if (diaryContentOpen) {
        return "Diaries";
      }
    };
    const fetchContentsData = async () => {
      try {
        const response = await axios.get(`/page/${handleType()}`);
        setContents([...response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContentsData();
  }, [postContentOpen, diaryContentOpen]);

  return (
    <ProfilePageWrapper>
      <ProfileWrapper>
        <ProfileImg />
        <ProfileInfoCp />
      </ProfileWrapper>
      <ProfilePostsInfoCp />
      {contents.length >= 1 ? (
        <ContentsWrapper>
          <ContentCardsWrapper>
            {contents.map((content) => {
              <ContentCard src={content.img} />;
            })}
          </ContentCardsWrapper>
        </ContentsWrapper>
      ) : (
        <>
          {postContentOpen && (
            <NoPostContentCp
              title={"게시물 올리기"}
              content={"게시물을 올리면 회원님의 프로필에 표시됩니다."}
              subtitle={"게시물 올리기"}
            />
          )}
          {diaryContentOpen && (
            <NoPostContentCp
              title={"일기 쓰기"}
              content={"일기를 쓰면 회원님의 프로필에 표시됩니다."}
              subtitle={"일기 쓰기"}
            />
          )}
        </>
      )}
    </ProfilePageWrapper>
  );
};

export default ProfileCp;

export const ProfilePageWrapper = styled.div`
  flex: 1;
  height: 100vh;
`;

export const ProfileWrapper = styled.div`
  height: 35%;
  display: flex;
  padding: 40px 60px 40px 60px;
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: black;
`;

//------

export const ContentsWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentCardsWrapper = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 10px;
  border: 1px solid red;
`;

export const ContentCard = styled.img`
  width: 300px;
  height: 300px;
  background-color: black;
`;
