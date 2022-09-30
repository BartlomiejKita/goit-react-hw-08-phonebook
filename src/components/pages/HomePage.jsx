import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Center = styled.div`
  position: relative;
  padding: 50px 25px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 2px 1px black;
  max-width: 350px;
  margin: 0 auto;
`;

const MainHeader = styled.h1`
  font-size: 2em;
  border-left: 5px solid dodgerblue;
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
`;

const Paragraph = styled.p`
  text-align: right;
`;

const StyledLink = styled(Link)`
  color: dodgerblue;
`;

const HomePage = () => {
  return (
    <Center>
      <MainHeader>Phonebook</MainHeader>
      <Paragraph>
        Phonebook allows you to save, delete and view your phone contacts at any
        time. Please <StyledLink to="/register">Sign up </StyledLink>or{' '}
        <StyledLink to="/login">Log in</StyledLink> to get started.
      </Paragraph>
    </Center>
  );
};

export default HomePage;
