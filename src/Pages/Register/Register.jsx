import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
  // TODO: register form using firebase
  return (
    <div className="w-full bg-amber-950/10 min-h-[600px] flex justify-center items-center p-20">

      <form className="w-full max-w-md min-h-[400px] bg-white rounded-none p-10 flex flex-col">

        <div className="mb-5">
          <p className="text-amber-900 text-3xl font-semibold text-center uppercase">lets start a journey with us!</p>
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required/>
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" placeholder="example@example.com" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required/>
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required/>
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-lg">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm password" className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required/>
        </div>

        <div className="form-control mb-10">
          <label className="label">
            <span className="label-text text-lg">Picture url</span>
          </label>
          <input type="url" placeholder="https://example.example/......." className="input input-bordered bg-amber-950/10 placeholder:focus:text-black" required/>
        </div>

        <div className="form-control">
          <button className="btn bg-white border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white">Register</button>
        </div>

        <div className="divider">or</div>

        <div className="form-control">
          <button className="btn bg-white border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white"><FcGoogle className="text-xl" />register with google</button>
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