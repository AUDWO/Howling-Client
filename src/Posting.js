import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import axios from "axios";
//CSS Components
import PostWrapper from "./StyledComponents/PostStyle/PostWrapper";
import PostImg from "./StyledComponents/PostStyle/PostImg";
import Profile from "./Components/Profile";
import PostInfoWrapper from "./StyledComponents/PostStyle/PostInfoWrapper";
import PostImgWrapper from "./StyledComponents/PostStyle/PostImgWrapper";

import {
  CommentIcon,
  DownArrowIcon,
  UpArrowIcon,
  MoreIcon,
  ProfileIcon,
} from "./StyledComponents/HomeStyle/Section2/Icon";

const Posting = ({ post }) => {
  const [userNickname, setUserNickname] = useState("");

  const [click, setClick] = useState(false);

  useEffect(() => {
    const FindUerById = async (id) => {
      const response = await axios.get(`http://localhost:8005/user/${id}`);
      const userNickname = response.data.nickname;
      setUserNickname(userNickname);
    };

    FindUerById(post.UserId);
  }, []);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Ad>
      <PostWrapper>
        <PostImgWrapper click={click}>
          <PostImg src={post.img} alt="pst" />
          <div>{post.content}</div>
        </PostImgWrapper>
        <Bb click={click}>
          <div onClick={handleClick}>버튼 클릭</div>
        </Bb>
        <PostInfoWrapper click={click}>
          {userNickname && <Profile nickname={userNickname} />}
          <UpArrowIcon />
          <div>1</div>
          <DownArrowIcon />
          <CommentIcon onClick={handleClick} />
          <MoreIcon />
        </PostInfoWrapper>
      </PostWrapper>
    </Ad>
  );
};

export default Posting;

const Ad = styled.div`
  display: flex;
  border: 1px solid black;
  width: 100%;
`;

export const Bb = styled.div`
  background-color: #f6f9f9;
  background-color: red;
  opacity: 0.3;
  z-index: 4;
  width: 400px;
  height: 100%;
  position: absolute;
  transition: all 0.3s ease-in-out;
  transform: ${({ click }) =>
    click ? "translate3d(400px, 0, 0)" : "translate3d(99px, 0, 0)"};
`;
