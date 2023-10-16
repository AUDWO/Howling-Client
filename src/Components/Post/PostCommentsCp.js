import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import {
  CommentClosingIcon,
  CommentModalWrapper,
  CommentOptionWrapper,
  CommentWrapper,
  CommentTitle,
  CommentsWrapper,
} from "../../StyledComponents/PostStyle/PostCommentModalStyle";

import ModalOpenAtom from "../../store/ModalOpenAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import axios from "axios";
import PostCommentCp from "./PostCommentCp";
import stateUpdateAtom from "../../store/stateUpdateAtom";
import commentCountAtom from "../../store/commentsCountAtom";

const CommentModalCp = ({ postId }) => {
  const [click, setClick] = useRecoilState(
    ModalOpenAtom(`commentModalOpen${postId}`)
  );
  const [like, setLike] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [postCommentUpdate, setPostCommentUpdate] = useRecoilState(
    stateUpdateAtom("postComment")
  );

  const [comment, setComment] = useState(null);

  const [comments, setComments] = useState([]);

  const [commentUpdate, setCommentUpdate] = useState(false);

  const handlePostComment = async () => {
    await axios.post("http://localhost:8005/comment/post", {
      content: comment,
      PostId: postId,
    });
  };

  useEffect(() => {
    const fetchPostsComment = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8005/page/renderPostcomment"
        );
        const filteredComments = response.data.filter(
          (comment) => comment.PostId === postId
        );
        setComments((prev) => [...filteredComments]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPostsComment();
  }, [commentUpdate]);

  if (comments) {
    return (
      <>
        <CommentModalWrapper click={click}>
          <CommentOptionWrapper>
            <CommentTitle>댓글</CommentTitle>
            <CommentClosingIcon onClick={handleClick}>X</CommentClosingIcon>
          </CommentOptionWrapper>
          <CommentsWrapper>
            {comments.map((comment) => (
              <PostCommentCp comment={comment} />
            ))}
          </CommentsWrapper>

          <CommentInputWrapper>
            <CommentInput
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <CommentPostButton
              comment={comment}
              onClick={() => {
                handlePostComment();
                setComment(null);
                setCommentUpdate(!commentUpdate);
                setPostCommentUpdate(!postCommentUpdate);
              }}
            >
              게시
            </CommentPostButton>
          </CommentInputWrapper>
        </CommentModalWrapper>
      </>
    );
  }

  return (
    <CommentModalWrapper click={click}>
      <CommentOptionWrapper>
        <CommentTitle>댓글</CommentTitle>
        <CommentClosingIcon onClick={handleClick}>X</CommentClosingIcon>
      </CommentOptionWrapper>
      <CommentsWrapper>
        <CommentWrapper>
          <CommentProfileWrapper>
            <CommentProfileImg />
            <CommentProfileInfo>
              <CommentUserNicknameWrapper>
                <CommentUserNickname>myeongjae_7053</CommentUserNickname>
                <LikeButtonWrapper>
                  {like ? (
                    <CommentLikeFillIcon onClick={() => setLike(false)} />
                  ) : (
                    <CommentLikeIcon onClick={() => setLike(true)} />
                  )}
                </LikeButtonWrapper>
              </CommentUserNicknameWrapper>
              <CommentContent>
                대법원장은 국회의 동의를 얻어 대통령이 임명한다. 헌법재판소
                재판관은 정당에 가입하거나 정치에 관여할 수 없다.
                국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로
                정한다. 대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을
                지체없이 공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는
                제4항에 의한 확정법률이 정부에 이송된 후 5일 이내에 대통령이
                공포하지 아니할 때에는 국회의장이 이를 공포한다.
              </CommentContent>
              <CommentContactWrapper>
                <CommentLikeCount>좋아요 12</CommentLikeCount>
                <CommentReplyButtom>답글 달기</CommentReplyButtom>
              </CommentContactWrapper>
            </CommentProfileInfo>
          </CommentProfileWrapper>
        </CommentWrapper>
      </CommentsWrapper>
      <CommentInputWrapper>
        <CommentInput
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <CommentPostButton
          comment={comment}
          onClick={() => {
            handlePostComment();
            setComment(null);
            setCommentUpdate(!commentUpdate);
          }}
        >
          게시
        </CommentPostButton>
      </CommentInputWrapper>
    </CommentModalWrapper>
  );
};

export default CommentModalCp;

export const CommentLikeIcon = styled(AiOutlineHeart)``;

export const CommentLikeFillIcon = styled(AiFillHeart)`
  color: #f7dd07;
`;

//--------댓글 입력창

export const CommentInputWrapper = styled.div`
  padding: 5px 5px 5px 13px;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CommentInput = styled.input`
  font-size: 15px;
  background-color: #f8f9fa;
  height: 40px;
  width: 80%;
  resize: none;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
`;

export const CommentPostButton = styled.button`
  width: 20%;
  height: 40px;
  border-bottom: 2px solid black;
  color: ${(props) => (props.comment ? "black" : "#c7c7c8")};
`;

//-------
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
  width: 300px;
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
  min-height: 50px;
  height: auto;
  margin-bottom: 10px;
`;

export const LikeButtonWrapper = styled.div`
  display: flex;
  width: 20px;
`;

export const CommentContactWrapper = styled.div`
  display: flex;
`;

export const CommentLikeCount = styled.div`
  font-size: 13px;
  margin-right: 15px;
`;

export const CommentReplyButtom = styled.button`
  font-size: 13px;
`;
