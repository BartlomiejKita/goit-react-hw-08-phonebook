import styled from 'styled-components';
import { useAddContactMutation } from 'services/phonebookApi';

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

const ContactForm = ({ contacts }) => {
  const [addContact] = useAddContactMutation();

  const handleSubmit = evt => {
    const form = evt.target;
    const name = form.name.value;
    const phone = form.number.value;

    evt.preventDefault();

    for (const contact of contacts) {
      if (contact.name === name)
        return alert(
          `${name} is already in your contacts with the phone number ${contact.phone}`
        );

      if (contact.phone === phone)
        return alert(
          `${phone} is already in your contacts with the name ${contact.name}`
        );
    }
    addContact({ name, phone });
    form.reset();
  };

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

export default ContactForm;
