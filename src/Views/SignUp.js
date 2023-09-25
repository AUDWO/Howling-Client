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
import { PasswordDiscord } from "../StyledComponents/LoginStyle/Error";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordDiscord, setPasswordDiscord] = useState(false);
  const [passwordFit, setPasswordFit] = useState(false);
  const navigate = useNavigate();

  let formData = {
    password: password,
    email: email,
    nickname: nickname,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== passwordCheck) {
        return;
      }
      const response = await axios.post(
        "http://localhost:8005/auth/join",
        formData
      );
      console.log("Success:", response.body);
      alert("회원가입 완료되었습니다!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // 정규표현식을 사용하여 비밀번호 조건을 확인
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordFitCheck = passwordRegex.test(value);
  };

  const handlePasswordFittBlur = (e) => {
    const value = e.target.value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (passwordRegex.test(value)) {
      setPasswordFit(false);
    }

    if (!passwordRegex.test(value)) {
      setPasswordFit(true);
    }
  };

  const handlePasswordDiscordBlur = (e) => {
    if (password === passwordCheck) {
      setPasswordDiscord(false);
    }
    if (password !== passwordCheck) {
      setPasswordDiscord(true);
    }
  };

  return (
    <Middle>
      <WebTitleWrap>
        <WolfIcon />
        <WebTitle>Howling</WebTitle>
      </WebTitleWrap>
      <CheckUserWrapper>
        <CheckUserContent>이미 회원이신가요?</CheckUserContent>
        <GoSignUp>로그인 하기</GoSignUp>
      </CheckUserWrapper>
      <LoginFormWrap onSubmit={handleSubmit}>
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
          <Label>nickName</Label>
          <Input
            type="text"
            name="nickName"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </InputWrap>

        <InputWrap>
          <Label>password</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            onBlur={handlePasswordFittBlur}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordFit && (
            <PasswordDiscord>
              비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.
            </PasswordDiscord>
          )}
        </InputWrap>
        <InputWrap>
          <Label>password check</Label>
          <Input
            type="password"
            name="passwordCheck"
            onBlur={handlePasswordDiscordBlur}
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
          />
          {passwordDiscord && (
            <PasswordDiscord>비밀번호가 일치하지 않습니다.</PasswordDiscord>
          )}
        </InputWrap>
        <LoginButton type="submit">회원가입</LoginButton>
      </LoginFormWrap>
    </Middle>
  );
};

export default SignUp;
