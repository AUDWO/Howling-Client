import React, { useEffect, useState } from "react";

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
  StoryCommentPostButton,
  ProfileNameWrapper,
  CommentMoreIcon,
} from "../../StyledComponents/MoreStoryStyle/MoreStoryCommentCpSt";
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

  const [postCommentUpdate, setPostCommentUpdate] = useRecoilState(
    toggleValueAtom("postCommentUpdate")
  );

  const [diaryCommentUpdate, setDiaryCommentUpdate] = useRecoilState(
    toggleValueAtom("diaryCommentUpdate")
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
      <MoreStoryCommentWrapper>
        <MoreStoryCommentContentsWrapper>
          <MoreStoryCommentTitle>댓글</MoreStoryCommentTitle>
          <MoreStoryCommnetInputWrapper>
            <MoreStoryCommentInputIcon />
            <MoreStoryCommentInput
              placeholder="댓글을 입력하세요."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <StoryCommentPostButton
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
            </StoryCommentPostButton>
          </MoreStoryCommnetInputWrapper>
          {!comments && (
            <MoreStoryComment>
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
            </MoreStoryComment>
          )}
          {comments.map((comment) => (
            <StoryCommentCp comment={comment} key={comment.id} type={type} />
          ))}

          <CommentSpace></CommentSpace>
        </MoreStoryCommentContentsWrapper>
      </MoreStoryCommentWrapper>
    );
  }

  return (
    <MoreStoryCommentWrapper>
      <MoreStoryCommentContentsWrapper>
        <MoreStoryCommentTitle>댓글</MoreStoryCommentTitle>
        <MoreStoryCommnetInputWrapper>
          <MoreStoryCommentInputIcon />
          <MoreStoryCommentInput
            placeholder="댓글을 입력하세요."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <StoryCommentPostButton
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
          </StoryCommentPostButton>
        </MoreStoryCommnetInputWrapper>

        <MoreStoryComment>
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
        </MoreStoryComment>

        <CommentSpace></CommentSpace>
      </MoreStoryCommentContentsWrapper>
    </MoreStoryCommentWrapper>
  );
};

export default MoreStoryCommentCp;
