import React, { useState } from "react";

import {
  CommentClosingIcon,
  CommentModalWrapper,
  CommentOptionWrapper,
  CommentWrapper,
  CommentTitle,
} from "../../StyledComponents/PostStyle/PostCommentModalStyle";

const CommentModalCp = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <CommentModalWrapper click={click}>
      <CommentOptionWrapper>
        <CommentTitle>댓글</CommentTitle>
        <CommentClosingIcon onClick={handleClick}>X</CommentClosingIcon>
      </CommentOptionWrapper>
      <CommentWrapper>안녕</CommentWrapper>
      <CommentWrapper>안녕</CommentWrapper>
      <CommentWrapper>안녕</CommentWrapper>
    </CommentModalWrapper>
  );
};

export default CommentModalCp;
