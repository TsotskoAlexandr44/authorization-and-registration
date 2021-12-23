import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ContainerLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #fff;
  :hover {
    color: red;
  }
  &.active {
    color: red;
  }
`;

export default function AuthNav() {
  return (
    <div>
      <ContainerLink to="/register">Registration</ContainerLink>
      <ContainerLink to="/login">Login</ContainerLink>
    </div>
  );
}
