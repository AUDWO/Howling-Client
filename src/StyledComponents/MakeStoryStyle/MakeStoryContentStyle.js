import styled from "styled-components";

export const MakeStoryContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  border-left: 1px solid #dbdbdb;
`;

export const MakeStoryProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

export const MakeStoryProfileImg = styled.img`
  background-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

export const MakeStoryNickname = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const MakeStoryContent = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  line-height: 1.3;
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  outline: none;
  resize: none;
`;

export const MakeStoryFormWrapper = styled.form`
  margin-top: 90px;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  background-color: #f8f9fa;
  padding: 10px 20px 10px 20px;
  font-size: 15px;
  border-radius: 7px;
`;

export const MakeStoryButton = styled(Button)`
  color: black;
`;

export const MakeStoryCancelButton = styled(Button)`
  color: #ed203d;
`;
