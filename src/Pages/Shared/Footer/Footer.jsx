import { FaMapMarkedAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiBookOpen, FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-amber-900 text-white">
      <div className='grid grid-cols-3 gap-10'>
        <div className='flex flex-col justify-center items-center'>
          <FaMapMarkedAlt className='text-7xl mb-3' />
          <p className="text-2xl mb-2">Address</p>
          <p>R147 road, Chittagong, Bangladesh</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <FiBookOpen className='text-7xl mb-3' />
          <p className="text-2xl mb-2">About Us</p>
          <p>To embrace kids other social activity to improve their life and healthy. Summer Camp means to us improve a kids extra curricular activities</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <FiPhoneCall className='text-7xl mb-3' />
          <p className="text-2xl mb-2">Contact Us</p>
          <div className='grid grid-cols-3 gap-5 text-2xl text-teal-400'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <hr className="bg-white w-5/6 mx-auto" />
      <p className='my-0'>Copyright © 2023 - All right reserved by SUMMER SPORTS Ltd</p>
    </footer>
  );
};

export default Footer;