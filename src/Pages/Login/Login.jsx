import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const Login = () => {

  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState('');
  // const navigate = useNavigate();
  const { loginUser,
    googleSignIn,
    user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onSignIn = data => {
    loginUser(data.email, data.password)
      .then(() => {
        setError('');
        reset();
        navigate(from, { replace: true })
        Swal.fire({
          icon: 'success',
          title: 'Once again chief Welcome!',
          showConfirmButton: false,
          timer: 1500
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
      .then(() => {
        navigate(from, { replace: true })
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

      <form onSubmit={handleSubmit(onSignIn)} className="w-full max-w-md min-h-[400px] bg-white rounded-none p-10 flex flex-col">

        <div className="mb-5">
          <p className="text-amber-900 text-3xl font-semibold text-center uppercase">welcome back chief!</p>
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" />
        </div>

        <div className="form-control mb-10">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" />
        </div>

        <p className='mb-2 text-sm text-red-500 text-center'>{error}</p>

        <div className="form-control">
          <button disabled={user ? true : false} type="submit" className="btn bg-white border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white">Login</button>
        </div>

        <div className="divider">or</div>

        <div className="form-control">
          <button onClick={handleGoogleLogin} disabled={user ? true : false} className="btn bg-white border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white"><FcGoogle className="text-xl" />login with google</button>
        </div>

        <div className="divider">or</div>

        <div>
          <p className="text-center">New here? <Link className="text-amber-800" to="/register">Register</Link></p>
        </div>

      </form>

    </div>
  );
};

export default Login;