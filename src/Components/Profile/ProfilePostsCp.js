import React from "react";
import styled from "styled-components";

const ProfilePostsCp = () => {
  return (
    <ProfilePostsWrapper>
      <ThreePostsWrapper>
        <Post></Post>
        <MiddlePost></MiddlePost>
        <Post></Post>
      </ThreePostsWrapper>
      <ThreePostsWrapper>
        <Post></Post>
        <MiddlePost></MiddlePost>
        <Post></Post>
      </ThreePostsWrapper>
      <ThreePostsWrapper>
        <Post></Post>
        <MiddlePost></MiddlePost>
        <Post></Post>
      </ThreePostsWrapper>
    </ProfilePostsWrapper>
  );
};

export default ProfilePostsCp;
export const ProfilePostsWrapper = styled.div`
  flex: 1;
  height: auto;
  margin-top: 10px;
`;

export const ThreePostsWrapper = styled.div`
  display: flex;
  width: 1020px;
  height: 340px;
  margin-bottom: 10px;
`;

export const Post = styled.div`
  background-color: black;
  width: 340px;
  height: 340px;
`;

export const MiddlePost = styled.div`
  background-color: black;

  width: 340px;
  height: 340px;
  margin-left: 10px;
  margin-right: 10px;
`;
