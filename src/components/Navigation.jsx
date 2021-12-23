import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #fff;
  &.active {
    color: red;
  }
`;

const Navigation = () => {
  const isLoading = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Link to="/">Home page</Link>
      {isLoading && (
        <>
          <Link to="/movie">Trending today</Link>
          <Link to="/reviews">Reviews page</Link>
          <Link to="/edit">Edit profile</Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
