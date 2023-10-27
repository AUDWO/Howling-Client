import React, { useState } from "react";
import styled from "styled-components";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";

const ProfilePasswordOption = () => {
  const [existingPassword, setExistingPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");

  /*
  const handlePost = async () => {
    try {
      const imgData = await axios.post("/post/profile-img", formData);

      const response = await axios.patch("/update/user/profile-info", {
        img: imgData.data.url,
        nickname: userNickname,
        name: userName,
      });
    } catch (error) {
      console.error(error);
    }
  };*/

  return (
    <ConfigWrapper>
      <ConfigOptionWrapper height={"auto"} flexD={"column"}>
        <div>현재 비밀번호</div>
        <Input
          width={"80"}
          value={existingPassword}
          onChange={(e) => {
            setExistingPassword(e.target.value);
          }}
        />
      </ConfigOptionWrapper>
      <ConfigOptionWrapper height={"auto"} marginT={"10"} flexD={"column"}>
        <div>새 비밀번호</div>
        <Input
          width={"150"}
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
      </ConfigOptionWrapper>
      <ConfigOptionWrapper height={"auto"} flexD={"column"} marginT={"10"}>
        <div>새 비밀번호 확인</div>
        <Input
          width={"80"}
          value={checkNewPassword}
          onChange={(e) => {
            setCheckNewPassword(e.target.value);
          }}
        />
      </ConfigOptionWrapper>
      <PostButtonWrapper>
        <PostButton onClick={() => {}}>변경하기</PostButton>
      </PostButtonWrapper>
    </ConfigWrapper>
  );
};

export default ProfilePasswordOption;

let marginDirection = {
  marginL: "margin-left",
  marginR: "margin-right",
  marginB: "margin-bottom",
  marginT: "margin-top",
};

let paddingDirection = {
  paddingT: "padding-top",
  paddingL: "padding-left",
  paddingB: "padding-bottom",
  paddingR: "padding-right",
};

let paddingDynamic = (props) => {
  let paddingValue = ``;

  for (const key in props) {
    if (paddingDirection[key]) {
      paddingValue += `
          ${paddingDirection[key]} : ${props[key]}px
          `;
    }
  }

  return paddingValue;
};

let marginDynamic = (props) => {
  let marginValue = ``;

  for (const key in props) {
    if (marginDirection[key]) {
      marginValue += `
          ${marginDirection[key]} : ${props[key]}px
          `;
    }
  }

  return marginValue;
};

export const ConfigWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;

  border-top: 0.5px solid gray;
`;

export const ConfigOptionWrapper = styled.div`
  height: ${(props) => (props.height ? props.height : "")};
  padding:10px;
   0px;
  ${(props) => marginDynamic(props)};
  display:flex;
  flex-direction:${(props) => (props.flexD ? props.flexD : "")};
`;

export const Input = styled.input`
  height: 50px;
  color: gray;
  border-radius: 7px;
  border: 0.5px solid gray;
  background-color: #ffffff;
  font-size: 15px;
  padding-left: 10px;
  margin-top: 10px;
`;

export const PostButtonWrapper = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const PostButton = styled.span`
  border-radius: 10px;
  background-color: #f7dd07;
  color: white;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  font-size: 100px;
  object-fit: cover;
`;

export const ProfileImgSelectButtonWrapper = styled.label`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  font-size: 17px;
  border-radius: 10px;
  padding: 10px 0px;
  &:hover {
    background-color: #f6f9f9;
  }
  cursor: pointer;
`;

export const ProfileImgSelectIcon = styled(AiOutlinePlusCircle)`
  margin-right: 5px;
  font-size: 20px;
`;

export const ConfigImgOptionWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const OptionTitle = styled.div``;

export const ProfileImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BasicProfileImgIcon = styled(BiSolidUser)`
  border-radius: 50%;
  background-color: #dbdbdb;
  color: white;
  font-size: 100px;
  padding: 5px;
`;
