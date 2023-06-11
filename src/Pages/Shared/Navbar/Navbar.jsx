import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import ActiveLink from './ActiveLink';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
  const {loading, user, exitUser} = useAuth()
  // TODO: add spinner to loading page
  // <span className="loading loading-spinner text-accent w-10"></span>

  const handleExitUser = () => {
    exitUser()
    .then(()=> {
      Swal.fire({
        icon: 'success',
        title: 'See you chief!',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch((err)=> {
      Swal.fire({
        icon: 'error',
        title: (err.message),
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  return (
    <div className="navbar flex justify-between items-center my-2">

      <div className='flex items-center'>
        <img className='h-16 w-16' src={logo} alt="" />
        <div className="flex flex-col justify-center items-center">
          <p className='uppercase text-4xl font-serif font-semibold text-amber-900'>summer</p>
          <p className='text-xl text-teal-600'>Sports</p>
        </div>
      </div>

      {/* TODO: update links to a valid route */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><ActiveLink to='/'>Home</ActiveLink></li>
          <li><ActiveLink to='/instructors'>Instructors</ActiveLink></li>
          <li><ActiveLink to='/classes'>Classes</ActiveLink></li>
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
            <button onClick={handleExitUser} className="btn btn-error btn-outline btn-sm">Logout</button>
          </div>
          :
          <Link to='/login'>
            <button className="btn btn-accent btn-outline btn-sm hover:shadow-lg transition-all">Login</button>
          </Link>
        }

      </div>
    </div>
  );
};

export default Navbar;