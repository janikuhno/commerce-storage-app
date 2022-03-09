import React from 'react';

// components
import SearchProduct from './productList/SearchProduct';
import Navigation from './Navigation';

const Dashboard = ({ setAuth }) => {
  return (
    <div>
      <Navigation setAuth={setAuth} />
      <SearchProduct />
    </div>
  );
};

export default Dashboard;
