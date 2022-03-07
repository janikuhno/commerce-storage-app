import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { name, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, password };
      const response = await fetch('/authentication/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem('token', parseRes.jwtToken);

        setAuth(true);
        toast.success('Login successful!');
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Sisäänkirjautuminen</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={onSubmitForm}>
          <input
            type="name"
            name="name"
            placeholder="käyttäjätunnus"
            className="form-control my-3"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="salasana"
            className="form-control my-3"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <button className="btn btn-success btn-block">Kirjaudu sisään</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
