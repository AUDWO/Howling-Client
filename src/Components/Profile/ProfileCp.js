import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileInfoCp from "./ProfileInfoCp";
import ProfilePostsInfoCp from "./ProfilePostsInfoCp";
import NoPostContentCp from "./NoPostContentCp";
import { useRecoilValue } from "recoil";
import toggleValueAtom from "../../store/ToggleValueAtom";
import axios from "axios";
import userInfoAtom from "../../store/userState/userAtom";

const ProfileCp = ({ userId }) => {
  const postContentOpen = useRecoilValue(toggleValueAtom("postType"));
  const diaryContentOpen = useRecoilValue(toggleValueAtom("diaryType"));

  const [contents, setContents] = useState([]);
  const userInfo = useRecoilValue(userInfoAtom);

  useEffect(() => {
    const handleType = () => {
      if (postContentOpen) {
        return "posts";
      }
      if (diaryContentOpen) {
        return "diaries";
      }
    };

    const handleUser = () => {
      if (userId) {
        return userId;
      }
      if (!userId) {
        return userInfo.id;
      }
    };
    const fetchContentsData = async () => {
      try {
        const response = await axios.get(
          `/page/render-${handleType()}/${handleUser()}`
        );
        setContents([...response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContentsData();
  }, [postContentOpen, diaryContentOpen]);
  if (userId) {
    return (
      <ProfilePageWrapper>
        <ProfileWrapper>
          <ProfileImg />
          <ProfileInfoCp userId={userId} />
        </ProfileWrapper>
        <ProfilePostsInfoCp />
        {contents.length >= 1 ? (
          <>
            <ContentsWrapper>
              <ContentCardsWrapper>
                {contents.map((content) => (
                  <ContentCardWrapper>
                    <ContentCard src={content.img} />
                    <PublicOrNot>공개</PublicOrNot>
                  </ContentCardWrapper>
                ))}
              </ContentCardsWrapper>
            </ContentsWrapper>
            <SpaceCp />
          </>
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
  }

  if (!userId) {
    return (
      <ProfilePageWrapper>
        <ProfileWrapper>
          <ProfileImg />
          <ProfileInfoCp />
        </ProfileWrapper>
        <ProfilePostsInfoCp />
        {contents.length >= 1 ? (
          <>
            <ContentsWrapper>
              <ContentCardsWrapper>
                {contents.map((content) => (
                  <ContentCardWrapper>
                    <ContentCard src={content.img} />
                    <PublicOrNot>공개</PublicOrNot>
                  </ContentCardWrapper>
                ))}
              </ContentCardsWrapper>
            </ContentsWrapper>
            <SpaceCp />
          </>
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
  }
};

/**
 *  {contents.map((content) => (
              <ContentCardWrapper>
                <ContentCard />
                <PublicOrNot>공개</PublicOrNot>
              </ContentCardWrapper>
            ))}
 * 
 */

export default ProfileCp;

export const ProfilePageWrapper = styled.div`
  flex: 1;
  height: 100vh;
  padding-top: 20px;
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

export const SpaceCp = styled.div`
  width: 100px;
  height: 100px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const ContentCardsWrapper = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 10px;
  border: 1px solid red;
`;

export const ContentCard = styled.img`
  width: 350px;
  height: 350px;
  background-color: black;
  object-fit: cover;
  cursor: pointer;
`;

export const ContentCardWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  background-color: black;
  cursor: pointer;
`;

export const PublicOrNot = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  border: 3px solid #f7dd07;
  border-radius: 10px;
  color: #f7dd07;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px 5px 10px;
  background-color: black;
`;
