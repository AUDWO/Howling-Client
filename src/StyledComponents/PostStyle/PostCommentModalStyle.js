import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const CommentsWrapper = styled.div`
  height: 470px;
  overflow-y: scroll;
`;

export const CommentModalWrapper = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  background-color: #f8f9fa;
  border-radius: 0px 10px 10px 0px;
  z-index: 3;
  width: 380px;
  height: 585px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  transform: ${({ click }) =>
    click ? "translate3d(260px, 0, 0)" : "translate3d(0, 0, 0)"};
`;

export const CommentClosingIcon = styled(AiOutlineClose)`
  font-size: 25px;
  font-weight: 100;
  cursor: pointer;
`;

export const CommentOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  height: 50px;
`;

export const CommentTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  min-height: 120px;
  height: auto;
  padding: 10px;
  margin-bottom: 10px;
`;
