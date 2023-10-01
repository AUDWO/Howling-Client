import React, { useRef, useState } from "react";
import axios from "axios";
import {
  DiaryImgWrapper,
  DiaryImgForm,
  DiaryImgButtonWrapper,
  DiaryImgButton,
  DiaryImgInput,
  DiaryImgCancelButton,
} from "../../StyledComponents/KeepDiaryStyle/DiaryImgSelect";

const DiaryImgSelectComponent = () => {
  const [imgUrl, setImgUrl] = useState();
  const [text, setText] = useState("");
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
          <img id="image-preview" src="" alt="미리보기" ref={imgPreviewRef} />

          <input value="" type="hidden" name="url" ref={imgUrlRef} />
        </div>
      </DiaryImgWrapper>
    </div>
  );
};

export default DiaryImgSelectComponent;
