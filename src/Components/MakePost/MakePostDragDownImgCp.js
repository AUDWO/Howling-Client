import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import postImgAtom from "../../store/PostImgAtom";
import { useRecoilState } from "recoil";

function MakePostDragDownImgCp() {
  const [imgUrlData, setImgUrlData] = useRecoilState(postImgAtom);

  function handleFileSelect(e) {
    e.preventDefault();
    const selectedImgUrl = e.target.files[0];
    console.log(selectedImgUrl);
    if (selectedImgUrl && selectedImgUrl.type.startsWith("image/")) {
      setImgUrlData(selectedImgUrl);
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedImgUrl = e.dataTransfer.files[0];
    if (selectedImgUrl && selectedImgUrl.type.startsWith("image/")) {
      setImgUrlData(selectedImgUrl);
    }
  };

  return (
    <DragDownImgWrapper>
      <DragDownImgContentWrapper
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {imgUrlData ? (
          <ImgWrapper>
            <DragDownImg
              src={URL.createObjectURL(imgUrlData)}
              alt="Dropped"
            ></DragDownImg>
            <DragDownImgCancelButton
              onClick={() => {
                setImgUrlData(null);
              }}
            />
          </ImgWrapper>
        ) : (
          <DragDownImgSignWrapper>
            <DragDownImgSign>이미지를 드래그하여 업로드하세요</DragDownImgSign>
            <MakeStoryImgFormWrapper>
              <MakeStoryImgSelectButton htmlFor="postImg">
                사진 선택하기
              </MakeStoryImgSelectButton>
              <MakeStoryImgInput
                id="postImg"
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileSelect}
              />
            </MakeStoryImgFormWrapper>
          </DragDownImgSignWrapper>
        )}
      </DragDownImgContentWrapper>
    </DragDownImgWrapper>
  );
}

export default MakePostDragDownImgCp;

export const DragDownImgWrapper = styled.div`
  width: 100%;
  height: 600px;
`;

export const DragDownImgContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  cursor: pointer;
  border-top: 1px solid #ededed;
`;

export const DragDownImg = styled.img`
  position: relative;
  z-index: 2;
  width: 500px;
  height: 500px;
  object-fit: cover;
  border: none;
`;

export const DragDownImgSignWrapper = styled.div``;

export const DragDownImgSign = styled.span`
  font-size: 20px;
`;
/*
export const DragDownImgForm = styled.form``;
*/

export const DragDownImgCancelButton = styled(RxCross1)`
  padding: 5px;
  position: absolute;
  border-radius: 50%;
  color: white;
  background-color: #ed203d;
  top: 10px;
  right: 10px;
  opacity: 0.5;
  &:hover {
    background-color: #ed203d;
    opacity: 1;
  }
  font-size: 40px;
  z-index: 3;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

//------눌러서 이미지 가져오기 코드들 (니중에 컴포넌트로 분리할 예정)

export const MakePostImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const MakeStoryImgSelectWrapper = styled.div``;

export const MakeStoryImgFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
`;

export const MakeStoryImgSelectButton = styled.label`
  font-size: 15px;
  font-weight: 600;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
  padding-right: 15px;
  color: black;
  border-radius: 10px;
  border: 1px solid black;
  &:hover {
    background-color: #f1f4f7;
  }
  cursor: pointer;
`;

export const MakeStoryImgInput = styled.input``;

export const MakeStoryImg = styled.img``;
