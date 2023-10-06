import React, { useState } from "react";
import styled from "styled-components";

import {
  PostImgWrapper,
  PostImg,
  PostContentsWrapper,
  PostTitleWrapper,
  PostUserInfoWrapper,
  PostUserName,
  PostTitle,
  PostContentDownArrowIcon,
  PostContent,
} from "../../StyledComponents/PostStyle/PostContentStyle";

const PostContentCp = ({ post }) => {
  const [click, setClick] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const handleIconClick = () => {
    setIsRotated(!isRotated);
  };
  //post.img
  return (
    <PostImgWrapper click={click}>
      <PostImg src={""} alt="pst" />
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
            창설할 수 없다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에
            대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 이 헌법은
            1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기
          </PostContent>
        )}
      </PostContentsWrapper>
    </PostImgWrapper>
  );
};

export default PostContentCp;

//---------
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
