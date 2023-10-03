import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  border: 1px solid red;
  padding: 20px;
`;

export default SectionContainer;
