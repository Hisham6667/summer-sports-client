import React from 'react';
import DboardNav from '../../Pages/Dashboard/DboardNav/DboardNav';
import Footer from '../../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <DboardNav></DboardNav>
      <div className='min-h-[550px]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;