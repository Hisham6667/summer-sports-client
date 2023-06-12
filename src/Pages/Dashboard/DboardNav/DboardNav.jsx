import logo from '../../../assets/logo.png';
import ActiveLink from '../../Shared/Navbar/ActiveLink';
import { Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const DboardNav = () => {

  const { user } = useAuth()

  return (
    <div className="navbar flex justify-around items-center my-2 border rounded-full shadow-lg border-amber-800">

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><ActiveLink to='/dashboard/selectedclasses'>Selected Classes</ActiveLink></li>
          <li><ActiveLink to='/dashboard/enrolledclasses'>Enrolled Classes</ActiveLink></li>
          <li><ActiveLink to='/dashboard/paymenthistory'>Payment History</ActiveLink></li>
        </ul>
      </div>

      <div className='flex items-center justify-center'>
        <Bounce>
          <div className='tooltip tooltip-accent tooltip-bottom' data-tip={user ? (user.displayName ? user.displayName : user.email) : 'no user'} >
            <img className='h-16 w-16 border-dashed border p-1 border-amber-800 rounded-full' src={user ? user.photoURL : logo} alt="" />
          </div>
        </Bounce>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><ActiveLink to='/classes'>Classes</ActiveLink></li>
          <li><ActiveLink to='/instructors'>Instructors</ActiveLink></li>
          <li><ActiveLink to='/'>Home</ActiveLink></li>
        </ul>
      </div>

    </div>

  );
};

export default DboardNav;