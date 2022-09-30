import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense, useEffect } from 'react';
import Loader from 'components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from 'services/phonebookApi';
import { deleteToken } from './redux/Actions';

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
  max-width: 400px;
  border-radius: 10px;
`;

const StyledBtn = styled.button`
  font-weight: bold;
  font-size: 20px;
  color: black;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

const UserMenu = () => {
  const token = useSelector(state => state.token);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.onbeforeunload = () => {
      return true;
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  const handleLogout = () => {
    logout(token).then(() => navigate('/'));
    dispatch(deleteToken());
  };

  return (
    <>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        {!token && <StyledLink to="/register">Sign up </StyledLink>}
        {!token && <StyledLink to="/login">Log in</StyledLink>}
        {token && <StyledLink to="/contacts">Contacts</StyledLink>}
        {token && <StyledBtn onClick={handleLogout}>Log out</StyledBtn>}
      </Nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UserMenu;
