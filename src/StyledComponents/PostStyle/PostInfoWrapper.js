import styled from "styled-components";
import ProfileWrapper from "../HomeStyle/ProfileStyle/ProfileWrapper";
import ProfileImg from "../HomeStyle/ProfileStyle/ProfileImg";

const PostInfoWrapper = styled.div`
  z-index: 1;
  width: 14%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f9f9;
  padding: 20px;
  & ${ProfileWrapper} {
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
    & ${ProfileImg} {
      margin-bottom: 20px;
    }
  }
  transform: ${({ click }) => (click ? "none" : "translate3d(100px, 0, 0)")};
`;

export default PostInfoWrapper;
