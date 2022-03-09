import React, { Fragment } from 'react';
import Navigation from '../Navigation';

const ListAllProduct = ({ setAuth }) => {
  return (
    <Fragment>
      <Navigation setAuth={setAuth} />
      <div>Hello!</div>
    </Fragment>
  );
};

export default ListAllProduct;
