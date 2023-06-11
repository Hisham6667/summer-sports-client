import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import useAuth from "../../Hooks/useAuth";

const Main = () => {
  const { loading } = useAuth()

  if (loading) {
    return <div className="w-full flex justify-center items-center h-[550px]">
      <span className="loading loading-spinner text-accent w-14"></span>
    </div>
  }
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[600px]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;