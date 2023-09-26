import styled from "styled-components";

export const DiaryPostWrapper = styled.div`
  width: 300px;
  height: 370px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 100px;
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
  height: 60%;
`;

//DiaryPostInfo

export const DiaryPostInfoWrapper = styled.div`
  width: 100%;
  height: 40%;
`;

export const DiaryPostTitleWrapper = styled.div`
  padding: 10px 20px 10px 20px;
  font-size: 30px;
  font-family: "Nanum Pen Script", cursive;
`;

export const DiaryPostUserWrapper = styled.div`
  border-top: 0.5px solid #959ca3;
  padding: 10px 0px 0px 20px;
`;

export const DiaryPostDate = styled.div`
  color: #959ca3;
  font-weight: 100;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
`;
