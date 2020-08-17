import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: #f4f8fa;
  min-height: 100vh;
  padding-bottom: 50px;
`;

const TitlePage = styled.h1`
  color: #1b31a8;
  font: 400 18px/32px 'Work Sans', sans-serif;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font: 400 24px/32px 'Work Sans', sans-serif;
    margin-top: 40px;
  }
`;

const BoldText = styled.strong`
  font-weight: 600;
`;

export default {
  Wrapper,
  TitlePage,
  BoldText
};
