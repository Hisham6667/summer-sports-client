import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  // TODO: login with email and pass complete
  return (
    <div className="w-full bg-amber-950/10 min-h-[600px] flex justify-center items-center p-20">

      <form className="w-full max-w-md min-h-[400px] bg-white rounded-none p-10 flex flex-col">
        <div className="mb-5">
          <p className="text-amber-900 text-3xl font-semibold text-center uppercase">welcome back chief!</p>
        </div>
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" />
        </div>

        <div className="form-control mb-10">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" />
        </div>

        <div className="form-control">
          <button className="btn bg-white border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white">Login</button>
        </div>

        <div className="divider">or</div>

        <div className="form-control">
          <button className="btn bg-white border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white"><FcGoogle className="text-xl"/>login with google</button>
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