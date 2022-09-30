import { useSignupMutation } from 'services/phonebookApi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { addToken } from 'components/redux/Actions';
import { useDispatch } from 'react-redux';

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

const Inputbox = styled.div`
  position: relative;
  max-width: 100%;
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

const RegistrationPage = () => {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    const form = evt.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const credentials = { name, email, password };
    evt.preventDefault();
    signup(credentials)
      .unwrap()
      .then(data => dispatch(addToken(data)))
      .then(() => navigate('/contacts'))
      .catch(() => {
        alert('User with this email address already exists');
      });

    evt.target.reset();
  };

  return (
    <Center>
      <MainHeader>Sign up</MainHeader>
      <form onSubmit={handleSubmit}>
        <Inputbox>
          <label>
            <Input
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter your e-mail address (example: characters@characters.domain)"
              required
              placeholder=" "
            />
            <Span>Email</Span>
          </label>
        </Inputbox>
        <Inputbox>
          <label>
            <Input
              type="text"
              name="name"
              title="Please enter your name"
              required
              placeholder=" "
            />
            <Span>Name</Span>
          </label>
        </Inputbox>
        <Inputbox>
          <label>
            <Input
              type="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
              required
              placeholder=" "
            />
            <Span>Password</Span>
          </label>
        </Inputbox>
        <Inputbox>
          <Btn type="submit">Sign up</Btn>
        </Inputbox>
      </form>
    </Center>
  );
};

export default RegistrationPage;
