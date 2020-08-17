import styled from 'styled-components';

const Form = styled.form``;

const WrapperForm = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const WrapperCard = styled.div`
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;
  margin: 30px 0;
`;

const CardResult = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  padding: 30px;
`;

const CardResultTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`;

const CardResultValue = styled.p`
  font-weight: 500;
  font-size: 26px;
  color: #0079ff;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const CardResultDisclaimer = styled.p`
  background: #f4f8fa;
  font-size: 12px;
  padding: 16px 30px;
  margin: 0;
`;

const Strong = styled.strong`
  font-weight: 600;
`;

const Button = styled.button`
  border-radius: 32px;
  display: block;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  background: #1b31a8;
  border: none;
  width: 100%;
  margin: 0 auto;
  max-width: 400px;
  padding: 15px;
`;

export default {
  Button,
  CardResult,
  CardResultTitle,
  CardResultValue,
  CardResultDisclaimer,
  WrapperCard,
  WrapperForm,
  Strong,
  Form
};
