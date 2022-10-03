import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(52, 56, 60);
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 364px;
  padding: 24px;
  background: white;
  color: rgb(14, 30, 37);
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.16);
`;
const Header = styled.h1`
  margin: 0;
  font-size: 22px;
  line-height: 24px;
`;

const NotFound = () => {
  return (
    <>
      <Main>
        <Card>
          <Header>Page Not Found</Header>
          <div>
            <p>
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </p>
            <Link to="/">Back to our site</Link>
          </div>
        </Card>
      </Main>
    </>
  );
};

export default NotFound;
