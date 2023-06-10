import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Navbar = () => {
  // TODO: update user from firebase
  const user = false;

  return (
    <div className="navbar flex justify-between items-center my-2">

      <div className='flex items-center'>
        <img className='h-16 w-16' src={logo} alt="" />
        <div className="flex flex-col justify-center items-center">
          <p className='uppercase text-4xl font-serif font-semibold text-amber-900'>summer</p>
          <p className='text-xl text-teal-600'>Sports</p>
        </div>
      </div>

      {/* update links to a valid route */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/instructors'>Instructors</Link></li>
          <li><Link to='/classes'>Classes</Link></li>
        </ul>
      </div>

      <div>
        {user
          ?
          <div className='flex items-center justify-center'>
            <img className='h-16 w-16 bg-teal-700 rounded-full' src={logo} alt="" />
            <Link to='/'>
              <button className="btn btn-accent btn-outline btn-sm mx-2">Dashboard</button>
            </Link>
            <button className="btn btn-error btn-outline btn-sm">Logout</button>
          </div>
          :
          <Link to='/'>
            <button className="btn btn-accent btn-outline btn-sm">Login</button>
          </Link>
        }

      </div>
    </div>
  );
};

export default Navbar;