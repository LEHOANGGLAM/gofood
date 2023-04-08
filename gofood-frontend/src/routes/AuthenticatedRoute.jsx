import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { privateRoutes } from './routes';

const AuthRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (isAuthenticated !== true) {
    toast.error('You need to login to access this page.');
    return <Navigate to={privateRoutes.login} />;
  }

  return <>{children}</>;
};

export default AuthRoute;