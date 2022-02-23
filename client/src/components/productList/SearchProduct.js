import React, { Fragment, useState, useEffect } from 'react';

const SearchProduct = () => {
  const [code, setCode] = useState('');
  const [product, setProduct] = useState([]);

  const getProduct = async (code) => {
    try {
      const response = await fetch(`/dashboard/products/${code}`, {
        method: 'GET',
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await response.json();

      setProduct(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="input-group d-flex justify-content-center mt-5">
        <div className="form-outline">
          <input
            type="search"
            placeholder="Enter GTIN/EAN code"
            className="form-control"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={() => getProduct(code)}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default SearchProduct;
