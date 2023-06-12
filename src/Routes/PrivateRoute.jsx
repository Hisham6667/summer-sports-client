import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="w-full flex justify-center items-center h-[550px]">
      <span className="loading loading-spinner text-accent w-14"></span>
    </div>
  }

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;