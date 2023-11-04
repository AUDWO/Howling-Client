import React, { useState } from "react";
import styled from "styled-components";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import { useRecoilState } from "recoil";
import toggleValueAtom from "../../../store/ToggleValueAtom";

const ProfileInfoSettingOption = ({ userInfo }) => {
  const [profileImg, setProfileImg] = useState(userInfo.img);
  const [newProfileImg, setNewProfileImg] = useState(null);
  const [userName, setUserName] = useState(userInfo.name);
  const [userNickname, setUserNickname] = useState(userInfo.nickname);
  const [userInfoChange, setUserInfoChange] = useRecoilState(
    toggleValueAtom("userInfoChange")
  );

  console.log("userInfoChange");
  console.log(userInfoChange);
  console.log("userInfoChange");

  const formData = new FormData();
  if (newProfileImg) {
    formData.append("img", newProfileImg);
  }

  function handleImgSelect(e) {
    e.preventDefault();
    const selectedImg = e.target.files[0];
    if (selectedImg && selectedImg.type.startsWith("image/")) {
      setNewProfileImg(selectedImg);
    }
  }

  const handlePost = async () => {
    try {
      if (newProfileImg) {
        const imgData = await axios.post("/post/profile-img", formData);
        const response = await axios.patch("/update/user/profile-info", {
          img: imgData.data.url,
          nickname: userNickname,
          name: userName,
        });
      }

      if (!newProfileImg) {
        const response = await axios.patch("/update/user/profile-info", {
          nickname: userNickname,
          name: userName,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ConfigWrapper>
      <ConfigOptionWrapper height={"auto"} flexD={"column"}>
        <div>이름</div>
        <Input
          width={"80"}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </ConfigOptionWrapper>
      <ConfigOptionWrapper height={"auto"} marginT={"10"} flexD={"column"}>
        사용자 이름
        <Input
          width={"150"}
          value={userNickname}
          onChange={(e) => {
            setUserNickname(e.target.value);
          }}
        />
      </ConfigOptionWrapper>
      <ConfigImgOptionWrapper height={"auto"}>
        <ProfileImgWrapper>
          {profileImg ? (
            <ProfileImg
              src={
                newProfileImg ? URL.createObjectURL(newProfileImg) : profileImg
              }
            />
          ) : (
            <BasicProfileImgIcon />
          )}
        </ProfileImgWrapper>

        <ProfileImgSelectButtonWrapper htmlFor="profileImg">
          <ProfileImgSelectIcon />
          <OptionTitle>프로필 사진 변경하기</OptionTitle>
          <Input
            id="profileImg"
            type="file"
            accept="image/*"
            hidden
            onChange={handleImgSelect}
          />
        </ProfileImgSelectButtonWrapper>
      </ConfigImgOptionWrapper>
      <PostButtonWrapper>
        <PostButton
          onClick={() => {
            handlePost();
            setUserInfoChange(!userInfoChange);
          }}
        >
          저장하기
        </PostButton>
      </PostButtonWrapper>
    </ConfigWrapper>
  );
};

export default ProfileInfoSettingOption;

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
