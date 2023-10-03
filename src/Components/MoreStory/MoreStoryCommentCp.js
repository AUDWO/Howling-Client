import React from "react";

import {
  MoreStoryCommentWrapper,
  MoreStoryCommentContentsWrapper,
  MoreStoryCommentTitle,
  MoreStoryCommnetInputWrapper,
  MoreStoryCommentInputIcon,
  MoreStoryCommentInput,
  MoreStoryComment,
  ProfileWrapper,
  WolfIcon,
  CommentWrapper,
  ProfileInfoWrapper,
  ProfileName,
  OfficialBadgeIcon,
  CommentContent,
  CommentContact,
  CommentContactIcon,
  CommentContactReply,
  MoreStoryCommentProfile,
  CommentSpace,
} from "../../StyledComponents/MoreStoryStyle/MoreStoryCommentCpSt";

const MoreStoryCommentCp = () => {
  return (
    <MoreStoryCommentWrapper>
      <MoreStoryCommentContentsWrapper>
        <MoreStoryCommentTitle>댓글</MoreStoryCommentTitle>
        <MoreStoryCommnetInputWrapper>
          <MoreStoryCommentInputIcon />
          <MoreStoryCommentInput placeholder="댓글을 입력하세요." />
        </MoreStoryCommnetInputWrapper>
        <MoreStoryComment>
          <ProfileWrapper>
            <WolfIcon />
          </ProfileWrapper>

          <CommentWrapper>
            <ProfileInfoWrapper>
              <ProfileName>HOWLING</ProfileName>
              <OfficialBadgeIcon />
            </ProfileInfoWrapper>
            <CommentContent>댓글을 남겨보세요!</CommentContent>
            <CommentContact>
              <CommentContactIcon />
              <CommentContactReply>답글</CommentContactReply>
            </CommentContact>
          </CommentWrapper>
        </MoreStoryComment>
        <MoreStoryComment>
          <ProfileWrapper>
            <MoreStoryCommentProfile></MoreStoryCommentProfile>
          </ProfileWrapper>
          <CommentWrapper>
            <ProfileName>myeongjae</ProfileName>
            <CommentContent>
              뒷모습만 봐도 잘생긴 부장님 최고... 이걸 올려준 유나님도 최고
              뒷모습만 봐도 잘생긴 부장님 최고... 이걸 올려준 유나님도 최고
              뒷모습만 봐도 잘생긴 부장님 최고... 이걸 올려준 유나님도 최고
              뒷모습만 봐도 잘생긴 부장님 최고... 이걸 올려준 뒷모습만 봐도
            </CommentContent>
            <CommentContact>
              <CommentContactIcon />
              <CommentContactReply>답글</CommentContactReply>
            </CommentContact>
          </CommentWrapper>
        </MoreStoryComment>
        <CommentSpace></CommentSpace>
      </MoreStoryCommentContentsWrapper>
    </MoreStoryCommentWrapper>
  );
};

export default MoreStoryCommentCp;
