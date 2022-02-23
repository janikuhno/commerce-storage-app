import React, { Fragment } from 'react';

const SearchProduct = () => {
  return (
    <Fragment>
      <div className="input-group d-flex justify-content-center mt-5">
        <div className="form-outline">
          <input type="search" placeholder="Enter GTIN/EAN code" className="form-control" />
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default SearchProduct;
