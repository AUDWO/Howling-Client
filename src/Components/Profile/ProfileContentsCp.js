import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import NoPostContentCp from "./NoPostContentCp";
import axios from "axios";
import ProfilePostsInfoCp from "./ProfilePostsInfoCp";
import toggleValueAtom from "../../store/ToggleValueAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { PostsInfoWrapper } from "./ProfileInfoCp";

const ProfileContentsCp = ({ otherUserId, userInfo }) => {
  const [contents, setContents] = useState([]);

  const [contentsInfo, setContentsInfo] = useState({});

  const [postContentsOpen, setPostContentsOpen] = useRecoilState(
    toggleValueAtom("postContentsOpen")
  );

  const [diaryContentsOpen, setDiaryContentsOpen] = useRecoilState(
    toggleValueAtom("diaryContentsOpen")
  );

  const contentsChange = useRecoilValue(toggleValueAtom("contentsChange"));

  const handleUser = () => {
    if (otherUserId) {
      return otherUserId;
    }
    if (userInfo) {
      return userInfo.id;
    }
  };

  const handleType = () => {
    if (postContentsOpen) {
      return "posts";
    }
    if (diaryContentsOpen) {
      return "diaries";
    }
  };

  useEffect(() => {
    if (!diaryContentsOpen) {
      setPostContentsOpen(true);
    }

    const fetchContentsData = async () => {
      try {
        if (postContentsOpen || diaryContentsOpen) {
          const contentsResponse = await axios.get(
            `/page/render-${handleType()}/${handleUser()}`
          );
          setContents([...contentsResponse.data]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchContentsInfoData = async () => {
      try {
        const contentsInfoResponse = await axios.get(
          `/page/user-info/${otherUserId}`
        );
        setContentsInfo({ ...contentsInfoResponse.data });
      } catch (error) {
        console.error(error);
      }
    };
    if (otherUserId) {
      fetchContentsInfoData();
    }
    fetchContentsData();
  }, [postContentsOpen, diaryContentsOpen, contentsChange]);

  if (otherUserId && Object.keys(contentsInfo).length >= 1) {
    console.log("otherUserId-ProfileContentsCp");
    return (
      <>
        <ProfilePostsInfoCp contentsInfo={contentsInfo} />
        {contents.length >= 1 ? (
          <>
            <ContentsWrapper>
              <ContentCardsWrapper>
                {contents.map((content) => (
                  <ContentCardWrapper>
                    <ContentCard src={content.img} />
                    {diaryContentsOpen && <PublicOrNot>공개</PublicOrNot>}
                    <ContentDelete />
                  </ContentCardWrapper>
                ))}
              </ContentCardsWrapper>
            </ContentsWrapper>
            <SpaceCp />
          </>
        ) : (
          <>
            {postContentsOpen && (
              <NoPostContentCp
                title={"게시물 올리기"}
                content={"게시물을 올리면 회원님의 프로필에 표시됩니다."}
                subtitle={"게시물 올리기"}
              />
            )}
            {diaryContentsOpen && (
              <NoPostContentCp
                title={"일기 쓰기"}
                content={"일기를 쓰면 회원님의 프로필에 표시됩니다."}
                subtitle={"일기 쓰기"}
              />
            )}
          </>
        )}
      </>
    );
  }

  if (userInfo && contents.length >= 1) {
    return (
      <>
        <ProfilePostsInfoCp contentsInfo={userInfo} />
        {contents.length >= 1 ? (
          <>
            <ContentsWrapper>
              <ContentCardsWrapper>
                {contents.map((content) => (
                  <ContentCardWrapper>
                    <ContentCard src={content.img} />
                    {diaryContentsOpen && <PublicOrNot>공개</PublicOrNot>}
                    <ContentDelete />
                  </ContentCardWrapper>
                ))}
              </ContentCardsWrapper>
            </ContentsWrapper>
            <SpaceCp />
          </>
        ) : (
          <>
            {postContentsOpen && (
              <NoPostContentCp
                title={"게시물 올리기"}
                content={"게시물을 올리면 회원님의 프로필에 표시됩니다."}
                subtitle={"게시물 올리기"}
              />
            )}
            {diaryContentsOpen && (
              <NoPostContentCp
                title={"일기 쓰기"}
                content={"일기를 쓰면 회원님의 프로필에 표시됩니다."}
                subtitle={"일기 쓰기"}
              />
            )}
          </>
        )}
      </>
    );
  }
};

export default ProfileContentsCp;

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

export const ContentDelete = styled(BsThreeDotsVertical)`
  font-size: 30px;
  position: absolute;
  top: 10px;
  right: 15px;
  opacity: 0;
  border-radius: 50%;
  color: #f7dd07;
  background-color: rgba(128, 128, 128, 0.5);
  cursor: pointer;
  transition: all 0.1s;
  padding: 4px;
`;

export const ContentCardWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  background-color: black;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    ${ContentDelete} {
      opacity: 1;
    }
  }
`;

export const SpaceCp = styled.div`
  width: 100px;
  height: 100px;
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
