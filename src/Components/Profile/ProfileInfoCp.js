import React from "react";
import styled from "styled-components";

const ProfileInfoCp = () => {
  return (
    <ProfileInfoWrapper>
      <ProfileEditWrapper>
        <ProfileEditButton>프로필 편집</ProfileEditButton>
      </ProfileEditWrapper>
      <ProfileNmaeWrapper>
        <ProfileNickname>myeongjae_7053</ProfileNickname>
      </ProfileNmaeWrapper>
      <ProfileName>김명재</ProfileName>
      <ProfileJoinedWrapper>
        <ProfileJoinedTitle>Joined</ProfileJoinedTitle>
        <ProfileJoineDate>2023.04.05</ProfileJoineDate>
      </ProfileJoinedWrapper>
      <FollowCountWrapper>
        <FollowerWrapper>
          <FollowerTitle>팔로워</FollowerTitle>
          <FollowerCountNumber>142</FollowerCountNumber>
        </FollowerWrapper>
        <FollowingWrapper>
          <FollowingTitle>팔로우</FollowingTitle>
          <FolloiwngCountNumber>122</FolloiwngCountNumber>
        </FollowingWrapper>
      </FollowCountWrapper>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfoCp;

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
