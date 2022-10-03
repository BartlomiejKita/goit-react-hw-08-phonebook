import { useCurrentUserQuery } from 'services/phonebookApi';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from 'services/phonebookApi';
import { deleteToken } from './redux/Actions';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const StyledBtn = styled.button`
  padding: 0;
  font-family: inherit;
  font-weight: bold;
  font-size: 20px;
  color: black;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

const Logout = () => {
  const token = useSelector(state => state.token);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove('token');
    logout(token).then(dispatch(deleteToken()));
    navigate('/');
  };

  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useCurrentUserQuery();

  let name;

  if (isLoading) {
    name = 'Is loading...';
  } else if (isSuccess) {
    name = user.name;
  } else if (isError) {
    name = error.toString();
  }
  return (
    <StyledBtn title={`You are logged in as: ${name}`} onClick={handleLogout}>
      Log out
    </StyledBtn>
  );
};

export default Logout;
