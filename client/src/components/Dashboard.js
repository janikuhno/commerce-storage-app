import React from 'react';
import { toast } from 'react-toastify';

const Dashboard = ({ setAuth }) => {
  // logout
  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      setAuth(false);
      toast.success('Logged out!');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div className="d-flex mt-5 justify-content-around">
        <h2>Inventory Management</h2>
        <button className="btn btn-primary" onClick={(e) => logout(e)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
