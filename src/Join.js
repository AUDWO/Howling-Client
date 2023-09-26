import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nickname, setNickname] = useState();

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };
  let formData = {
    password: password,
    email: email,
    nickname: nickname,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8005/auth/join",
        formData
      );
      console.log("Success:", response.body);
      alert("회원가입 완료되었습니다!");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="join-wrapper">
      <form className="join-form" onSubmit={handleSubmit}>
        <div className="input-group_email">
          <label className="input-label_email">이메일</label>
          <input
            id="input-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-group-nickname">
          <label className="input-label_nickname">닉네임</label>
          <input
            id="input-nickname"
            type="text"
            name="nickname"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="input-group-password">비밀번호</label>
          <input
            id="input-password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button id="join-btn" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Join;
