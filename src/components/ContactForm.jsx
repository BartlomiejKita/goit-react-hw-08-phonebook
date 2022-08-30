import PropTypes from 'prop-types';
import { useReducer } from 'react';
import styled from 'styled-components';

const Inputbox = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  margin-bottom: 50px;
  &:last-child {
  margin-bottom: 0;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
  box-sizing: border-box;

  &:focus ~ span {
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }

  &:not(:placeholder-shown) ~ span {
    color: red;
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }

  &:valid ~ span {
    color: #86af49;
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
`;

const Span = styled.span`
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
`;

const Btn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
  width: 50%;
  background: dodgerblue;
  color: #fff;
  border: #fff;
  &:hover {
    background: linear-gradient(45deg, greenyellow, dodgerblue);
  }
`;

const initialValue = {
  name: '',
  number: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'textInput':
      return { ...state, [action.payload.key]: action.payload.value };
    case 'reset':
      return initialValue;

    default:
      throw new Error();
  }
};

const ContactForm = ({ contacts, addContact }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = evt => {
    
    evt.preventDefault();

    for (const contact of contacts) {
      if (contact.name === state.name)
        return alert(
          `${contact.name} is already in your contacts with the phone number ${contact.number}`
        );

      if (contact.number === state.number)
        return alert(
          `${contact.number} is already in your contacts with the name ${contact.name}`
        );
    }

    addContact(state);
    (() => {
      dispatch({
        type: 'reset',
      });
    })();
  };

  const handleChange = evt => {
    dispatch({
      type: 'textInput',
      payload: { key: evt.target.name, value: evt.target.value },
    });
  };

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit}>
      <Inputbox>
        <label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
            placeholder=" "
          />
          <Span>Name</Span>
        </label>
      </Inputbox>
      <Inputbox>
        <label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
            placeholder=" "
          />
          <Span>Number</Span>
        </label>
      </Inputbox>
      <Inputbox>
        <Btn type="submit">Add contact</Btn>
      </Inputbox>
    </form>
  );
};

ContactForm.propTypes = {
  addContacts: PropTypes.func,
};

export default ContactForm;
