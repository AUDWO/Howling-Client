import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import NoPostContentCp from "./NoPostContentCp";
import axios from "axios";
import ProfilePostsInfoCp from "./ProfilePostsInfoCp";
import toggleValueAtom from "../../store/ToggleValueAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import contentInfoAtom from "../../store/contentInfo/diaryContentInfoAtom";
import ModalOpenAtom from "../../store/ModalOpenAtom";

//Icon
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import stateUpdateAtom from "../../store/stateUpdateAtom";

const ProfileContentsCp = ({ otherUserId, userInfo }) => {
  const [contents, setContents] = useState([]);

  const [contentsInfo, setContentsInfo] = useState({});

  const [postContentsOpen, setPostContentsOpen] = useRecoilState(
    toggleValueAtom("postContentsOpen")
  );
  const [diaryContentsOpen, setDiaryContentsOpen] = useRecoilState(
    toggleValueAtom("diaryContentsOpen")
  );

  const setContentConfigModalOpen = useSetRecoilState(
    ModalOpenAtom("profileContentConfigModal")
  );

  const [contentLender, setContentLender] = useRecoilState(
    toggleValueAtom("contentLender")
  );

  const setContentInfo = useSetRecoilState(contentInfoAtom);

  const contentsChange = useRecoilValue(stateUpdateAtom("contentsChange"));

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
          setContentLender(true);
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

  if (userInfo && contentLender) {
    return (
      <>
        <ProfilePostsInfoCp contentsInfo={userInfo} />
        {contents.length >= 1 ? (
          <>
            <ContentsWrapper>
              <ContentCardsWrapper>
                {contents.map((content) => (
                  <ContentCardWrapper>
                    {content.img ? (
                      <ContentCard src={content.img} />
                    ) : (
                      <ContentCardNoImg>Diary</ContentCardNoImg>
                    )}
                    {diaryContentsOpen && (
                      <>
                        {content.publicCheck ? (
                          <DiaryPublicOnIcon />
                        ) : (
                          <DiaryPublicOffIcon />
                        )}
                      </>
                    )}
                    <ContentDelete
                      onClick={() => {
                        setContentConfigModalOpen(true);
                        if (diaryContentsOpen) {
                          setContentInfo({ ...content, type: "diary" });
                        }
                        if (postContentsOpen) {
                          setContentInfo({ ...content, type: "post" });
                        }
                      }}
                    />
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

//Icon

export const DiaryPublicOnIcon = styled(FaLockOpen)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 25px;
`;

export const DiaryPublicOffIcon = styled(FaLock)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 25px;
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

export const ContentCardNoImg = styled.div`
  width: 350px;
  height: 350px;
  background-color: #f7dd07;
  color: black;
  object-fit: cover;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 90px;
  font-weight: 700;
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
