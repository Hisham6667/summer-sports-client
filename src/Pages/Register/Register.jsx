import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const Register = () => {

  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState('');
  // const navigate = useNavigate();
  const { registerUser,
    updateUserProfile,
    googleSignIn,
    user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const onRegister = data => {
    setError('')
    // validations
    if (data.password !== data.confirmPassword) {
      setError('Your password & confirm password have to be same');
      return Swal.fire({
        icon: 'error',
        title: (error),
        showConfirmButton: false,
        timer: 2000
      })
    }
    else if (data.password.length < 6 || data.password.length > 20) {
      setError('Password have to be between 6 to 20 characters');
      return Swal.fire({
        icon: 'error',
        title: (error),
        showConfirmButton: false,
        timer: 2000
      })
    }
    else if (!/(?=.*[!@#$&*])/.test(data.password)) {
      setError('Type at least 1 special character');
      return Swal.fire({
        icon: 'error',
        title: (error),
        showConfirmButton: false,
        timer: 2000
      })
    }
    else if (!/(?=.*[A-Z])/.test(data.password)) {
      setError('Password have to be 1 uppercase letter');
      return Swal.fire({
        icon: 'error',
        title: (error),
        showConfirmButton: false,
        timer: 2000
      })
    }
    // TODO: remove log
    console.log(data);

    registerUser(data.email, data.password)
      .then(result => {
        setError('')
        const loggedUser = result.user;
        // TODO: remove loggedUser
        console.log(loggedUser);
        updateUserProfile(data.name, data.url)
          .then(() => {
            reset();
            navigate(from, { replace: true })
            Swal.fire({
              icon: 'success',
              title: 'Your journey started successfully',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(error => {
            setError(error.message)
            Swal.fire({
              icon: 'error',
              title: (error.message),
              showConfirmButton: false,
              timer: 2000
            })
          })
      })
      .catch(error => {
        setError(error.message);
        Swal.fire({
          icon: 'error',
          title: (error.message),
          showConfirmButton: false,
          timer: 2000
        })
      })
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          icon: 'success',
          title: 'Once again chief Welcome!',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        setError(error.message)
        Swal.fire({
          icon: 'error',
          title: (error.message),
          showConfirmButton: false,
          timer: 2000
        })
      })
  };

  return (
    <div className="w-full bg-amber-950/10 min-h-[600px] flex justify-center items-center p-20">

      <form onSubmit={handleSubmit(onRegister)} className="w-full max-w-md min-h-[400px] bg-white rounded-none p-10 flex flex-col">

        <div className="mb-5">
          <p className="text-amber-900 text-3xl font-semibold text-center uppercase">lets start a journey with us!</p>
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Name</span>
          </label>
          <input type="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required />
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Picture url</span>
          </label>
          <input type="url" {...register("url", { required: true })} placeholder="https://example.example/......." className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required />
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} placeholder="example@example.com" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required />
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required />
        </div>

        <div className="form-control mb-8">
          <label className="label">
            <span className="label-text text-lg">Confirm Password</span>
          </label>
          <input type="password" {...register("confirmPassword", { required: true })} placeholder="Confirm password" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required />
        </div>

        <p className='mb-2 text-sm text-red-500 text-center'>{error}</p>

        <div className="form-control">
          <button disabled={user ? true : false} type='submit' className="btn bg-white border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white">Register</button>
        </div>

        <div className="divider">or</div>

        <div className="form-control">
          <button disabled={user ? true : false} onClick={handleGoogleLogin} className="btn bg-white border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white"><FcGoogle className="text-xl" />register with google</button>
        </div>

        <div className="divider">or</div>

        <div>
          <p className="text-center">Already a user? <Link className="text-amber-800" to="/login">Login</Link></p>
        </div>

      </form>

    </div>
  );
};

export default Register;