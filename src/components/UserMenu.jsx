import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense } from 'react';
import Loader from 'components/Loader';

const StyledLink = styled(NavLink)`
  font-weight: bold;
  font-size: 20px;
  color: black;
  &.active {
    color: dodgerblue;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 4px 2px 1px black;
  padding: 15px 0;
  margin: 25px auto;
  background: white;
  width: 400px;
  border-radius: 10px;
`;

const UserMenu = () => {
  return (
    <>
      <Nav>
        <StyledLink to="/" end>Home </StyledLink>
        <StyledLink to="/register">Sign up </StyledLink>
        <StyledLink to="/login">Log in</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UserMenu;
