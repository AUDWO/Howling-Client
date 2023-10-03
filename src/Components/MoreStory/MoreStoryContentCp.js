import React from "react";
import MoreStoryContactCp from "./MoreStoryContactCp";
import {
  MoreStoryContent,
  MoreStoryInfo,
  MoreStoryWrapper,
  MoreStoryContentDiv,
  MoreStoryTimepass,
  MoreStoryContentsWrapper,
  MoreStoryContentWrapper,
  MoreStoryProfileImg,
  MoreStoryProfileName,
  MoreStoryProfileWrapper,
  MoreStoryTimepassDot,
  MoreStoyrImgWrapper,
} from "../../StyledComponents/MoreStoryStyle/MoreStoryContentCpSt";

const MoreStoryContentCp = () => {
  return (
    <MoreStoryWrapper>
      <MoreStoryContentDiv>
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
              지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며,
              법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 국회는
              상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에 관한 조약,
              우호통상항해조약, 주권의 제약에 관한 조약,지방자치단체는 주민의
              복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서
              자치에 관한 규정을 제정할 수 있다. 국회는 상호원조 또는 안전보장에
              관한 조약, 중요한 국제조직에 관한 조약, 우호통상항해조약, 주권의
              제약에 관한 조약, 강화조약, 국가나 국민에게 중대한 재정적 부담을
              지우는 조약 또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을
              가진다. 공무 책임은 면제되지 아니한다.
            </MoreStoryContent>
            <MoreStoryContactCp />
          </MoreStoryContentWrapper>
        </MoreStoryContentsWrapper>
      </MoreStoryContentDiv>
    </MoreStoryWrapper>
  );
};

export default MoreStoryContentCp;
