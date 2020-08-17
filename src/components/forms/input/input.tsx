import React, { FC } from 'react';

import Styled from './input.styles';

export interface InputProps {
  /** Icon Src */
  iconsSrc?: string;
  /** Input placeholder */
  placeholder?: string;
  /** Input type */
  type?: string;
  /** Input label */
  label: string;
  /** input name */
  name: string;
}

const Input: FC<InputProps> = (props: InputProps) => {
  const { label, iconsSrc, placeholder, type, name } = props;

  return (
    <Styled.Wrapper>
      <Styled.Label>{label}</Styled.Label>

      <Styled.WrapperInput>
        <Styled.WrapperIcon>
          <Styled.Icon src={iconsSrc} />
        </Styled.WrapperIcon>
        <Styled.Input placeholder={placeholder} type={type} name={name} />
      </Styled.WrapperInput>
    </Styled.Wrapper>
  );
};

export default Input;
