import styled from "styled-components";

export const DiaryWrapper = styled.div`
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid black;
`;

export const DiaryNav = styled.div`
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${(props) => props.padding};
`;

export const DiaryDate = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: 100;
  font-family: "Do Hyeon", sans-serif;
`;

export const DiaryContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
`;

export const DiaryTitle = styled.input`
  height: ${(props) => props.height};
  font-family: "Black Han Sans", sans-serif;
  font-size: 40px;
`;

export const DiaryImg = styled.div`
  width: 100%;
  height: 500px;
  background-color: skyblue;
  margin-bottom: 30px;
`;

export const DiaryContent = styled.textarea`
  width: ${(props) => props.width};
  background-color: #f6f9f9;
  font-size: ${(props) => props.fontSize};
  border: none;
  &:focus {
    outline: none;
  }
  font-weight:700;
  font-family: font-family: 'Sunflower', sans-serif;
  padding: ${(props) => props.padding};
  margin-bottom:100px;
`;

const KeepDiaryContentsWrapper = styled(DiaryContentsWrapper)`
  flex-grow: 1;
  align-items: center;
  margin-top: 30px;
`;
const DiaryOption = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: 20px;
`;

const PublicForm = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid black;
  border-bottom: 0.5px solid black;
  padding: ${(props) => props.padding};
`;

const PublicOption = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.fontSize};
  margin-bottom: 20px;
  font-weight:600;
  font-family: font-family: 'Sunflower', sans-serif;

  `;
/*
const RadioButtom = styled.input`
  width: 15px;
  height: 15px;
`;

const LockOpenIcon = styled(BiLockOpenAlt)`
  margin-left: 10px;
  margin-right: 5px;
`;

const LockIcon = styled(BiLockAlt)`
  margin-left: 10px;
  margin-right: 5px;
`;

const LockOpenPhotoIcon = styled(TbPhotoCheck)`
  margin-left: 10px;
  margin-right: 5px;
`;

const LockPhotoIcon = styled(TbPhotoCancel)`
  margin-left: 10px;
  margin-right: 5px;
`;
*/
