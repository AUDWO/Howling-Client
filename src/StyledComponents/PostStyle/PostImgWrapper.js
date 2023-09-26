import styled from "styled-components";

const PostImgWrapper = styled.div`
  position: relative;
  z-index: 4;
  width: 86%;
  border: 1px solid black;
  background-color: blue;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
  transform: ${({ click }) => (click ? "none" : "translate3d(100px, 0, 0)")};
`;

export default PostImgWrapper;
