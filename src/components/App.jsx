import ContactForm from './ContactForm';
import FilteredUsers from './FilteredUsers';
import ContactList from './ContactList';
import Notification from './Notification';
import styled from 'styled-components';
import isEmpty from 'utilities/isEmpty';
import { useSelector } from 'react-redux';

const Center = styled.div`
  position: relative;
  padding: 50px 50px;
  background: #fff;
  border-radius: 10px;
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

const SecondHeader = styled.h2`
  font-size: 1.5em;
  border-left: 5px solid dodgerblue;
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
`;

const App = () => {
  const state = useSelector(state => state.contacts);

  return (
    <>
      <Center>
        <MainHeader>Phonebook</MainHeader>
        <ContactForm />

        <SecondHeader>Contacts</SecondHeader>
        <FilteredUsers />
        {isEmpty(state) ? (
          <Notification message="There is no contacts to show" />
        ) : (
          <ContactList />
        )}
      </Center>
    </>
  );
};

export default App;
