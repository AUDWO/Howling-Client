import React from "react";
import styled from "styled-components";

import ProfileInfoCp from "./ProfileInfoCp";
import ProfilePostsCp from "./ProfilePostsCp";

const ProfileCp = () => {
  return (
    <ProfilePageWrapper>
      <ProfileWrapper>
        <ProfileImg />
        <ProfileInfoCp />
      </ProfileWrapper>
      <PostsInfoWrapper>
        <PostCountWrapper>
          <PostCountTitle>게시물</PostCountTitle>
          <PostCountNumber>0</PostCountNumber>
        </PostCountWrapper>
        <DiaryCountWrapper>
          <DiaryCountTitle>일기</DiaryCountTitle>
          <DiaryCountNumber>0</DiaryCountNumber>
        </DiaryCountWrapper>
      </PostsInfoWrapper>
      <ProfilePostsCp />
    </ProfilePageWrapper>
  );
};

export default ProfileCp;

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

export const PostsInfoWrapper = styled.div`
  border-top: 0.5px solid #dbdbdb;
  display: flex;
  justify-content: center;
`;

export const PostCountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PostCountTitle = styled.div`
  padding-top: 10px;
  border-top: 1.5px solid black;
  font-size: 15px;
`;

export const PostCountNumber = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-left: 10px;
  padding-top: 10px;
`;

export const DiaryCountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
export const DiaryCountTitle = styled.div`
  padding-top: 10px;
  font-size: 15px;
`;
export const DiaryCountNumber = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-left: 10px;
  padding-top: 10px;
`;
