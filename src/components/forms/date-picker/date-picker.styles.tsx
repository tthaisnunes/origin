import styled from 'styled-components';

const Wrapper = styled.div``;

const WrapperDatePicker = styled.div`
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
  margin-top: 5px;
`;

const DateContent = styled.p`
  align-items: center;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  width: 100%;
`;

const Month = styled.strong`
  font-size: 20px;
`;

const ActionButton = styled.button`
  background: #e1e8ed;
  border: none;
  cursor: pointer;
  padding: 18px;
  outline: none;
`;

const Icon = styled.img``;

const Label = styled.label`
  color: #1c1e1f;
  font: 500 16px/20px 'Work Sans', sans-serif;
`;

export default {
  ActionButton,
  DateContent,
  Icon,
  Label,
  Month,
  Wrapper,
  WrapperDatePicker
};
