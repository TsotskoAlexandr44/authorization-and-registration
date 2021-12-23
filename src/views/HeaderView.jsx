import { useSelector } from 'react-redux';
import UserMenu from '../components/UserMenu/UserMenu';
import Navigation from '../components/Navigation';
import AuthNav from '../components/AuthNav';
import { authSelectors } from '../redux/auth';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  max-width: 100%;
  justify-content: center;
  border-bottom: 1px solid #e2e3e5;
  background: linear-gradient(to right, #000428, #004e92);
  padding: 0px 15px;
`;

const HeaderContent = styled.div`
  width: 1240px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderContentImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 25px;
  border-radius: 50%;
`;

const Title = styled.h2`
  letter-spacing: 5px;
  color: #fff;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
`;

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <HeaderContainer>
      <HeaderContentImg src={Logo} alt="logo" />
      <HeaderContent>
        <Navigation />
        <Title></Title>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderContent>
    </HeaderContainer>
  );
};
