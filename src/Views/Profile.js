import React from "react";
import styled from "styled-components";
import Section1 from "../Components/Section1/Section1";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import Middle from "../StyledComponents/Middle";

const Profile = () => {
  return (
    <HomeWraper>
      <Section1 />
      <ProfilePageWrapper>
        <ProfileWrapper>
          <ProfileImg />
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
      </ProfilePageWrapper>
    </HomeWraper>
  );
};

export default Profile;

/**
 * 
 *  <HomeWraper>
      <Section1 />
      <div>안녕</div>
    </HomeWraper>
 */

export const ProfilePageWrapper = styled.div`
  flex: 1;
  height: auto;
  border: 5px solid black;
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

//-------------------------
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

// Post

export const ProfilePostsWrapper = styled.div`
  flex: 1;
  height: auto;
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
