import styled from "styled-components";

const PostImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 4;
  width: 400px;
  min-height: 585px;
  height: auto;

  background-color: black;

  transition: all 0.3s ease-in-out;
  transform: ${({ click }) => (click ? "translate3d(-140px, 0, 0)" : "none")};
`;

export default PostImgWrapper;

//  transform: ${({ click }) => (click ? "none" : "translate3d(100px, 0, 0)")};
