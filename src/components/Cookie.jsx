import CookieConsent from 'react-cookie-consent';

const Cookie = () => {
  return (
    <>
      <CookieConsent
        cookieName="cookies"
        style={{ background: '#000', textAlign: 'left' }}
        buttonStyle={{
          border: '2px solid #000',
          borderRadius: '10px',
          outline: 'none',
          background: 'dodgerblue',
          padding: '6px',
          color: '#fff',
          fontSize: '1em',
          '&:hover': {
            background: 'red',
          },
        }}
        expires={365}
      >
        This website uses cookies to enhance the user experience.{' '}
      </CookieConsent>
    </>
  );
};

export default Cookie;
