import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileInfoCp from "./ProfileInfoCp";
import axios from "axios";

const ProfileImgCp = ({ userInfo, otherUserId }) => {
  const [otherUserInfo, setOtherUserInfo] = useState(null);
  useEffect(() => {
    const fetchOtherUserInfoData = async () => {
      try {
        const otherUserInfoResponse = await axios.get(
          `/page/user-info/${otherUserId}`
        );

        setOtherUserInfo({ ...otherUserInfoResponse.data });
      } catch (error) {
        console.error(error);
      }
    };

    if (otherUserId) {
      fetchOtherUserInfoData();
    }
  }, []);

  if (userInfo) {
    return (
      <ProfileWrapper>
        <ProfileImg src={userInfo.img} />
        <ProfileInfoCp userInfo={userInfo} />
      </ProfileWrapper>
    );
  }

  if (otherUserId && Object.keys(otherUserInfo).length >= 1) {
    <ProfileWrapper>
      <ProfileImg src={otherUserInfo.img} />
      <ProfileInfoCp otherUserInfo={otherUserInfo} />
    </ProfileWrapper>;
  }
};

export default ProfileImgCp;

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
