import React, { FC, ReactElement, ReactNode } from 'react';

import Styled from './card.styles';

export interface CardProps {
  /** src icon card */
  iconsSrc?: string;
  /** title card */
  title?: string;
  /** subtitle card */
  subtitle?: string;
  /** content card */
  children?: ReactElement | ReactNode | HTMLElement | string;
}

const Card: FC<CardProps> = (props: CardProps) => {
  const { iconsSrc, title, subtitle, children } = props;

  return (
    <Styled.Card>
      <Styled.Icon src={iconsSrc}></Styled.Icon>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>

      <Styled.WrapperChildren>{children}</Styled.WrapperChildren>
    </Styled.Card>
  );
};

export default Card;
