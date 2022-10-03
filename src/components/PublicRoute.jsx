import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const token = useSelector(state => state.token);

  return token ? <Navigate to="/contacts" /> : <Outlet />;
};

export default PublicRoute;
