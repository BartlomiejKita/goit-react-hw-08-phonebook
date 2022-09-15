import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './redux/Actions';

const List = styled.li`
  &::before {
    content: '•';
    color: dodgerblue;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;

const Btn = styled.button`
  cursor: pointer;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 6px;
  border-radius: 10px;
  font-size: 1em;
  width: 30%;
  background: dodgerblue;
  color: #fff;
  border: #fff;
  &:hover {
    background: linear-gradient(45deg, greenyellow, dodgerblue);
  }
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts
    .filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));
};

const ContactList = () => {
  const state = useSelector(({ contacts, filter }) =>
    getVisibleContacts(contacts, filter)
  );
  const dispatch = useDispatch();

  return (
    <ul>
      {state.map(({ id, name, number }) => (
        <ElementWrapper key={'el' + id}>
          <List key={id}>
            {name}: {number}
          </List>
          <Btn key={'btn' + id} onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Btn>
        </ElementWrapper>
      ))}
    </ul>
  );
};


export default ContactList;
