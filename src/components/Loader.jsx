import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  margin: 10px 0 0 100px;
`;

const Loader = () => {
  return (
    <SpinnerWrapper>
      <Circles
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </SpinnerWrapper>
  );
};

export default Loader;
