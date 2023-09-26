import React, { useState, useRef } from "react";
import axios from "axios";

const UserPost = () => {
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
    <>
      <form
        onSubmit={(e) => {
          imgUpload(e);
        }}
      >
        <div>
          <textarea
            name="content"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <img id="image-preview" src="" alt="미리보기" ref={imgPreviewRef} />

          <input value="" type="hidden" name="url" ref={imgUrlRef} />
        </div>
        <div>
          <label HtmlFor="img">사진 업로드</label>
          <input type="file" accept="image/*" onChange={onUpload} />

          <button type="submit">howling</button>
        </div>
      </form>
    </>
  );
};

export default UserPost;
