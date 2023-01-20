import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLogged, component }) => {
  if (isLogged) return component;
  if (!isLogged) return <Navigate to="/login" />;
};

export default PrivateRoute;