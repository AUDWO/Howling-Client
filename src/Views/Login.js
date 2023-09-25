import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// CSS Components
import InputWrap from "../StyledComponents/LoginStyle/InputWrap";
import Middle from "../StyledComponents/Middle";
import LoginFormWrap from "../StyledComponents/LoginStyle/LoginFormWrap";
import LoginButton from "../StyledComponents/LoginStyle/ButtonStyle/LoginButton";
import Label from "../StyledComponents/LoginStyle/Label";
import Input from "../StyledComponents/LoginStyle/Input";

import WebTitleWrap from "../StyledComponents/LoginStyle/WebTitleWrap";
import WebTitle from "../StyledComponents/LoginStyle/WebTitle";
import { WolfIcon } from "../StyledComponents/HomeStyle/Section1/Icon";
import {
  CheckUserWrapper,
  CheckUserContent,
  GoSignUp,
} from "../StyledComponents/LoginStyle/UserCheck";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let response;
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      response = await axios.post("http://localhost:8005/auth/login", formData);
      navigate("/userr");
    } catch (err) {
      console.error(err);
    }
  };

  const formData = {
    email: email,
    password: password,
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.get("http://localhost:8005/auth/logout");
  };

  if (response) {
    return (
      <>
        <div>{response.user.nickname}</div>
      </>
    );
  }
  return (
    <Middle>
      <WebTitleWrap>
        <WolfIcon />
        <WebTitle>Howling</WebTitle>
      </WebTitleWrap>
      <CheckUserWrapper>
        <CheckUserContent>회원이 아니신가요?</CheckUserContent>
        <GoSignUp
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입 하기
        </GoSignUp>
      </CheckUserWrapper>
      <LoginFormWrap onSubmit={handleLogin}>
        <InputWrap>
          <Label>email</Label>
          <Input
            type="email"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputWrap>
        <InputWrap>
          <Label>password</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputWrap>
        <LoginButton type="submit">로그인 하기</LoginButton>
      </LoginFormWrap>
    </Middle>
  );
};

export default Login;
