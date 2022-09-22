import styled from 'styled-components';

const Message = styled.p`
  font-size: 1em;
  font-family: sans-serif;
`;

const Notification = () => {
  return (
    <>
      <Message>There is no contacts to show</Message>
    </>
  );
};

export default Notification;
