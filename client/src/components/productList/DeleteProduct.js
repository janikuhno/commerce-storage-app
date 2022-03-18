import React, { Fragment } from 'react';

const DeleteProduct = ({ code, allProducts, setAllProducts }) => {
  const deleteProduct = async (code) => {
    try {
      await fetch(`/allproducts/products/${code}`, {
        method: 'DELETE',
        headers: { jwt_token: localStorage.token },
      });

      setAllProducts(allProducts.filter((product) => product.code !== code));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button className="btn btn-danger" onClick={() => deleteProduct(code)}>
        Delete
      </button>
    </Fragment>
  );
};

export default DeleteProduct;
