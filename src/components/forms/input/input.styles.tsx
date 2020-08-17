import styled from 'styled-components';

const Wrapper = styled.div``;

const WrapperInput = styled.div`
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  display: flex;
  margin-top: 5px;
`;

const WrapperIcon = styled.div`
  background: #f4f8fa;
  display: flex;
  min-width: 56px;
  min-height: 56px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img``;

const Input = styled.input`
  border: none;
  padding: 15px;
  outline: none;
  width: 100%;

  color: #1c1e1f;
  font: 600 20px/24px 'Work Sans', sans-serif;
`;

const Label = styled.label`
  color: #1c1e1f;
  font: 500 16px/20px 'Work Sans', sans-serif;
`;

export default {
  Input,
  Icon,
  Label,
  WrapperIcon,
  WrapperInput,
  Wrapper
};
