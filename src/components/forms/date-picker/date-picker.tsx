import React, { useState, FC } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import Styled from './date-picker.styles';

import PreviousIconSrc from '../../../icons/previous.svg';
import NextIconSrc from '../../../icons/next.svg';

export interface DatePickerProps {
  /** datepicker label */
  label: string;
}

const DatePicker: FC<DatePickerProps> = (props: DatePickerProps) => {
  const [startDate, setStartDate] = useState(new Date());

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const { label } = props;

  return (
    <Styled.Wrapper>
      <Styled.Label>{label}</Styled.Label>
      <Styled.WrapperDatePicker>
        <Styled.ActionButton
          type="button"
          onClick={() =>
            setStartDate(
              new Date(startDate.getFullYear(), startDate.getMonth() - 1, 1)
            )
          }
        >
          <Styled.Icon src={PreviousIconSrc} />
        </Styled.ActionButton>

        <Styled.DateContent>
          <Styled.Month>{month[startDate.getMonth()]}</Styled.Month>
          {startDate.getUTCFullYear()}
        </Styled.DateContent>

        <Styled.ActionButton
          type="button"
          onClick={() =>
            setStartDate(
              new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1)
            )
          }
        >
          <Styled.Icon src={NextIconSrc} />
        </Styled.ActionButton>
      </Styled.WrapperDatePicker>
    </Styled.Wrapper>
  );
};

export default DatePicker;
