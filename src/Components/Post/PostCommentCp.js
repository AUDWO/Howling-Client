import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { CommentWrapper } from "../../StyledComponents/MoreStoryStyle/MoreStoryCommentCpSt";
import axios from "axios";
import PostReplyComment from "./PostReplyComment";
import { useRecoilState } from "recoil";
import stateUpdateAtom from "../../store/stateUpdateAtom";

const PostCommentCp = ({ comment }) => {
  const [infoState, setInfoState] = useState(comment);
  const [like, setLike] = useState(comment.likeCheck);
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);
  const [replyInputOpen, setReplyInputOpen] = useState(false);
  const [moreReplyOpen, setMoreReplyOpen] = useState(false);

  const [replyUpdate, setReplyUpdate] = useRecoilState(
    stateUpdateAtom("postReply")
  );

  const handlePostReplyComment = async () => {
    try {
      await axios.post("http://localhost:8005/comment/post", {
        content: reply,
        PostId: comment.PostId,
        PostCommentId: comment.id,
      });
    } catch (error) {
      console.log(`PostReplyComments Error ${error}`);
    }
  };

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

  useEffect(() => {
    const fetchReplyComments = async () => {
      try {
        const response = await axios.get(
          `/page/renderPostReplyComment/${comment.id}`
        );
        setReplies(response.data);
      } catch (error) {}
    };

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

    fetchReplyComments();
    fetchPostInfo();
  }, [replyUpdate, comment.id, like]);
  if (Object.keys(infoState).lenght >= 2) {
    return (
      <CommentWrapper2 index={infoState.id}>
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
                      setLike(true);
                    }}
                  />
                )}
              </LikeButtonWrapper>
            </CommentUserNicknameWrapper>
            <CommentContent>{infoState.content}</CommentContent>
            <CommentContactWrapper>
              <CommentLikeCount>좋아요 {infoState.likeCount}</CommentLikeCount>
              <CommentReplyButtom
                onClick={() => setReplyInputOpen(!replyInputOpen)}
              >
                답글 달기
              </CommentReplyButtom>
            </CommentContactWrapper>
            {replyInputOpen && (
              <PostReplyInputWrapper>
                <PostReplyInput
                  value={reply}
                  onChange={(e) => {
                    setReply(e.target.value);
                  }}
                />
                <ReplyButtonWrapper>
                  <ReplyCancelButton onClick={() => setReplyInputOpen(false)}>
                    취소
                  </ReplyCancelButton>
                  <ReplyInputButton
                    onClick={() => {
                      handlePostReplyComment();
                      setReply(" ");
                      setReplyUpdate(!replyUpdate);
                    }}
                  >
                    게시
                  </ReplyInputButton>
                </ReplyButtonWrapper>
              </PostReplyInputWrapper>
            )}
            {replies.length > 0 && (
              <MoreReplyButtonWrapper
                moreReplyOpen={moreReplyOpen}
                onClick={() => setMoreReplyOpen(!moreReplyOpen)}
              >
                <MoreReplyButtonIcon />
                <MoreReplyTitle>댓글</MoreReplyTitle>
              </MoreReplyButtonWrapper>
            )}
            {moreReplyOpen && (
              <>
                {replies.map((infoState) => (
                  <PostReplyComment comment={infoState} />
                ))}
              </>
            )}
          </CommentProfileInfo>
        </CommentProfileWrapper>
      </CommentWrapper2>
    );
  }
};

export default PostCommentCp;

// key={infoState.id}

//-----대댓글

//---- 댓글 더보기 버튼
export const MoreReplyButtonIcon = styled(BiSolidDownArrow)`
  margin-right: 5px;
`;
export const MoreReplyButtonWrapper = styled.div`
  display: flex;
  ${MoreReplyButtonIcon} {
    transform: ${(props) =>
      props.moreReplyOpen ? "rotate(180deg)" : "rotate(0deg)"};
  }
  color: #236bd8;

  margin-top: 7px;
  margin-bottom: 7px;
`;

export const MoreReplyTitle = styled.div``;

//----
export const PostReplyInputWrapper = styled.div`
  border-bottom: 1px solid black;
  display: flex;
`;

export const PostReplyInput = styled.input`
  width: 80%;
  border: none;
  background-color: #f8f9fa;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 15px;
`;

export const ReplyButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
`;
export const ReplyCancelButton = styled.div`
  font-size: 13px;
  cursor: pointer;
  color: gray;
  $:hover {
    color: black;
  }
`;

export const ReplyInputButton = styled.div`
  font-size: 13px;
  cursor: pointer;
  color: gray;
  $:hover {
    color: black;
  }
`;

//-----대댓글

export const CommentWrapper2 = styled(CommentWrapper)`
  margin: 10px;
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
  min-height: 30px;
  height: auto;
  margin-bottom: 10px;
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
