import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import userInfoAtom from "../../store/userState/userAtom";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileImgCp from "./ProfileImgCp";
import ProfileContentsCp from "./ProfileContentsCp";
import ProfileContentConfigModalCp from "./ProfileContentConfig/ProfileContentsConfigModalCp";

const ProfileCp = ({ otherUserId }) => {
  const userInfo = useRecoilValue(userInfoAtom);
  /*
  useEffect(() => {
    if (!diaryContentsOpen) setPostContentsOpen(true);

    const handleType = () => {
      if (postContentsOpen) {
        return "posts";
      }
      if (diaryContentsOpen) {
        return "diaries";
      }
    };

    const handleUser = () => {
      if (otherUserId) {
        return otherUserId;
      }
      if (!otherUserId) {
        return userInfo.id;
      }
    };

    const fetchContentsData = async () => {
      try {
        if (postContentOpen) {
          const contentsResponse = await axios.get(
            `/page/render-${handleType()}/${handleUser()}`
          );
          setContents([...contentsResponse.data]);

       
          setContentsOpen(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (otherUserId) {
      fetchContentsData();
    }

    if (!otherUserId) {
      const fetchBasicContentData = async () => {
        const response2 = await axios.get(
          `/page/render-${handleType()}/${handleUser()}`
        );
        setContents([...response2.data]);
        setContentsOpen(true);
      };
      fetchBasicContentData();
    }
  }, [otherUserId, postContentsOpen, diaryContentsOpen]);

*/

  if (otherUserId) {
    return (
      <>
        <ProfilePageWrapper>
          <ProfileImgCp otherUserId={otherUserId} />
          <ProfileContentsCp otherUserId={otherUserId} />
        </ProfilePageWrapper>
      </>
    );
  }

  if (userInfo) {
    return (
      <ProfilePageWrapper>
        <ProfileImgCp userInfo={userInfo} />
        <ProfileContentsCp userInfo={userInfo} />
      </ProfilePageWrapper>
    );
  }
};

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
  object-fit: cover;
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

export const ContentControlModal = styled.div``;

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
