import styled from 'styled-components';
import { Header } from './HeaderView';
import { Footer } from './FooterView';

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 80vh;
  background: linear-gradient(to right, #000046, #1cb5e0);
`;

const Title = styled.h1`
  margin-top: 200px;
  font-weight: 700;
  letter-spacing 7px;
  font-size: 50px;
  color: #fff;
`;

const Text = styled.p`
  font-size: 20px;
`;

export const HomeView = () => {
  return (
    <>
      <Header />
      <DivContainer>
        <Title>
          [_Welcome to our resource_]
          <br />
          <Text> _To continue the work, you must register_</Text>
        </Title>
      </DivContainer>
      <Footer />
    </>
  );
};
