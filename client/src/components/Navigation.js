import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navigation = ({ setAuth }) => {
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
    <Fragment>
      <div className="d-flex mt-5 justify-content-around">
        <h2>Product management</h2>
        <div>
          <nav className="nav">
            <Link to="/dashboard" className="nav-link">
              Find product
            </Link>
            <Link to="/allproducts" className="nav-link">
              List all products
            </Link>
            <Link to="/addproduct" className="nav-link">
              Add product
            </Link>
          </nav>
        </div>
        <button className="btn btn-primary" onClick={(e) => logout(e)}>
          Logout
        </button>
      </div>
    </Fragment>
  );
};

export default Navigation;
