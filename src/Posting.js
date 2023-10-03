import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import axios from "axios";
//CSS Components
import PostWrapper from "./StyledComponents/PostStyle/PostWrapper";
import PostImg from "./StyledComponents/PostStyle/PostImg";

import PostInfoWrapper from "./StyledComponents/PostStyle/PostInfoWrapper";
import PostImgWrapper from "./StyledComponents/PostStyle/PostImgWrapper";

import {
  CommentIcon,
  DownArrowIcon,
  UpArrowIcon,
  MoreIcon,
  LikeIcon,
  LikeFillIcon,
} from "./StyledComponents/HomeStyle/Section2/Icon";

import { BsArrowDownCircleFill } from "react-icons/bs";
import { BiSolidArrowToBottom } from "react-icons/bi";
import { BiArrowToTop } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { CSSTransition } from "react-transition-group";

const Posting = ({ post }) => {
  const [userNickname, setUserNickname] = useState("");

  const [like, setLike] = useState(false);
  const [click, setClick] = useState(false);
  const [read, setRead] = useState(true);
  const [isRotated, setIsRotated] = useState(false);

  const handleIconClick = () => {
    setIsRotated(!isRotated);
  };

  /*
  useEffect(() => {
    const FindUerById = async (id) => {
      const response = await axios.get(`http://localhost:8005/user/${id}`);
      const userNickname = response.data.nickname;
      setUserNickname(userNickname);
    };

    FindUerById(post.UserId);
  }, []);
*/
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Ad>
      <PostWrapper>
        <PostImgWrapper click={click}>
          <PostImg src={post.img} alt="pst" />
          <PPp>
            <PpW>
              <Pp></Pp>
            </PpW>
            <Pname>myeongjae_7053</Pname>
          </PPp>
          <PostContentsWrapper>
            <PostTitleWrapper>
              <PostUserInfoWrapper>
                <PostUserName>myeongjae_7053</PostUserName>
                <PostTitle>사회적 특수계급</PostTitle>
              </PostUserInfoWrapper>
              <PostContentDownArrowIcon
                isRotated={isRotated}
                onClick={handleIconClick}
              />
            </PostTitleWrapper>

            {isRotated && (
              <PostContent>
                사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를
                창설할 수 없다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및
                그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.
                이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기
              </PostContent>
            )}
          </PostContentsWrapper>
        </PostImgWrapper>
        <CommentModalWrapper click={click}>
          <CommentOptionWrapper>
            <CommentTitle>댓글</CommentTitle>
            <CommentClosingIcon onClick={handleClick}>X</CommentClosingIcon>
          </CommentOptionWrapper>
          <CommentWrapper>안녕</CommentWrapper>
          <CommentWrapper>안녕</CommentWrapper>
          <CommentWrapper>안녕</CommentWrapper>
        </CommentModalWrapper>
        <PostInfoWrapper click={click}>
          <IconWrapper>
            <CommentIcon onClick={handleClick} />
            <CountNumber>12245</CountNumber>
          </IconWrapper>
          {like ? (
            <IconWrapper>
              <LikeFillIcon onClick={() => setLike(false)} />
              <CountNumber>12455</CountNumber>
            </IconWrapper>
          ) : (
            <IconWrapper>
              <LikeIcon onClick={() => setLike(true)} />
              <CountNumber></CountNumber>
            </IconWrapper>
          )}
          <IconWrapper>
            <MoreIcon />
            <CountNumber></CountNumber>
          </IconWrapper>
        </PostInfoWrapper>
      </PostWrapper>
    </Ad>
  );
};

const smoothAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);

  }
  to {
    opacity: 1;
    transform: translateY(0%);
    border-top: 0.5px solid black;

  }
`;

export const PostContent = styled.div`
  border-top: 0.5px solid black;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  line-height: 1.5;
  padding: 10px;
  animation: ${smoothAppear} 1s forwards;
`;
export const PostTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0px 10px 0px 10px;
`;

export const PostUserInfoWrapper = styled.div`
  display: flex;
`;
export const PostUserName = styled.div`
  font-weight: 700;
  margin-right: 10px;
`;

export const PostTitle = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  font-weight: 350;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  border-radius: 5px;
`;
export const PostContentArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  border-top: 0.5px solid black;
`;

export const PostContentDownArrowIcon = styled(BiSolidArrowToBottom)`
  color: #a8abac;
  font-size: 25px;
  transition: all 0.6s;
  &:hover {
    color: black;
  }
  ${({ isRotated }) =>
    isRotated &&
    `
    transform: rotate(180deg);
    color: #f7dd07;
  
    &:hover {
      color: #f7dd07;
 
    }
  
  `};
  cursor: pointer;
`;

export const PostContentUpArrowIcon = styled(BiArrowToTop)`
  border: 1px solid black;
  border-radius: 50%;
  font-size: 30px;
  &:hover {
    color: #f7dd07;
    border: 1px solid #f7dd07;
  }
`;
export const PostContentsWrapper = styled.div`
  border: 3px solid #f7dd07;
  background-color: white;
  width: 100%;
  min-height: 20px;
  height: auto;
`;

export default Posting;

const IconWrapper = styled.div`
  display: flex;
  height: 30px;
  width: 90px;
  margin-top: 30px;
`;

const CountNumber = styled.div`
  margin-left: 10px;
  width: 40px;
`;

const Ad = styled.div`
  display: flex;
  justify-content: center;
  border: 10px solid black;
  width: 100%;
  height: auto;
  position: relative;
`;

export const CommentModalWrapper = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  background-color: #f8f9fa;
  border-radius: 0px 10px 10px 0px;
  z-index: 3;
  width: 380px;
  height: 585px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  transform: ${({ click }) =>
    click ? "translate3d(260px, 0, 0)" : "translate3d(0, 0, 0)"};
`;

export const CommentClosingIcon = styled(AiOutlineClose)`
  font-size: 25px;
  font-weight: 100;
  cursor: pointer;
`;

export const CommentOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  height: 50px;
`;

export const CommentTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid red;
  padding: 10px;
`;

//{userNickname && <Profile nickname={userNickname} />}

export const PPp = styled.div`
  position: absolute;
  left: 20px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Pp = styled.div`
  background-color: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 4;
`;

export const PpW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  border-radius: 50%;
  width: 51px;
  height: 51px;
  border: 3px solid #f7dd07;
`;

export const Pname = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 10px;
  height: 30px;
  font-size: 13px;
  padding: 5px;
  color: #f7dd07;
`;
/*
<PostImgWrapper click={click}>
<PostImg src={post.img} alt="pst" />
<div>안녕</div>
<div>{post.content}</div>
</PostImgWrapper>

  <UpArrowIcon />
          <div>1</div>
          <DownArrowIcon /



*/
