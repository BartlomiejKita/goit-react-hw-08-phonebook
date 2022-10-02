import { useCurrentUserQuery } from 'services/phonebookApi';
import styled from 'styled-components';

const Paragraph = styled.p`
  text-align: center;
  font-size: 38px;
`;

const WelcomeBack = () => {
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
    <Paragraph>
      Welcome back <b>{name}</b>
    </Paragraph>
  );
};

export default WelcomeBack;
