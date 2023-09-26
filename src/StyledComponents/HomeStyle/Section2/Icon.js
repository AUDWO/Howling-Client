import styled, { css } from "styled-components";

import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

import { FaRegComment } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import Profile from "../../../Components/Profile";
import ProfileWrapper from "../ProfileStyle/ProfileWrapper";

import { Bb } from "../../../Posting";

let fontSize35 = css`
  font-size: 25px;
`;
let fontSize25 = css`
  font-size: 20px;
`;

let mainColor = css`
  color: #f7dd07;
`;

let marginB60 = css`
  margin-bottom: 60px;
`;

let marginT60 = css`
  margin-top: 60px;
`;
let marginT30 = css`
  margin-top: 30px;
`;
let marginB30 = css`
  margin-bottom: 30px;
`;
let marginB200 = css`
  margin-bottom: 200px;
`;

export const ProfileIcon = styled(Profile)`
  & ${ProfileWrapper} {
    flex-direction: column;
    ${marginT60};
  }
`;
export const CommentIcon = styled(FaRegComment)`
  ${marginB60};
  ${fontSize25};
`;

export const DownArrowIcon = styled(BiDownArrow)`
  ${marginT30};
  ${marginB60}
  ${fontSize35};
  &:hover {
    ${mainColor};
  }
`;

export const UpArrowIcon = styled(BiUpArrow)`
  ${marginT60};
  ${marginB30}
  ${fontSize35};
  &:hover {
    ${mainColor};
  }
`;

export const MoreIcon = styled(IoReorderThreeSharp)`
  ${fontSize35}
`;
