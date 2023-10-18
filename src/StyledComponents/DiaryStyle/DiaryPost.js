import styled from "styled-components";

export const DiaryPostWrapper = styled.div`
  width: 300px;
  height: 370px;
  margin-bottom: 10px;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const DiaryPostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f8f9fa;
  justify-content: flex-start;
  padding: 20px;
`;

export const DiaryPostImgWrapper = styled.img`
  background-color: skyblue;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
`;

//DiaryPostInfo

export const DiaryPostInfoWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
`;

export const DiaryPostTitleWrapper = styled.div`
  height: 60%;
  font-weight: 600;
  padding: 10px 20px 10px 20px;
`;

export const DiaryPostUserWrapper = styled.div`
  width: 100%;
  height: 20%;
  border-top: 0.5px solid #959ca3;
  padding-left: 5%;
  display: flex;
  align-items: center;
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  align-center: center;
  width: 1.8em;
  height: 1.8em;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5em;
`;
export const UserNickname = styled.span`
  font-size: 13px;
`;
export const DiaryPostDate = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  line-height: 0.6;
  color: #959ca3;
  font-weight: 100;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
`;
