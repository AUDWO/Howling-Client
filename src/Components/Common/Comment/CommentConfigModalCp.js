import React, { useRef, useEffect } from "react";
import styled from "styled-components";

//취소
import { AiOutlineCloseCircle } from "react-icons/ai";

//수정
import { AiOutlineEdit } from "react-icons/ai";

//휴지통

import { RiDeleteBinLine } from "react-icons/ri";

import { useRecoilState } from "recoil";
import ModalOpenAtom from "../../../store/ModalOpenAtom";
import stateUpdateAtom from "../../../store/stateUpdateAtom";
import axios from "axios";

const CommentConfigModalCp = ({ type, comment, top, left, right, bottom }) => {
  const [commentConfigModalOpen, setCommentConfigModalOpen] = useRecoilState(
    ModalOpenAtom(`${type}CommentConfigModal${comment.id}`)
  );

  const [commentCountUpdate, setCommentCountUpdate] = useRecoilState(
    stateUpdateAtom("comment")
  );

  //moreDiaryComment || moreStoryComment
  const [moreCommentUpdate, setMoreCommentUpdate] = useRecoilState(
    stateUpdateAtom(`moreCommentUpdate`)
  );

  const [postCommentUpdate, setPostCommentUpdate] = useRecoilState(
    stateUpdateAtom("postComment")
  );

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `/delete/${type}-comment/${comment.id}`
      );
      if (type === "post") {
        setPostCommentUpdate(!postCommentUpdate);
        setCommentCountUpdate(!commentCountUpdate);
      }
      //type === diary || type === story
      if (!(type === "post")) setMoreCommentUpdate(!moreCommentUpdate);
    } catch (error) {
      console.error(error);
    }
  };

  const CommentConfigModalRef = useRef(null);

  useEffect(() => {
    if (commentConfigModalOpen) {
      const handleClick = (e) => {
        if (!CommentConfigModalRef.current.contains(e.target)) {
          setCommentConfigModalOpen(false);
        }
        e.stopPropagation();
      };
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <CommentConfigModal
      ref={CommentConfigModalRef}
      bottom={bottom}
      top={top}
      right={right}
      left={left}
    >
      <CommentConfigModalOption
        onClick={() => {
          handleDelete();
        }}
      >
        <CommentDeleteIcon />
        삭제
      </CommentConfigModalOption>
      <CommentConfigModalOption
        onClick={() => {
          setCommentConfigModalOpen(false);
        }}
      >
        <CommentConfigCloseIcon />
        취소
      </CommentConfigModalOption>
    </CommentConfigModal>
  );
};

export default CommentConfigModalCp;

export const CommentConfigCloseIcon = styled(AiOutlineCloseCircle)`
  color: red;
  margin-right: 3px;
`;

export const CommentDeleteIcon = styled(RiDeleteBinLine)`
  margin-right: 3px;
`;

export const CommentEditIcon = styled(AiOutlineEdit)`
  margin-right: 3px;
`;

export const CommentConfigModal = styled.div`
  position: absolute;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  width: 100px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: white;
`;

export const CommentConfigModalOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  height: 30px;
  cursor: pointer;
`;
