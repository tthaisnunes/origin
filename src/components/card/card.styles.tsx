import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 auto;
  padding: 40px;
  @media only screen and (min-width: 768px) {
    max-width: 560px;
  }
`;

const Icon = styled.img``;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  color: #657786;
  font-size: 14px;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const WrapperChildren = styled.div`
  padding: 40px 0 0;
`;

export default {
  Card,
  Icon,
  Title,
  Subtitle,
  WrapperChildren
};
