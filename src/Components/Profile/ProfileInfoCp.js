import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import userInfoAtom from "../../store/userState/userAtom";
import axios from "axios";

const ProfileInfoCp = ({ userId }) => {
  const userInfo = useRecoilValue(userInfoAtom);

  const [a, setA] = useState("");
  console.log("123456789");
  console.log(userInfo);
  console.log("123456789");
  const [otherUserInfo, setOtherUserInfo] = useState({});
  const [checkFollower, setCheckFollower] = useState(false);

  const handleDate = (obj) => {
    const dateObject = new Date(obj.createdAt);
    const year = dateObject.getUTCFullYear();
    const month = dateObject.getUTCMonth() + 1;
    const day = dateObject.getUTCDate();

    return `${year}-${month}-${day}`;
  };

  const handleFollow = async () => {
    try {
      await axios.post(`/user/${userId}/follow`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnFollow = async () => {
    try {
      await axios.post(`/user/${userId}/unfollow`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchFollowData = async () => {
      try {
        const response2 = await axios.get(`/user/find-followerr/${userId}`);
        setCheckFollower(response2.data);
        const response = await axios.get(`/user/find-follower/${userId}`);
        setOtherUserInfo({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    };
    if (userId) {
      fetchFollowData();
    }
  }, [userId, checkFollower]);

  if (Object.keys(otherUserInfo).length >= 1) {
    return (
      <ProfileInfoWrapper>
        <ProfileEditWrapper>
          <ProfileEditButton>프로필 편집</ProfileEditButton>
        </ProfileEditWrapper>
        <ProfileNmaeWrapper>
          <ProfileNickname>{otherUserInfo.nickname}</ProfileNickname>
          {checkFollower ? (
            <FollowButton
              onClick={() => {
                handleUnFollow();
              }}
            >
              팔로우 취소
            </FollowButton>
          ) : (
            <FollowButton
              onClick={() => {
                handleFollow();
              }}
            >
              팔로우
            </FollowButton>
          )}
        </ProfileNmaeWrapper>
        <ProfileName>김명재</ProfileName>
        <ProfileJoinedWrapper>
          <ProfileJoinedTitle>Joined</ProfileJoinedTitle>
          <ProfileJoineDate>{handleDate(otherUserInfo)}</ProfileJoineDate>
        </ProfileJoinedWrapper>
        <FollowCountWrapper>
          <FollowerWrapper>
            <FollowerTitle>팔로워</FollowerTitle>
            <FollowerCountNumber>
              {otherUserInfo.Followers.length}
            </FollowerCountNumber>
          </FollowerWrapper>
          <FollowingWrapper>
            <FollowingTitle>팔로우</FollowingTitle>
            <FolloiwngCountNumber>
              {otherUserInfo.Followings.length}
            </FolloiwngCountNumber>
          </FollowingWrapper>
        </FollowCountWrapper>
      </ProfileInfoWrapper>
    );
  }
  if (!Object.keys(otherUserInfo).length >= 1)
    return (
      <ProfileInfoWrapper>
        <ProfileEditWrapper>
          <ProfileEditButton>프로필 편집</ProfileEditButton>
        </ProfileEditWrapper>
        <ProfileNmaeWrapper>
          <ProfileNickname>{userInfo.nickname}</ProfileNickname>
        </ProfileNmaeWrapper>
        <ProfileName>김명재</ProfileName>
        <ProfileJoinedWrapper>
          <ProfileJoinedTitle>Joined</ProfileJoinedTitle>
          <ProfileJoineDate>{handleDate(userInfo)}</ProfileJoineDate>
        </ProfileJoinedWrapper>
        <FollowCountWrapper>
          <FollowerWrapper>
            <FollowerTitle>팔로워</FollowerTitle>
            <FollowerCountNumber>{userInfo.follower}</FollowerCountNumber>
          </FollowerWrapper>
          <FollowingWrapper>
            <FollowingTitle>팔로우</FollowingTitle>
            <FolloiwngCountNumber>{userInfo.following}</FolloiwngCountNumber>
          </FollowingWrapper>
        </FollowCountWrapper>
      </ProfileInfoWrapper>
    );
};

export default ProfileInfoCp;

//----팔로우 버튼
export const FollowButton = styled.span`
  font-size: 15px;
  border-radius: 7px;
  background-color: #f7dd07;
  color: white;
  margin-left: 10px;
  padding: 7px 15px;
  cursor: pointer;
`;

//-----

export const ProfilePageWrapper = styled.div`
  flex: 1;
  height: auto;
  border: 5px solid red;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  padding: 40px 60px 40px 60px;
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: black;
`;

export const ProfileInfoWrapper = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const ProfileEditWrapper = styled.div`
  margin-bottom: 10px;
`;

export const ProfileEditButton = styled.button``;

export const ProfileNmaeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProfileName = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ProfileNickname = styled.div`
  font-size: 25px;
  margin-right: 20px;
`;

export const ProfileJoinedWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const ProfileJoinedTitle = styled.div`
  margin-right: 10px;
`;

export const ProfileJoineDate = styled.div``;

export const ProfileUserPostInfo = styled.div``;
//-----

export const FollowCountWrapper = styled.div`
  height: auto;
  margin-top: 30px;
  margin-bottom: 10px;
`;
export const FollowerWrapper = styled.span`
  margin-right: 40px;
`;

export const FollowerTitle = styled.span`
  font-size: 15px;
`;

export const FollowerCountNumber = styled.span`
  font-weight: 600;
  margin-left: 5px;
`;

export const FolloiwngCountNumber = styled.span`
  margin-left: 5px;
  font-weight: 600;
`;

export const FollowingWrapper = styled.span``;

export const PostsInfoWrapper = styled.div`
  border-top: 0.5px solid #dbdbdb;
  display: flex;
  justify-content: center;
`;

export const FollowingTitle = styled.span`
  font-size: 15px;
`;
