import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { CommentWrapper } from "../../StyledComponents/MoreStoryStyle/MoreStoryCommentCpSt";
import axios from "axios";

const PostReplyComment = ({ comment }) => {
  const [like, setLike] = useState(comment.likeCheck);
  const [infoState, setInfoState] = useState(comment);

  useEffect(() => {
    const fetchPostInfo = async () => {
      try {
        const response = await axios.get(
          `page/renderOnlyCommentInfo/${comment.id}`
        );
        setInfoState((prev) => ({ ...prev, ...response.data[0] }));
      } catch (error) {
        console.error(error);
      }
    };
    fetchPostInfo();
  }, [like]);

  const handleIncreaseReplyLike = async () => {
    try {
      await axios.patch("/update/commentLikeCount", {
        likeCount: infoState.likeCount + 1,
        likeCheck: true,
        id: comment.id,
      });
      setLike(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecreaseReplyLike = async () => {
    try {
      await axios.patch("/update/commentLikeCount", {
        likeCount: infoState.likeCount - 1,
        likeCheck: false,
        id: comment.id,
      });
      setLike(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (Object.keys(infoState).length >= 2) {
    return (
      <CommentWrapper2 index={1}>
        <CommentProfileWrapper>
          <CommentProfileImg />
          <CommentProfileInfo>
            <CommentUserNicknameWrapper>
              <CommentUserNickname>
                {infoState.User.nickname}
              </CommentUserNickname>
              <LikeButtonWrapper>
                {like ? (
                  <CommentLikeFillIcon
                    onClick={() => {
                      handleDecreaseReplyLike();
                    }}
                  />
                ) : (
                  <CommentLikeIcon
                    onClick={() => {
                      handleIncreaseReplyLike();
                    }}
                  />
                )}
              </LikeButtonWrapper>
            </CommentUserNicknameWrapper>
            <CommentContent>{infoState.content}</CommentContent>
            <CommentContactWrapper>
              <CommentLikeCount>좋아요 {infoState.likeCount}</CommentLikeCount>
            </CommentContactWrapper>
          </CommentProfileInfo>
        </CommentProfileWrapper>
      </CommentWrapper2>
    );
  }
};

export default PostReplyComment;

export const CommentWrapper2 = styled(CommentWrapper)`
  margin-top: 10px;
`;

export const CommentLikeIcon = styled(AiOutlineHeart)``;

export const CommentLikeFillIcon = styled(AiFillHeart)`
  color: #f7dd07;
`;

export const CommentProfileWrapper = styled.div`
  display: flex;
  height: auto;
`;

export const CommentProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  margin-right: 15px;
`;

export const CommentProfileInfo = styled.div`
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const CommentUserNicknameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CommentUserNickname = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
`;

export const CommentContent = styled.div`
  min-height: 20px;
  height: auto;
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const LikeButtonWrapper = styled.div`
  display: flex;
  width: 20px;
`;

export const CommentContactWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const CommentLikeCount = styled.div`
  font-size: 13px;
  margin-right: 15px;
`;

export const CommentReplyButtom = styled.button`
  font-size: 13px;
`;
