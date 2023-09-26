import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserWrapper from "../StyledComponents/HomeStyle/Section3/UserWrapper";
import ProfileWrapper from "../StyledComponents/HomeStyle/Section3/ProfileWrapper";
import Profile from "./Profile";
import {
  ContentWrapper,
  PostWrapper,
} from "../StyledComponents/HomeStyle/Section3/ContentWrapper";

const User = () => {
  const [nickname, setNickname] = useState("");
  const [follwer, setFollower] = useState("");
  const [following, setFollowing] = useState("");
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.get("http://localhost:8005/auth/logout");
    navigate("/login");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8005/page/user");
        setNickname(response.data.nickname);
        setFollower(response.data.follower);
        setFollowing(response.data.following);

        //setFollower(response.locals.followingCount);
      } catch (error) {
        console.error("Error fetching user");
      }
    };
    fetchData();
  }, []);
  return (
    <UserWrapper>
      <ProfileWrapper>
        <Profile nickname={nickname} />
      </ProfileWrapper>

      <ContentWrapper>
        <PostWrapper>
          <div>게시글</div>
          <div>number</div>
        </PostWrapper>
        <div>
          <div>일기</div>
          <div>number</div>
        </div>
      </ContentWrapper>
    </UserWrapper>
  );
};

export default User;

/**
 *  <div>{follwer}</div>
     
      <div>{following}</div>
      <form onSubmit={handleLogout}>
        <button type="submit">로그아웃</button>
      </form>
 */
