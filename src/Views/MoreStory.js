import React from "react";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import Section1 from "../Components/Section1/Section1";
import styled from "styled-components";
import DiaryPost from "../Components/Diary/DiaryPost";
import { BiPencil } from "react-icons/bi";

import { LuSmilePlus } from "react-icons/lu";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GiWolfHowl } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
import Profile from "../Components/Profile";

import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { FaRegGrinSquintTears } from "react-icons/fa";

const fontSize = `25px`;

export const SmileIcon = styled(BiSmile)`
  font-size: ${fontSize};
`;
export const SadIcon = styled(FaRegGrinSquintTears)`
  font-size: ${fontSize};
`;
export const HearIcon = styled(AiOutlineHeart)`
  font-size: ${fontSize};
`;
export const GoodIcon = styled(AiOutlineLike)`
  font-size: ${fontSize};
  color: #3182f6;
`;

export const StoryContactIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70px;
  height: 35px;
  border-radius: 7px;
  background-color: #e5e8eb;
  margin-right: 18px;
  cursor: pointer;
  &:hover {
    background-color: #f9e667;
    color: black;
  }
`;

export const StoryContactIconCountNumber = styled.div`
  color: black;
`;

const MoreStoryTimepassDot = styled(BsDot)``;

const MoreStory = () => {
  return (
    <Bn>
      <HomeWrapper2>
        <Section1 />
        <MoreStoryWrapper>
          <DV>
            <MoreStoryContentsWrapper>
              <MoreStoryProfileWrapper>
                <MoreStoryProfileImg />
                <MoreStoryInfo>
                  <MoreStoryProfileName>myeongjae</MoreStoryProfileName>
                  <MoreStoryTimepass>
                    <MoreStoryTimepassDot />
                    4시간
                  </MoreStoryTimepass>
                </MoreStoryInfo>
              </MoreStoryProfileWrapper>
              <MoreStoyrImgWrapper>q</MoreStoyrImgWrapper>
              <MoreStoryContentWrapper>
                <MoreStoryContent>
                  지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을
                  관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다.
                  국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에
                  관한 조약, 우호통상항해조약, 주권의 제약에 관한
                  조약,지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을
                  관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다.
                  국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에
                  관한 조약, 우호통상항해조약, 주권의 제약에 관한 조약,
                  강화조약, 국가나 국민에게 중대한 재정적 부담을 지우는 조약
                  또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다.
                  공무 책임은 면제되지 아니한다.
                </MoreStoryContent>
                <MoreStoryContact>
                  <StoryContactIconWrapper>
                    <GoodIcon />
                    <StoryContactIconCountNumber>2</StoryContactIconCountNumber>
                  </StoryContactIconWrapper>
                  <StoryContactIconWrapper>
                    <HearIcon />
                    <StoryContactIconCountNumber>2</StoryContactIconCountNumber>
                  </StoryContactIconWrapper>
                  <StoryContactIconWrapper>
                    <SmileIcon />
                    <StoryContactIconCountNumber>2</StoryContactIconCountNumber>
                  </StoryContactIconWrapper>
                  <StoryContactIconWrapper>
                    <SadIcon />
                    <StoryContactIconCountNumber>2</StoryContactIconCountNumber>
                  </StoryContactIconWrapper>
                </MoreStoryContact>
              </MoreStoryContentWrapper>
            </MoreStoryContentsWrapper>
          </DV>
        </MoreStoryWrapper>
      </HomeWrapper2>
      <MoreStoryCommentWrapper>
        <MoreStoryCommentContentsWrapper>
          <MoreStoryCommentTitle>댓글</MoreStoryCommentTitle>
          <MoreStoryCommnetInputWrapper>
            <MoreStoryCommentInputIcom />
            <MoreStoryCommentInput placeholder="댓글을 입력하세요." />
          </MoreStoryCommnetInputWrapper>
          <MoreStoryComment>
            <ProfileWrapper>
              <WolfIcon />
            </ProfileWrapper>

            <CommentWrapper>
              <ProfileInfoWrapper>
                <ProfileName>HOWLING</ProfileName>
                <OfficialBadgeIcon />
              </ProfileInfoWrapper>
              <CommentContent>댓글을 남겨보세요!</CommentContent>
              <CommentContact>
                <CommentContactIcon />
                <CommentContactReply>답글</CommentContactReply>
              </CommentContact>
            </CommentWrapper>
          </MoreStoryComment>
          <MoreStoryComment>
            <ProfileWrapper>
              <MoreStoryCommentProfile></MoreStoryCommentProfile>
            </ProfileWrapper>
            <CommentWrapper>
              <ProfileName>myeongjae</ProfileName>
              <CommentContent>
                뒷모습만 봐도 잘생긴 부장님 최고... 이걸 올려준 유나님도 최고
                뒷모습만 봐도 잘생긴 부장님 최고... 이걸 올려준 유나님도 최고
                뒷모습만 봐도 잘생긴 부장님 최고... 이걸 올려준 유나님도 최고
                뒷모습만 봐도 잘생긴 부장님 최고... 이걸 올려준 뒷모습만 봐도
              </CommentContent>
              <CommentContact>
                <CommentContactIcon />
                <CommentContactReply>답글</CommentContactReply>
              </CommentContact>
            </CommentWrapper>
          </MoreStoryComment>
          <MoreStoryComment>
            <ProfileWrapper>
              <MoreStoryCommentProfile></MoreStoryCommentProfile>
            </ProfileWrapper>
            <CommentWrapper>
              <ProfileName>myeongjae</ProfileName>
              <CommentContent>
                뒷모습만 봐도 잘생긴 부장님 최고... 이걸 올려준 유나님도 최고
              </CommentContent>
              <CommentContact></CommentContact>
            </CommentWrapper>
          </MoreStoryComment>

          <CommentSpace></CommentSpace>
        </MoreStoryCommentContentsWrapper>
      </MoreStoryCommentWrapper>
    </Bn>
  );
};

export default MoreStory;

const Bn = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HomeWrapper2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const DV = styled.div`
  margin-top: 60px;
`;

export const MoreStoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MoreStoryProfileWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
`;

export const MoreStoryProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
`;

export const MoreStoryProfileName = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const MoreStoryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MoreStoyrImgWrapper = styled.div`
  width: 100%;
  height: 600px;
  background-color: black;
`;

export const MoreStoryImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MoreStoryTimepass = styled.div`
  font-size: 15px;
  color: #737373;
`;

export const MoreStoryContentsWrapper = styled.div`
  width: 700px;
  height: auto;
`;

export const MoreStoryContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  height: auto;
`;

export const MoreStoryContent = styled.div`
  color: #636363;
  font-size: 18px;
  min-height: 100px;
  height: auto;
  line-height: 1.7;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const MoreStoryContact = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;

//---------------------------------
export const MoreStoryCommentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f8f9fa;
`;

export const MoreStoryCommentContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: auto;
  margin-top: 50px;
`;

export const MoreStoryCommentTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  border: none;
  margin-bottom: 20px;
`;
export const MoreStoryCommnetInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 700px;
  height: 55px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  background-color: #e8e8e8;
`;

export const MoreStoryCommentInputIcom = styled(BiPencil)`
  font-size: 25px;
  margin-right: 20px;
`;
export const MoreStoryCommentInput = styled.textarea`
  width: 600px;
  height: 30px;
  font-size: 20px;
  vertical-align: center;
  outline: none;
  border: none;
  resize: none;
  border-radius: 8px;
  background-color: #e8e8e8;
`;

export const MoreStoryComment = styled.div`
  display: flex;
  width: 100%;
  min-height: 120px;
  height: auto;
  padding: 25px 15px 10px 15px;
  border-bottom: 0.5px solid black;
`;

export const ProfileWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
export const MoreStoryCommentProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  margin-right: 20px;
`;

export const CommentWrapper = styled.div``;

export const ProfileInfoWrapper = styled.div`
  display: flex;
`;
export const ProfileName = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-right: 6px;
`;
export const CommentContent = styled.div`
  height: auto;
  line-height: 1.5;
`;

export const CommentContact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const CommentContactIcon = styled(LuSmilePlus)`
  margin-right: 20px;
  font-size: 25px;
  cursor: pointer;
`;

export const CommentContactReply = styled.div`
  cursor: pointer;
`;

export const CommentSpace = styled.div`
  width: 100%;
  height: 100px;
`;

export const OfficialBadgeIcon = styled(HiMiniCheckBadge)`
  color: #f7dd07;
`;

export const WolfIcon = styled(GiWolfHowl)`
  font-size: 46px;
  color: #f7dd07;
  border-radius: 50%;
  border: 1px solid white;
  background-color: black;
`;
/*



const MoreStory = () => {
  return (
    <Bn>
      <HomeWrapper2>
        <Section1 />

        <MoreStoryWrapper>
          <DV>
            <MoreStoryContentsWrapper>
              <MoreStoryProfileWrapper>q</MoreStoryProfileWrapper>
              <MoreStoyrImgWrapper>q</MoreStoyrImgWrapper>
              <MoreStoryContentWrapper>d</MoreStoryContentWrapper>
            </MoreStoryContentsWrapper>
          </DV>
        </MoreStoryWrapper>
      </HomeWrapper2>
      <MoreStoryCommentWrapper></MoreStoryCommentWrapper>
    </Bn>
  );
};

export default MoreStory;

const Bn = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HomeWrapper2 = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: auto;

  display: flex;
`;

export const DV = styled.div`
  height: auto;
`;

export const MoreStoryWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

export const MoreStoryProfileWrapper = styled.div`
  width: 200px;
  height: 100px;
  background-color: red;
`;

export const MoreStoyrImgWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: pink;
`;
export const MoreStoryContentsWrapper = styled.div`
  width: 700px;
  height: 700px;
  border: 1px solid red;
`;

export const MoreStoryContentWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
`;

export const MoreStoryCommentWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f8f9fa;
`;

const Div = styled.div``;

const Dd = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Nav = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100px;
  background-color: blue;
  opacity: 0.7;
`;

const DiarysWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
  padding: 20px;
`;

const Db = styled.div`
  background-color: hotpink;
  height: 60px;
  overflow-y: scroll;
  opacity: 0.5;
`;
*/

/*
<MoreStoryWrapper>
        <MoreStoryContentsWrapper>
          <MoreStoryProfileWrapper>q</MoreStoryProfileWrapper>
          <MoreStoyrImgWrapper>q</MoreStoyrImgWrapper>
          <MoreStoryContentWrapper>d</MoreStoryContentWrapper>
        </MoreStoryContentsWrapper>
        <MoreStoryCommentWrapper>wdq</MoreStoryCommentWrapper>
      </MoreStoryWrapper>*/
