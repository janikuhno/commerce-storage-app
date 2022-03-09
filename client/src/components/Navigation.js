import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navigation = ({ setAuth }) => {
  // logout
  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      setAuth(false);
      toast.success('Kirjauduttu ulos!');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="d-flex mt-5 justify-content-around">
        <h2>Tuotehallinta</h2>
        <div>
          <nav>
            <ul>
              <li style={{ display: 'inline' }}>
                <Link to="/dashboard">Etsi tuote</Link>
              </li>
              <li style={{ display: 'inline' }}>
                <Link to="/allproducts">Listaa tuotteet</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="btn btn-primary" onClick={(e) => logout(e)}>
          Kirjaudu ulos
        </button>
      </div>
    </Fragment>
  );
};

export default Navigation;
