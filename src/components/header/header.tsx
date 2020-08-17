import React from 'react';

import Styled from './header.styles';
import LogoSrc from '../../icons/logo.svg';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo src={LogoSrc} alt="Origin" />
    </Styled.Header>
  );
};

export default Header;
