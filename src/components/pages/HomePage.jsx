import styled from 'styled-components';

const Center = styled.div`
  position: relative;
  padding: 50px 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 2px 1px black;
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

const HomePage = () => {
  return (
    <Center>
      <MainHeader>Phonebook</MainHeader>
    </Center>
  );
};

export default HomePage;
