import React from "react";

import {
  MoreStoryComment,
  ProfileName,
  ProfileWrapper,
  MoreStoryCommentProfile,
  CommentWrapper,
  CommentContact,
  CommentContent,
  CommentContactIcon,
} from "../../StyledComponents/MoreStoryStyle/MoreStoryCommentCpSt";

const StoryReplyCommentCp = ({ reply }) => {
  return (
    <MoreStoryComment>
      <ProfileWrapper>
        <MoreStoryCommentProfile></MoreStoryCommentProfile>
      </ProfileWrapper>
      <CommentWrapper>
        <ProfileName>{reply.User.nickname}</ProfileName>
        <CommentContent>{reply.content}</CommentContent>
        <CommentContact>
          <CommentContactIcon />
        </CommentContact>
      </CommentWrapper>
    </MoreStoryComment>
  );
};

export default StoryReplyCommentCp;
