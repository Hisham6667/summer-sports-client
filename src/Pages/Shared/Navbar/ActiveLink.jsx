import { NavLink } from 'react-router-dom';

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink to={to} className={({ isActive }) => isActive ? 'border-b-4 border-amber-800 border-dashed rounded-none' : ''}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;