import { Link } from 'react-router-dom';
import error from '../../assets/errorpage.jpg'

const Error = () => {
  return (
    <div className='w-5/6 mx-auto flex flex-col justify-center items-center'>
      <img className='max-w-2xl' src={error} alt="" />
      <Link to='/'>
        <button className='btn btn-accent btn-outline'>Back to home page</button>
      </Link>
    </div>
  );
};

export default Error;