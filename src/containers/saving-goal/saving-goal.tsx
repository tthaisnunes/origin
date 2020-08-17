import React from 'react';
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Form from './form/form';

import Styled from './saving-goal.styles';
import IconCardSrc from '../../icons/house.svg';

const SavingGoal = () => {
  return (
    <Styled.Wrapper>
      <Header />
      <Styled.TitlePage>
        Let&apos;s plan your <Styled.BoldText>saving goal</Styled.BoldText>.
      </Styled.TitlePage>
      <Card iconsSrc={IconCardSrc} title="Buy a house" subtitle="Saving goal">
        <Form />
      </Card>
    </Styled.Wrapper>
  );
};

export default SavingGoal;
