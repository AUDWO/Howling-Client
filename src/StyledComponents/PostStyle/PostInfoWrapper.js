import styled from "styled-components";
import ProfileWrapper from "../HomeStyle/ProfileStyle/ProfileWrapper";
//import ProfileImg from "../HomeStyle/ProfileStyle/ProfileImg";

const PostInfoWrapper = styled.div`
  z-index: 2;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  & ${ProfileWrapper} {
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
  }
`;

export default PostInfoWrapper;

/*
& ${ProfileImg} {
  margin-bottom: 20px;
}*/
