import React, { useEffect, useState } from "react";
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
  MoreStoryImg,
} from "../../StyledComponents/MoreStoryStyle/MoreStoryContentCpSt";
import axios from "axios";

const MoreStoryContentCp = ({ storyId }) => {
  console.log("whywhywhy");
  const [storyInfo, setStoryInfo] = useState(null);

  useEffect(() => {
    const fetchMoreStory = async () => {
      try {
        const response = await axios.get(`/page/renderMoreStory/${storyId}`);

        setStoryInfo({ ...response.data[0] });
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoreStory();
  }, []);

  if (storyInfo) {
    return (
      <MoreStoryWrapper>
        <MoreStoryContentDiv>
          <MoreStoryContentsWrapper>
            <MoreStoryProfileWrapper>
              <MoreStoryProfileImg />
              <MoreStoryInfo>
                <MoreStoryProfileName>
                  {storyInfo.User.nickname}
                </MoreStoryProfileName>
                <MoreStoryTimepass>
                  <MoreStoryTimepassDot />
                  4시간
                </MoreStoryTimepass>
              </MoreStoryInfo>
            </MoreStoryProfileWrapper>
            <MoreStoyrImgWrapper>
              <MoreStoryImg src={storyInfo.img} />
            </MoreStoyrImgWrapper>
            <MoreStoryContentWrapper>
              <MoreStoryContent>{storyInfo.content}</MoreStoryContent>
              <MoreStoryContactCp storyInfo={storyInfo} />
            </MoreStoryContentWrapper>
          </MoreStoryContentsWrapper>
        </MoreStoryContentDiv>
      </MoreStoryWrapper>
    );
  }

  return <div>안녕</div>;
};

export default MoreStoryContentCp;
