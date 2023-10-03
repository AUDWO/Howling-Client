import React from "react";
import Section1 from "../Components/Section1/Section1";
import Section2 from "../Components/Section2/Section2";
import Section3 from "../Components/Section3/Section3";
import HomeWraper from "../StyledComponents/HomeStyle/HomeWrapper";
import styled from "styled-components";
import { PPp, PpW, Pp, Pname } from "../Posting";
const Home = () => {
  return (
    <>
      <MakeStoryModal>
        <MakeStoryWrapper>
          <MakeStoryImgWrapper>
            <MakeStoryImgSelectWrapper>
              <MakeStoryImgFormWrapper>
                <MakeStoryImgSelectButton htmlFor="storyImg">
                  사진 선택하기
                </MakeStoryImgSelectButton>
                <MakeStoryImgInput
                  id="storyImg"
                  type="file"
                  accept="image/*"
                  hidden
                />
              </MakeStoryImgFormWrapper>
            </MakeStoryImgSelectWrapper>
            <MakeStoryImg />
          </MakeStoryImgWrapper>
          <MakeStoryContentWrapper>
            <MakeStoryProfileWrapper>
              <PpW>
                <Pp></Pp>
              </PpW>
              <Pname>myeongjae_7053</Pname>
            </MakeStoryProfileWrapper>
          </MakeStoryContentWrapper>
        </MakeStoryWrapper>
      </MakeStoryModal>

      <HomeWraper>
        <Section1 />
        <Section2 />
        <Section3 />
      </HomeWraper>
    </>
  );
};

export default Home;

const MakeStoryModal = styled.div`
  position:fixed;
  z-index: 17;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}
`;

const MakeStoryWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 20;
  width: 800px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  opacity: 1;
`;

export const MakeStoryImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;

export const MakeStoryImgSelectWrapper = styled.div``;

export const MakeStoryImgFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
`;

export const MakeStoryImgSelectButton = styled.label`
  font-size: 15px;
  font-weight: 600;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
  padding-right: 15px;
  color: black;
  background-color: #f7dd07;
  border-radius: 10px;
  cursor: pointer;
`;

export const MakeStoryImgInput = styled.input``;

export const MakeStoryImg = styled.img``;

export const MakeStoryContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid pink;
`;

export const MakeStoryProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
