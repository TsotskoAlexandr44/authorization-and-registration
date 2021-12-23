import { FC } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  .container {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Container: FC = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};
