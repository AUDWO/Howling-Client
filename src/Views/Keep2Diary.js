import React, { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import Section1 from "../Components/Section1/Section1";
import { DiaryTitle } from "../StyledComponents/DiaryStyle/Diary";
import { TbStethoscopeOff } from "react-icons/tb";

const Keep2Diary = () => {
  const [toggleImg, setToggleImg] = useState(false);
  const [togglePublic, setTogglePublic] = useState(false);
  const [text, setText] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [imgUrl, setImgUrl] = useState();
  const imgUrlRef = useRef();
  const imgPreviewRef = useRef();

  const onUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("img", e.target.files[0]);
    axios
      .post("/post/img", formData)
      .then((res) => {
        imgUrlRef.current.value = res.data.url;
        imgPreviewRef.current.src = res.data.url;
        setImgUrl(res.data.url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const imgUpload = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8005/post", {
      content: text,
      url: imgUrl,
    });
  };

  return (
    <HomeWraper>
      <Section1 />
      <DiaryOptionWrapper>
        <KeepDiaryTitle placeholder="제목을 입력해주세요." />
        <DiaryAdvanceSetupWrapper>
          <DiaryOptionImg>
            사진 업로드
            <ToggleSwitchWrapper>
              <Checkbox
                id="toggleImg"
                type="checkbox"
                hidden
                value={toggleImg}
                onChange={() => setToggleImg(!toggleImg)}
              />
              <ToggleSwitch htmlFor="toggleImg">
                <ToggleButton></ToggleButton>
              </ToggleSwitch>
            </ToggleSwitchWrapper>
          </DiaryOptionImg>
          {toggleImg && (
            <div>
              <DiaryImgForm
                onSubmit={(e) => {
                  imgUpload(e);
                }}
              >
                <DiaryImgButtonWrapper>
                  <DiaryImgButton htmlFor="imgg">사진 선택</DiaryImgButton>
                  <DiaryImgInput
                    id="imgg"
                    type="file"
                    accept="image/*"
                    name="imgg"
                    onChange={onUpload}
                  />
                  <DiaryImgCancelButton>삭제하기</DiaryImgCancelButton>
                </DiaryImgButtonWrapper>
              </DiaryImgForm>

              <DiaryImgWrapper>
                <div>
                  <img
                    id="image-preview"
                    src=""
                    alt="미리보기"
                    ref={imgPreviewRef}
                  />

                  <input value="" type="hidden" name="url" ref={imgUrlRef} />
                </div>
              </DiaryImgWrapper>
            </div>
          )}
          <DiaryOptionPublic>
            공개
            <ToggleSwitchWrapper>
              <Checkbox
                id="togglePublic"
                type="checkbox"
                hidden
                value={togglePublic}
                onChange={() => setTogglePublic(!togglePublic)}
              />
              <ToggleSwitch htmlFor="togglePublic">
                <ToggleButton></ToggleButton>
              </ToggleSwitch>
            </ToggleSwitchWrapper>
          </DiaryOptionPublic>
          {togglePublic && (
            <Ooption>
              <ToggleAbleButtonWrapper>
                <LikeCountAbleButtonTitle>
                  좋아요 수 기능
                </LikeCountAbleButtonTitle>
                <ToggleFunctionSwitchComponent inputId={"likeCount"} />
              </ToggleAbleButtonWrapper>
              <ToggleAbleButtonWrapper>
                <HitsAbleButtonTitle>조회수 기능</HitsAbleButtonTitle>
                <ToggleFunctionSwitchComponent inputId={"hits"} />
              </ToggleAbleButtonWrapper>
              <ToggleAbleButtonWrapper>
                <CommentsAbleButtonTtile>댓글 기능</CommentsAbleButtonTtile>
                <ToggleFunctionSwitchComponent inputId={"Comments"} />
              </ToggleAbleButtonWrapper>
            </Ooption>
          )}
        </DiaryAdvanceSetupWrapper>
      </DiaryOptionWrapper>
      <DiaryTextareaWrapper>
        <DiaryContentText>Content</DiaryContentText>
        <DiaryTextarea
          name="content"
          value={text}
          placeholder="당신의 이야기를 들려주세요."
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></DiaryTextarea>
        <PostDiaryButtonForm>
          <PostDiaryButton>일기쓰기</PostDiaryButton>
          <DeleteDiaryButton>삭제하기</DeleteDiaryButton>
        </PostDiaryButtonForm>
      </DiaryTextareaWrapper>
    </HomeWraper>
  );
};

export default Keep2Diary;

const DiaryOptionWrapper = styled.div`
  padding: 30px;
  height: 1100px;
`;

const DiaryTextareaWrapper = styled.div`
  padding: 30px;
`;

const DiaryImgInput = styled.input`
  display: none;
`;

const DiaryImgForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const KeepDiaryTitle = styled.input`
  font-size: 40px;
  font-weight: 700;
  width: 500px;
  height: 70px;
  border: none;
`;

const DiaryImgButtonWrapper = styled.div`
  display: flex;
`;

const DiaryImgCancelButton = styled.div`
  width: 100px;
  height: 40px;
  text-align: center;
  padding: 10px;
  border-radius: 7px;
  color: #858e96;
  margin-right: 40px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #f7dd07;
  }
  cursor: pointer;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;

const DiaryImgButton = styled.label`
  width: 100px;
  height: 40px;
  text-align: center;
  padding: 10px;
  border-radius: 7px;
  color: #858e96;
  margin-right: 40px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #f7dd07;
  }
  cursor: pointer;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;

const DiaryImgWrapper = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 350px;
`;

const DiaryAdvanceSetupWrapper = styled.div`
  width: 400px;
  height: 200px;
  margin-top: 20px;
`;

const DiaryTextarea = styled.textarea`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 600px;
  padding: 20px;
  font-size: 25px;
  border: none;
  outline: none;
`;

const DiaryContentText = styled.div`
  font-size: 40px;
  color: #757575;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const DiaryOptionImg = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

const DiaryOptionPublic = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

const ToggleButton = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #555555;
  transition: all 0.2s ease-in;
`;

const ToggleSwitch = styled.label`
  width: 64px;
  height: 32px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: 30px;
  transition: all 0.2s ease-in;

  border: 3px solid #555555;
`;

const Checkbox = styled.input`
  &:checked + ${ToggleSwitch} {
    border: 3px solid #f7dd07;
    ${ToggleButton} {
      left: calc(100% - 25px);
      background-color: #f7dd07;
    }
  }
`;

const ToggleSwitchComponent = () => {
  return (
    <>
      <Checkbox id="toggleImg" type="checkbox" hidden />
      <ToggleSwitch htmlFor="toggleImg">
        <ToggleButton></ToggleButton>
      </ToggleSwitch>
    </>
  );
};
const ToggleSwitchComponent2 = ({ value }) => {
  return (
    <>
      <Checkbox id="togglePublic" type="checkbox" hidden value={value} />
      <ToggleSwitch htmlFor="togglePublic">
        <ToggleButton></ToggleButton>
      </ToggleSwitch>
    </>
  );
};

const ToggleSwitchWrapper = styled.div``;

const Ooption = styled.div`
  width: 350px;
  height: 210px;
  margin-bottom: 100px;
  padding: 10px 5px 10px 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;

//

const LikeCountAbleButtonTitle = styled.div``;

const HitsAbleButtonTitle = styled.div``;

const CommentsAbleButtonTtile = styled.div``;

const ToggleSwitchFunctionButton = () => {
  return (
    <>
      <Checkbox id="toggleImg" type="checkbox" hidden />
      <ToggleSwitch htmlFor="toggleImg">
        <ToggleButton></ToggleButton>
      </ToggleSwitch>
    </>
  );
};

const ToggleAbleSwitch = styled.label`
  width: 64px;
  height: 3px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #bbbbbb;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: 30px;
  transition: all 0.2s ease-in;
`;

const ToggleAbleButton = styled.span`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: 0.1px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #bbbbbb;
  transition: all 0.2s ease-in;
`;
const AbleCheckbox = styled.input`
  &:checked + ${ToggleAbleSwitch} {
    background-color: #f7dd07;
    ${ToggleAbleButton} {
      left: calc(100% - 20px);
      background-color: #f7dd07;
    }
  }
`;

const ToggleFunctionSwitchComponent = ({ inputId }) => {
  return (
    <>
      <AbleCheckbox id={inputId} type="checkbox" hidden />
      <ToggleAbleSwitch htmlFor={inputId}>
        <ToggleAbleButton></ToggleAbleButton>
      </ToggleAbleSwitch>
    </>
  );
};

const ToggleAbleButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostDiaryButtonForm = styled.form`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const PostDiaryButton = styled.button`
  width: 100px;
  height: 40px;
  color: #858e96;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #14b885;
    color: white;
  }
`;

const DeleteDiaryButton = styled.button`
  width: 100px;
  height: 40px;
  color: #858e96;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #ed203d;
    color: white;
  }
`;
