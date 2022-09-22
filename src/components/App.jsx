import ContactForm from './ContactForm';
import FilteredUsers from './FilteredUsers';
import ContactList from './ContactList';
import styled from 'styled-components';
import { useGetContactsQuery } from 'services/phonebookApi';
import Notification from './Notification';
import isEmpty from 'utilities/isEmpty';
import Loader from './Loader';

const Center = styled.div`
  margin-top: 50px;
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
  const {
    data: contacts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess && !isEmpty(contacts)) {
    content = <ContactList contacts={contacts} />;
  } else if (isSuccess && isEmpty(contacts)) {
    content = <Notification />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <>
      <Center>
        <MainHeader>Phonebook</MainHeader>
        <ContactForm contacts={contacts} />

        <SecondHeader>Contacts</SecondHeader>
        <FilteredUsers />
        {content}
      </Center>
    </>
  );
};

export default App;
