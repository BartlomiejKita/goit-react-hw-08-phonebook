import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="100"
      width="100"
      color="dodgerblue"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
