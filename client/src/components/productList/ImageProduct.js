import React, { Fragment } from 'react';

const ImageProduct = ({ product }) => {
  return (
    <Fragment>
      <img src={`${product[0].image_path}`} alt={product[0].name} width="200" height="230" className="mt-5" />
    </Fragment>
  );
};

export default ImageProduct;
