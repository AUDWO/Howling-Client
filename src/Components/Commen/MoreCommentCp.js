import React, { useEffect, useState } from "react";

import {
  MoreCommentContentsWrapper,
  MoreCommentWrapper,
  MoreCommentTitle,
  MoreCommnetInputWrapper,
  MoreCommentInputIcon,
  MoreCommentInput,
  MoreComment,
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
  MoreCommentProfile,
  CommentSpace,
  CommentPostButton,
  ProfileNameWrapper,
  CommentMoreIcon,
} from "../../StyledComponents/CommentCpStyle/MoreCommentCpSt";
import StoryCommentCp from "./StoryCommentCp";
import axios from "axios";
import { useRecoilState } from "recoil";
import toggleValueAtom from "../../store/ToggleValueAtom";
import stateUpdateAtom from "../../store/stateUpdateAtom";

const MoreStoryCommentCp = ({ storyId, diaryId }) => {
  const [content, setContent] = useState("");

  const [commentUpdate, setCommentUpdate] = useRecoilState(
    stateUpdateAtom(`moreCommentUpdate`)
  );

  const [type, setType] = useState("");

  const [comments, setComments] = useState([]);

  const handlePostStoryComment = async () => {
    await axios.post("http://localhost:8005/comment/story", {
      content: content,
      StoryId: storyId,
    });
  };

  const handlePostDiaryComment = async () => {
    await axios.post("http://localhost:8005/comment/diary", {
      content: content,
      DiaryId: diaryId,
    });
  };

  useEffect(() => {
    //storyComment
    const fetchStoryCommentsData = async () => {
      try {
        const response = await axios.get(
          `/page/render-story-comments/${storyId}`
        );
        setComments([...response.data]);
      } catch (error) {
        console.error(error);
      }
    };
    if (storyId) {
      fetchStoryCommentsData();
      setType("story");
    }

    //diaryComment
    const fetchDiaryCommentsData = async () => {
      try {
        const response = await axios.get(
          `/page/render-diary-comments/${diaryId}`
        );
        setComments([...response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    if (diaryId) {
      fetchDiaryCommentsData();
      setType("diary");
    }
  }, [commentUpdate]);

  if (comments.length >= 1) {
    return (
      <MoreCommentWrapper>
        <MoreCommentContentsWrapper>
          <MoreCommentTitle>댓글</MoreCommentTitle>
          <MoreCommnetInputWrapper>
            <MoreCommentInputIcon />
            <MoreCommentInput
              placeholder="댓글을 입력하세요."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <CommentPostButton
              comment={content}
              onClick={() => {
                if (diaryId) {
                  handlePostDiaryComment();
                }
                if (storyId) {
                  handlePostStoryComment();
                }
                setCommentUpdate(!commentUpdate);
                setContent("");
              }}
            >
              게시
            </CommentPostButton>
          </MoreCommnetInputWrapper>
          {!comments && (
            <MoreComment>
              <ProfileWrapper>
                <WolfIcon />
              </ProfileWrapper>

              <CommentWrapper>
                <ProfileInfoWrapper>
                  <>
                    <ProfileName>HOWLING</ProfileName>
                    <OfficialBadgeIcon />
                  </>
                </ProfileInfoWrapper>
                <CommentContent>댓글을 남겨보세요!</CommentContent>
                <CommentContact>
                  <CommentContactIcon />
                  <CommentContactReply>답글</CommentContactReply>
                </CommentContact>
              </CommentWrapper>
            </MoreComment>
          )}
          {comments.map((comment) => (
            <StoryCommentCp comment={comment} key={comment.id} type={type} />
          ))}

          <CommentSpace></CommentSpace>
        </MoreCommentContentsWrapper>
      </MoreCommentWrapper>
    );
  }

  return (
    <MoreCommentWrapper>
      <MoreCommentContentsWrapper>
        <MoreCommentTitle>댓글</MoreCommentTitle>
        <MoreCommnetInputWrapper>
          <MoreCommentInputIcon />
          <MoreCommentInput
            placeholder="댓글을 입력하세요."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <CommentPostButton
            comment={content}
            onClick={() => {
              if (diaryId) {
                handlePostDiaryComment();
              }
              if (storyId) {
                handlePostStoryComment();
              }
              setContent("");
              setCommentUpdate(!commentUpdate);
            }}
          >
            게시
          </CommentPostButton>
        </MoreCommnetInputWrapper>

        <MoreComment>
          <ProfileWrapper>
            <WolfIcon />
          </ProfileWrapper>

          <CommentWrapper>
            <ProfileInfoWrapper>
              <ProfileNameWrapper>
                <ProfileName>HOWLING</ProfileName>
                <OfficialBadgeIcon />
              </ProfileNameWrapper>
            </ProfileInfoWrapper>
            <CommentContent>댓글을 남겨보세요!</CommentContent>
            <CommentContact>
              <CommentContactIcon />
              <CommentContactReply>답글</CommentContactReply>
            </CommentContact>
          </CommentWrapper>
        </MoreComment>

        <CommentSpace></CommentSpace>
      </MoreCommentContentsWrapper>
    </MoreCommentWrapper>
  );
};

export default MoreStoryCommentCp;
