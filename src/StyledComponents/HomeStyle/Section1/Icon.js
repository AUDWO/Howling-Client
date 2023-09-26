import styled, { css } from "styled-components";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { BsJournalBookmark } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import { GiWolfHowl } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";

let mainColor = css`
  color: #f7dd07;
`;

let cursorPointer = css`
  cursor: pointer;
`;

const size = css`
  font-size: 25px;
  fontweight: 700;
`;
const marginR = css`
  margin-right: 10px;
`;

export const WolfIcon = styled(GiWolfHowl)`
  ${cursorPointer};
  display: flex;
  align-items: center;
  font-size: 70px;
  ${mainColor};
  background-color: black;
  border-radius: 50%;
  margin-right: 20px;
`;

export const HomeIcon = styled(BiHomeAlt2)`
  font-weight: 800;
  ${cursorPointer};
  ${size};
  ${marginR};
`;

export const SearchIcon = styled(BsSearch)`
  ${cursorPointer};
  ${size};
  ${marginR};
`;

export const DiaryIcon = styled(BsJournalBookmark)`
  ${cursorPointer};
  ${size};
  ${marginR};
`;

export const NewPostIcon = styled(AiOutlineAppstoreAdd)`
  ${cursorPointer};
  ${size};
  ${marginR};
`;

export const KeepDiary = styled(BsPencilSquare)`
  ${cursorPointer};
  ${size};
  ${marginR};
`;
export const MoreIcon = styled(CgMoreO)`
  ${cursorPointer};
  ${size};
  ${marginR};
`;
