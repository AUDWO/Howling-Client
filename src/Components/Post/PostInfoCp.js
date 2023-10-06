import React, { useState } from "react";
import styled from "styled-components";

import {
  PostInfoWrapper,
  IconWrapper,
  CountNumber,
} from "../../StyledComponents/PostStyle/PostInfoStyle";

import {
  CommentIcon,
  MoreIcon,
  LikeIcon,
  LikeFillIcon,
} from "../../StyledComponents/HomeStyle/Section2/Icon";

const PostInfoCp = () => {
  const [like, setLike] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
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
  );
};

export default PostInfoCp;
