import React, { useRef, useEffect } from "react";
import styled from "styled-components";

//취소
import { AiOutlineCloseCircle } from "react-icons/ai";

//수정
import { AiOutlineEdit } from "react-icons/ai";

//휴지통

import { RiDeleteBinLine } from "react-icons/ri";

import toggleValueAtom from "../../store/ToggleValueAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import ModalOpenAtom from "../../store/ModalOpenAtom";
import stateUpdateAtom from "../../store/stateUpdateAtom";
import axios from "axios";

const PostCommentConfigModalCp = ({ commentId }) => {
  const setEditOn = useSetRecoilState(toggleValueAtom("editOn"));
  const [postCommentConfigModalOpen, setPostCommentConfigModalOpen] =
    useRecoilState(ModalOpenAtom(`postCommentConfigModal${commentId}`));

  const [postCommentUpdate, setPostCommentUpdate] = useRecoilState(
    stateUpdateAtom("postComment")
  );

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/delete/post-comment/${commentId}`);
    } catch (error) {
      console.error(error);
    }
  };

  const CommentConfigModalRef = useRef(null);

  useEffect(() => {
    if (postCommentConfigModalOpen) {
      const handleClick = (e) => {
        if (!CommentConfigModalRef.current.contains(e.target)) {
          setPostCommentConfigModalOpen(false);
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
    <CommentConfigModal ref={CommentConfigModalRef}>
      <CommentConfigModalOption
        onClick={() => {
          setEditOn(true);
        }}
      >
        <CommentEditIcon />
        수정
      </CommentConfigModalOption>
      <CommentConfigModalOption
        onClick={() => {
          setPostCommentUpdate(!postCommentUpdate);
          handleDelete();
        }}
      >
        <CommentDeleteIcon />
        삭제
      </CommentConfigModalOption>
      <CommentConfigModalOption
        onClick={() => {
          setPostCommentConfigModalOpen(false);
        }}
      >
        <CommentConfigCloseIcon />
        취소
      </CommentConfigModalOption>
    </CommentConfigModal>
  );
};

export default PostCommentConfigModalCp;

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
  bottom: -10px;
  right: -10px;
  width: 100px;
  height: 90px;
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
