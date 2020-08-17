import React from 'react';

import Input from '../../../components/forms/input/input';
import DatePicker from '../../../components/forms/date-picker/date-picker';

import Styled from './form.styled';
import InputIconSrc from '../../../icons/money.svg';

const Form = () => {
  return (
    <Styled.Form>
      <Styled.WrapperForm>
        <Input
          iconsSrc={InputIconSrc}
          placeholder="0,000"
          type="number"
          name="money"
          label="Total amount"
        />
        <DatePicker label="Reach goal by" />
      </Styled.WrapperForm>
      <Styled.WrapperCard>
        <Styled.CardResult>
          <Styled.CardResultTitle>Monthly amount</Styled.CardResultTitle>
          <Styled.CardResultValue>$521</Styled.CardResultValue>
        </Styled.CardResult>
        <Styled.CardResultDisclaimer>
          You’re planning <Styled.Strong>48 monthly deposits</Styled.Strong>
          to reach your <Styled.Strong>$25,000</Styled.Strong> goal by
          <Styled.Strong>October 2020</Styled.Strong>.
        </Styled.CardResultDisclaimer>
      </Styled.WrapperCard>
      <Styled.Button>Confirm</Styled.Button>
    </Styled.Form>
  );
};

export default Form;
