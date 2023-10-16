import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import axios from "axios";
import {
  MoreStoryComment,
  ProfileWrapper,
  MoreStoryCommentProfile,
  CommentWrapper,
  ProfileName,
  CommentContact,
  CommentContactIcon,
  CommentContactReply,
  CommentContent,
} from "../../StyledComponents/MoreStoryStyle/MoreStoryCommentCpSt";
import StoryReplyCommentCp from "./StoryReplyCommentCp";

const StoryCommentCp = ({ comment }) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [reply, setReply] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyUpdate, setReplyUpdate] = useState(false);
  const [replyInputOpen, setReplyInputOpen] = useState(false);

  const handlePostStoryReplyComment = async () => {
    try {
      await axios.post("/comment/story", {
        content: reply,
        StoryCommentId: comment.id,
        StoryId: comment.StoryId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchStoryReplyComment = async () => {
      try {
        const response = await axios.get(
          `/page/renderStoryReplyComment/${comment.id}`
        );

        setReplies([...response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStoryReplyComment();
  }, [replyUpdate]);

  return (
    <MoreStoryComment>
      <ProfileWrapper>
        <MoreStoryCommentProfile></MoreStoryCommentProfile>
      </ProfileWrapper>
      <CommentWrapper>
        <ProfileName>{comment.User.nickname}</ProfileName>
        <CommentContent>{comment.content}</CommentContent>
        <CommentContact>
          <CommentContactIcon />
          <CommentContactReply
            onClick={() => {
              setReplyInputOpen(!replyInputOpen);
            }}
          >
            답글 달기
          </CommentContactReply>
        </CommentContact>
        {replyInputOpen && (
          <CommentReplyInputWrapper>
            <CommentReplyInput
              value={reply}
              onChange={(e) => {
                setReply(e.target.value);
              }}
            />
            <ReplyButtonWrapper>
              <CommentReplyCancelButton
                onClick={() => {
                  setReply("");
                  setReplyInputOpen(false);
                }}
              >
                취소
              </CommentReplyCancelButton>
              <CommentReplyInputButton
                replyCheck={reply}
                onClick={() => {
                  handlePostStoryReplyComment();
                  setReplyUpdate(!replyUpdate);
                  setReply("");
                }}
              >
                답글
              </CommentReplyInputButton>
            </ReplyButtonWrapper>
          </CommentReplyInputWrapper>
        )}

        <>
          {replies.length > 0 && (
            <CommentContactReplyShowWrapper
              onClick={() => {
                setReplyOpen(!replyOpen);
              }}
            >
              <CommentReplyOpenIcon replyOpen={replyOpen} />
              <CommentContactReplyTitle>답글</CommentContactReplyTitle>
            </CommentContactReplyShowWrapper>
          )}
          {replyOpen && (
            <>
              {replies.map((reply) => (
                <StoryReplyCommentCp reply={reply} key={reply.id} />
              ))}
            </>
          )}
        </>
      </CommentWrapper>
    </MoreStoryComment>
  );
};

export default StoryCommentCp;

//----수정

//--

export const CommentContactReplyShowWrapper = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1866d6;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    border-radius: 15px;
    background-color: #c5d5f5;
  }
`;
export const CommentContactReplyTitle = styled.div`
  font-size: 16px;
  margin-left: 12px;
`;

export const CommentReplyInputWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

export const CommentReplyInput = styled.input`
  width: 80%;
  height: 40px;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid black;
  background-color: #f8f9fa;
  padding-left: 10px;
`;

export const ReplyButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  height: 40px;
  border-bottom: 1px solid black;
`;

export const CommentReplyInputButton = styled.div`
  line-height: 40px;
  width: 50%;
  text-align: center;
  color:${(props) => (props.replyCheck ? "black" : "gray")}
  &:hover {
    color: black;
    background-color: #e8e8e8;
    border-radius: 20px;
  }
  cursor:pointer;
`;

export const CommentReplyCancelButton = styled.div`
  width: 50%;
  line-height: 40px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #e8e8e8;
    border-radius: 20px;
  }
`;

export const CommentReplyOpenIcon = styled(BiSolidDownArrow)`
  transform: ${(props) =>
    props.replyOpen ? "  rotate(180deg)" : " rotate(0deg)"};

  transition: transform 0.5s;
`;

export const CommentReplyCloseIcon = styled(BiSolidUpArrow)``;
