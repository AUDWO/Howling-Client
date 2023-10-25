import React, { useRef, useEffect } from "react";
import WebTitle from "../../StyledComponents/LoginStyle/WebTitle";
import WebTitleWrap from "../../StyledComponents/LoginStyle/WebTitleWrap";
import {
  HomeIcon,
  DiaryIcon,
  SearchIcon,
  NewPostIcon,
  MoreIcon,
  KeepDiaryIcon,
  UserIcon,
} from "../../StyledComponents/HomeStyle/Section1/Icon";
import SidebarMenuWrapper from "../../StyledComponents/HomeStyle/Section1/SidebarMenuWrapper";
import SidebarMenu from "../../StyledComponents/HomeStyle/Section1/SidebarMenu";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import ModalOpenAtom from "../../store/ModalOpenAtom";

import { GiPunchBlast } from "react-icons/gi";

import MoreModalCp from "./MoreModalCp";

const FontColor = styled.span`
  font-size: 40px;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const Section1 = () => {
  const [postModalOpen, setPostModalOpen] = useRecoilState(
    ModalOpenAtom("makePostModal")
  );

  const [moreModalOpen, setMoreModalOpen] = useRecoilState(
    ModalOpenAtom("moreModal")
  );

  const navigate = useNavigate();

  const moreModalRef = useRef(null);
  const moreModalIconRef = useRef(null);

  console.log("vnvnvnvnvnvnvnvnvnvnvnv");
  console.log(moreModalOpen);
  console.log("vnvnvnvnvnvnvnvnvnvnvnv");

  useEffect(() => {
    if (moreModalOpen) {
      const handleClick = (e) => {
        if (
          !moreModalRef.current.contains(e.target) &&
          !moreModalIconRef.current.contains(e.target)
        ) {
          setMoreModalOpen(!moreModalOpen);
        }
        e.stopPropagation();
      };
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [moreModalOpen]);

  return (
    <SideBarWapper width={"340px"}>
      <section>
        <WebTitleWrap
          onClick={() => {
            navigate("/userr");
          }}
        >
          <WebTitle>
            <MainIcon />
            <div>
              <FontColor color="#f7dd07">W</FontColor>
              <FontColor color="#f7dd07">h</FontColor>
              <FontColor color="#f7dd07">a</FontColor>
              <FontColor color="#f7dd07">t</FontColor>
              <FontColor>'</FontColor>
              <FontColor color="#f7dd07">s</FontColor>
              <FontColor> </FontColor>
              <FontColor>u</FontColor>
              <FontColor>p</FontColor>
            </div>
          </WebTitle>
        </WebTitleWrap>
      </section>
      <SidebarMenuWrapper>
        <SidebarMenu
          onClick={() => {
            navigate("/userr");
          }}
        >
          <HomeIcon />
          <div>홈</div>
        </SidebarMenu>
        <SidebarMenu>
          <SearchIcon />
          <div>검색</div>
        </SidebarMenu>
        <SidebarMenu
          onClick={() => {
            navigate("/diary");
          }}
        >
          <DiaryIcon />
          <div>일기</div>
        </SidebarMenu>
        <SidebarMenu
          onClick={() => {
            setPostModalOpen(!postModalOpen);
          }}
        >
          <NewPostIcon />
          <div>만들기</div>
        </SidebarMenu>
        <SidebarMenu
          onClick={() => {
            navigate("/copykeepdiary");
          }}
        >
          <KeepDiaryIcon />
          <div>새 일기쓰기</div>
        </SidebarMenu>
        <SidebarMenu
          onClick={() => {
            navigate("/profile");
          }}
        >
          <UserIcon />
          <div>프로필</div>
        </SidebarMenu>
        {moreModalOpen && <MoreModalCp ref={moreModalRef} />}
        <SidebarMenu
          ref={moreModalIconRef}
          onClick={() => {
            if (moreModalOpen) {
              setMoreModalOpen(false);
            }
            if (!moreModalOpen) {
              setMoreModalOpen(true);
            }
          }}
        >
          <MoreIcon />
          <MoreTitleWrapper>
            <MoreTitle>더보기</MoreTitle>
          </MoreTitleWrapper>
        </SidebarMenu>
      </SidebarMenuWrapper>
    </SideBarWapper>
  );
};

export default Section1;

/**
 * if (!moreModalOpen) {
                setTimeout(() => {
                  setMoreModalOpen(true);
                }, 0);
              }
 */

//<WolfIcon />

export const SideBarWapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  padding: 20px;
  border-right: 0.5px solid gray;
`;

export const MenuOption = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainIcon = styled(GiPunchBlast)`
  color: #f7dd07;
  border-radius: 50%;
`;

export const MoreTitleWrapper = styled.div``;

export const MoreTitle = styled.div``;

//---modal
export const MoreModalWrapper = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background-color: #ffffff;
  position: fixed;
  z-index: 5;
  left: 60px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  padding: 6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;

export const MoreOptionWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MoreOption = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #efefef;
  }
`;
