import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';

//components
import Navigation from '../Navigation';

const AddProduct = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    code: '',
    name: '',
    image_path: '',
    weight: '',
    kcal: '',
  });

  const { code, name, image_path, weight, kcal } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = { code, name, image_path, weight, kcal };
      const response = await fetch('/addproduct/products', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.length !== 0) {
        toast.success('Product succesfully added!');
      } else {
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Navigation setAuth={setAuth} />
      <h1 className="text-center my-5">Add Product</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="code"
            placeholder="Code"
            className="form-control"
            value={code}
            onChange={(e) => onChange(e)}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <input
            type="text"
            name="image_path"
            placeholder="Image path"
            className="form-control"
            value={image_path}
            onChange={(e) => onChange(e)}
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            className="form-control"
            value={weight}
            onChange={(e) => onChange(e)}
          />
          <input
            type="number"
            name="kcal"
            placeholder="Kcal"
            className="form-control"
            value={kcal}
            onChange={(e) => onChange(e)}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddProduct;
